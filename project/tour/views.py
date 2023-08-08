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

class VehicelView(APIView):
    def get(self,request):
        vehicels=Vehicel.objects.all()
        vehicel_data=VehicelSerializer(vehicels,many=True)
        return Response(data=vehicel_data.data,status=status.HTTP_200_OK)
    
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
        
class PitureView(APIView):
    def get(self,request):
        pictures=Picture.objects.all()
        picture_data=PictureSerializer(pictures,many=True)
        return Response(data=picture_data.data,status=status.HTTP_200_OK)


# class reactRequestView():
#     def post(self, request, * args, **kwargs):
#         data={
#            'id': request.data.get()
            
#         }


@api_view(['GET','POST','DELETE'])
def tutorial(request):
    if request.method =='POST':
        tutorial_data=JSONParser().parse(request)
        tutorial_serializer=ReactSerializer(data=tutorial_data)
        if tutorial_serializer.is_valid():
            tutorial_serializer.save()
            return JsonResponse(tutorial_serializer.data,status=status.HTTP_201_CREATED )
        return JsonResponse(tutorial_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET'])
def recommend_view(request):
    registers = TourStartDate.objects.values('tour_id').annotate(total_stars=Avg('register_tourstartdateid__star')).order_by('-total_stars')[:4]
    list_tour_id = []
    for register in registers:
        list_tour_id.append(register['tour_id'])
    tours = Tour.objects.filter(id__in=list_tour_id).all()
    tour_data = RecommendTourSerializer(tours, many=True)
    return Response(data=tour_data.data,status=status.HTTP_200_OK)

import pandas as pb
@api_view(['GET'])
def search_tour_view(request):
    order_end_location=request.GET.get('end_location')
    order_start_date=request.GET.get('start_date')

    #get index of Location 
    Locations=Location.objects.filter(location_name__icontains=order_end_location).all()
    list_location=[]
    for location in Locations:
        list_location.append(location.id)
    tours_startDates= Tour.objects.filter(end_location_Id__in=list_location).all()
    
    order_start_date_obj=datetime.strptime(order_start_date,'%Y-%m-%d').date()
    start_date=TourStartDate.objects.filter(start_date=order_start_date_obj).all()
    list_tour_id=set()
    for sd in start_date:
        if sd.tour_id not in list_tour_id:
            list_tour_id.add(sd.tour_id.id)
    for tour in tours_startDates:
        if tour.id not in list_tour_id:
            list_tour_id.add(tour.id)
    tours=Tour.objects.filter(id__in=list_tour_id).all()
    tour_data=SearchSerializer(tours,many=True)
    return Response(data=tour_data.data,status=status.HTTP_200_OK)
    
    
@api_view(['GET'])
def detail_tour_view(request,id):
    tours=Tour.objects.filter(id=id).all()
    tour_data=DetailTourSerializer(tours,many=True)
    
    

