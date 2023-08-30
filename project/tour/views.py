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
    Locations=Location.objects.filter(location_name__icontains=order_end_location).all()
    list_location=[]
    for location in Locations:
        list_location.append(location.id)
   
    print(list_location[0])
    tours_startDates= Tour.objects.filter(end_location_Id_id=list_location[0]).all()
    list_tour_id=set()
    print(tours_startDates)
    if order_start_date != '':
        order_start_date_obj=datetime.strptime(order_start_date,'%Y-%m-%d').date()
        start_date=TourStartDate.objects.filter(start_date=order_start_date_obj).all()
        for sd in start_date:
            if sd.tour_id not in list_tour_id:
                list_tour_id.add(sd.tour_id.id)
    for tour in tours_startDates:
        if tour.id not in list_tour_id:
            list_tour_id.add(tour.id)
    tours=Tour.objects.filter(id__in=list_tour_id).all()
    tour_data=SearchSerializer(tours,many=True)
    print(tour_data)
    return Response(data=tour_data.data,status=status.HTTP_200_OK)
    
    
@api_view(['GET'])
def detail_tour_view(request,id):
    tours=Tour.objects.filter(id=id).all()
    tour_data=DetailTourSerializer(tours,many=True)
    return Response(data=tour_data.data,status=status.HTTP_200_OK)
    
