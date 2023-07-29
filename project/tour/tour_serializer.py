from rest_framework import serializers
from app.models import *
from rest_framework.views import APIView

class TourSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tour
    fields = ['id', 'start_location_Id', 'end_location_Id', 'vehicel_Id', 'tour_name', 'price', 'time', 'detail', 'tag']
  

