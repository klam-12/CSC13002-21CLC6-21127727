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

from  app.serializer import *
from django.db.models import Avg
from datetime import datetime
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


from django.db.models import Count, F
from django.db.models.functions import TruncMonth
import datetime
from django.utils import timezone
from django.db.models.functions import ExtractMonth

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
    # registers = TourStartDate.objects.values('tour_id').annotate(total_stars=Avg('register_tourstartdateid__star')).order_by('-total_stars')[:4]
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
        if list_location != []:
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


import json
@api_view(['GET'])
def list_tour_of_user(request):
    id_user = request.user
    bookings=Register.objects.filter(acc_id_id=id_user).all()
    
    tour = []
    for item in bookings:
        tour_startdate = item.tour_startdate_id_id
        print(tour_startdate)
        tourStartDate = TourStartDate.objects.filter(id=tour_startdate).all()
        print(tourStartDate)
        Tours = Tour.objects.filter(id=tourStartDate[0].tour_id_id).all()
        tour.append(Tours[0].id)
        
    
    tour =set(tour)
    print(tour)
    tours=Tour.objects.filter(id__in=tour).all()
    tour_data=DetailTourSerializer(tours,many=True)
    return Response(data= tour_data.data,status=status.HTTP_200_OK)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def booking_view( request,id):
    if request.method=='GET':
        order_id_start_date=request.GET.get('id_start_date')
        order_id_user=request.GET.get('id_user')
        
        print(order_id_start_date)
        tourstartdate=TourStartDate.objects.filter(start_date=order_id_start_date)
        
        
        user=NewUser.objects.filter(email=order_id_user)
        
        data1 =BookingTourSerializer(tourstartdate,many=True)
        data2=BookingUserSerializer(user,many=True)
        merge={
            'tour_data':data1.data,
            'user_data':data2.data,
        }
        return Response(merge,status=status.HTTP_200_OK)
    elif request.method =='POST':
        data = request.data
        print(data)
        print((data['id_start_date']))
        order_id_start_date=request.data['id_start_date']
        order_id_user=request.data['id_user']
        order_id_tour=request.data['id_tour']
        tour_startdate_id=TourStartDate.objects.filter(start_date=order_id_start_date, tour_id_id = order_id_tour)
        id_user = NewUser.objects.filter(email=data['id_user'])
        print(tour_startdate_id[0].id)
        data_send={
            'acc_id':id_user[0].id,
            'tour_startdate_id': tour_startdate_id[0].id,
            'star': None
        }
        print(data_send)
        serializer = PostBookingSerializer(data=data_send)
        if serializer.is_valid():
            existing_instance = Register.objects.filter(acc_id=data_send['acc_id'], tour_startdate_id=data_send['tour_startdate_id'])  # Replace with your fields and criteria
            print("he ",existing_instance)
            if existing_instance.exists():
                return Response({'message': 'Instance already exists in the database'}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
       
        return Response("serializer.errors", status=status.HTTP_400_BAD_REQUEST)

        # return Response('', status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def alltour_view(request):
    tours=Tour.objects.all()
    data=SearchSerializer(tours,many=True)
    return Response(data=data.data,status=status.HTTP_200_OK)

class DashBoard(APIView):
    def get(self,request):
        current_month_start = timezone.now().replace(day=1, hour=0, minute=0, second=0, microsecond=0)
        next_month_start = (current_month_start + datetime.timedelta(days=31)).replace(day=1)
        
        tours = TourStartDate.objects.annotate(month=TruncMonth('start_date')).values('month').annotate(count=Count('id'))
        admin = NewUser.objects.values('is_staff').annotate(count=Count('is_staff')).count()
        role = NewUser.objects.filter(
            is_staff=False
        ).values('role').annotate(
            count_value1=Count('id')
        )
        
        data_role = {
            'User': role[1]["count_value1"],
            'Tourguide': role[0]["count_value1"],
            'Admin': admin
        }
        
        # data_role = {
        #     'User': role[1]["count_value1"],
        #     'Tourguide': role[0]["count_value1"],
        #     'Admin': admin
        # }
        
        last_logins = NewUser.objects.annotate(
                month=ExtractMonth('last_login')
            ).values('month').annotate(
                login_count=Count(F('id'))
            )

       
        tour_this_month = TourStartDate.objects.filter(
            start_date__gte=current_month_start,start_date=current_month_start,
            start_date__lt=next_month_start
        )
        
        
        tour_count_this_month = tour_this_month.count();
        # tour_count_this_month_booking = Register.objects.filter(tour_startdate_id_id = tour_this_month.id).count()
        return Response(data=role,status=status.HTTP_200_OK)
    

    