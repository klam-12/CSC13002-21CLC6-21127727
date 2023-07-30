from rest_framework import serializers
from app.models import *
from rest_framework.views import APIView


class TourStartSerializer(serializers.ModelSerializer):
  class Meta:
    model=TourStartDate
    fields= ['id','tour_id','start_date']
    
class VehicelSerializer(serializers.ModelSerializer):
  class Meta:
    model=Vehicel
    fields= ['id','vehicel_name']
    
class LocationSerializer(serializers.ModelSerializer):
  class Meta:
    model=Location
    fields= ['id','location_name']
    


class TourSerializer(serializers.ModelSerializer):
  class Meta:
      model = Tour
      fields = ['id', 'start_location_Id', 'end_location_Id', 'vehicel_Id', 'tour_name', 'price', 'time', 'detail', 'tag']
  
class ScheduleSerializer(serializers.ModelSerializer):
  class Meta:
      model = Schedule
      fields = ['id','date','activity','location_id','tour_startdate_id']
  
class PictureSerializer(serializers.ModelSerializer):
  class Meta:
      model = Picture
      fields = ['id','tour_id','picture']