from django.shortcuts import render
from app.models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.http import HttpResponse
from django.http import JsonResponse
from .tour_serializer import TourSerializer

# Create your views here.
class TourView(APIView):
    def getdata(self,request):
        tours = Tour.objects.all()
        tour_data = TourSerializer(tours, many=True)
        return Response(data=tour_data.data,status=status.HTTP_200_OK)
    
    def getDetail():
        return 1

