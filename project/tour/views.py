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
@api_view(['GET','POST','DELETE'])
def tutorial(request):
    if request.method =='POST':
        tutorial_data=JSONParser().parse(request)
        tutorial_serializer=ReactSerializer(data=tutorial_data)
        if tutorial_serializer.is_valid():
            tutorial_serializer.save()
            return JsonResponse(tutorial_serializer.data,status=status.HTTP_201_CREATED )
        return JsonResponse(tutorial_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
