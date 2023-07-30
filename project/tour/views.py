from django.shortcuts import render
from app.models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.http import HttpResponse
from django.http import JsonResponse
from .tour_serializer import *

# Create your views here.

    
class TourStartDateView(APIView):
    def get(self,request):
        tourstar =TourStartDate.objects.all()
        tour_data=TourStartSerializer(tourstar  ,many=True)
        
        return Response(data=tour_data.data,status=status.HTTP_200_OK)
        
class TourView(APIView):
    def get(self,request):
        tours = Tour.objects.all().filter(id=1)
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
