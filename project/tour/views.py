from django.shortcuts import render
from app.models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import permissions
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser 
from .tour_serializer import *
from rest_framework import generics
from rest_framework.decorators import api_view
# Create your views here.
from  app.serializer import *
from django.db.models import Avg
from datetime import datetime
    
class TourStartDateView(APIView):
    def get(self,request):
        tourstar =TourStartDate.objects.all()
        tour_data=TourStartSerializer(tourstar  ,many=True)
        
        return Response(data=tour_data.data,status=status.HTTP_200_OK)
        
class TourView(APIView):
    def get(self,request):
        search_name = request.query_params['tour_name']
        # limit = request.query_params['limit'] | 20
        # page = request.query_params['page'] | 1
        tours = Tour.objects.all()
        if search_name:
            tours = tours.filter(tour_name__contains=search_name)
        
        tour_data = TourSerializer(tours, many=True)
        return Response(data=tour_data.data,status=status.HTTP_200_OK)

class VehicleView(APIView):
    def get(self,request):
        vehicles=Vehicle.objects.all()
        vehicle_data=VehicleSerializer(vehicles,many=True)
        return Response(data=vehicle_data.data,status=status.HTTP_200_OK)
    
class LocationView(APIView):
    def get(self,request):
        locations=Location.objects.all()
        location_data=LocationSerializer(locations,many=True)
        return Response(data=location_data.data,status=status.HTTP_200_OK)
    
class ScheduleView(APIView):
    def get(self,request):
        schedules=Schedule.objects.all()
        schedule_data=ScheduleSerializer(schedules,many=True)
        return Response(data=schedule_data.data,status=status.HTTP_200_OK)
        


        
@api_view(['GET'])
def recommend_view(request):
    registers = TourStartDate.objects.values('tour_id').annotate(total_stars=Avg('register_tourstartdateid__star')).order_by('-total_stars')[:4]
    list_tour_id = []
    for register in registers:
        list_tour_id.append(register['tour_id'])
    tours = Tour.objects.filter(id__in=list_tour_id).all()
    tour_data = RecommendTourSerializer(tours, many=True)
    return Response(data=tour_data.data,status=status.HTTP_200_OK)


@api_view(['GET'])
def search_tour_view(request):
    order_end_location=request.GET.get('end_location', '')
    order_start_date=request.GET.get('start_date', '')
    order_price=request.GET.get('price', '')

    #get index of Location 
    list_tour_id=set()
    if order_end_location != '':
        Locations=Location.objects.filter(location_name__icontains=order_end_location).all()
        list_location=[]
        for location in Locations:
            list_location.append(location.id)
   
        tours_startDates= Tour.objects.filter(end_location_Id_id=list_location[0]).all()
        for tour in tours_startDates:
          if tour.id not in list_tour_id:
            list_tour_id.add(tour.id)
    
    
    if order_start_date != '':
        order_start_date_obj=datetime.strptime(order_start_date,'%Y-%m-%d').date()
        start_date=TourStartDate.objects.filter(start_date__gte=order_start_date_obj).all()
        for sd in start_date:
            if sd.tour_id not in list_tour_id:
                list_tour_id.add(sd.tour_id.id)
                
    price_ranges = {
        '0-1M': (0, 1000000),
        '1M-3M': (1000000, 3000000),
        '3M-5M': (3000000, 5000000),
        '5M-10M': (5000000, 10000000),
        '10M+': (10000000, float('inf'))
    }
    
    if order_price != '' and order_price in price_ranges:
        min_price, max_price = price_ranges[order_price]
        price_filtered_tours = Tour.objects.filter(price__gte=min_price, price__lt=max_price).all()
        # Locations=Location.objects.filter(location_name__icontains=order_price).all()
        # list_location=[]
        print(price_filtered_tours)
        for price in price_filtered_tours:
            if price.id not in list_tour_id:
              list_tour_id.add(price.id)

    tours=Tour.objects.filter(id__in=list_tour_id).all()
    tour_data=SearchSerializer(tours,many=True)
    print(tour_data)
    return Response(data=tour_data.data,status=status.HTTP_200_OK)
    
    
@api_view(['GET'])
def detail_tour_view(request,id):
    tours=Tour.objects.filter(id=id).all()
    tour_data=DetailTourSerializer(tours,many=True)
    return Response(data=tour_data.data,status=status.HTTP_200_OK)
    

    
@api_view(['GET'])
def commend_view(request,id):
    tourStartDates=TourStartDate.objects.filter(tour_id=id).all()
    listIdStartDate=[]
    for tourStarDate in tourStartDates:
        listIdStartDate.append(tourStarDate.id)
    registers=Register.objects.filter(tour_startdate_id__in=listIdStartDate).all()
    commend_data=CommendSerializer(registers,many=True)
    return Response(data=commend_data.data,status=status.HTTP_200_OK)

# @api_view(['GET'])
# def show_payment(request, id, date):
@api_view(['GET'])
def listCustomer_view(request, tour_startdate_id):
    bookings=Register.objects.filter(tour_startdate_id=tour_startdate_id).all()
    custommer_data=listCustomerSerializer(bookings, many=True)
    return Response(data=custommer_data.data,status=status.HTTP_200_OK)


@api_view(['GET','POST'])
def booking_view( request,id):# id startdate, id user
    if request.method=='GET':
        order_id_start_date=request.GET.get('id_start_date')
        order_id_user=request.GET.get('id_user')
        
        
        tourstartdate=TourStartDate.objects.filter(id=order_id_start_date)
        
        
        user=NewUser.objects.filter(id=order_id_user)
        
        data1 =BookingTourSerializer(tourstartdate,many=True)
        data2=BookingUserSerializer(user,many=True)
        merge={
            'tour_data':data1.data,
            'user_data':data2.data,
        }
        return Response(merge,status=status.HTTP_200_OK)
    elif request.method=='POST':
        data={
            'acc_id':request.GET.get('id_user'),
            'tour_startdate_id':request.GET.get('id_start_date'),
            'star': None
        }
        serializer = PostBookingSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def alltour_view(request):
    tours=Tour.objects.all()
    data=SearchSerializer(tours,many=True)
    return Response(data=data.data,status=status.HTTP_200_OK)