from rest_framework import serializers
from app.models import *
from rest_framework.views import APIView
from django.db.models import Avg


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
    

class RecommendTourSerializer(serializers.ModelSerializer):
  from_location = serializers.SerializerMethodField()
  to_location = serializers.SerializerMethodField()
  avg_star = serializers.SerializerMethodField()
  
  class Meta:
    model = Tour
    fields = ['id', 'from_location', 'to_location','avg_star', 'detail', 'price']

  def get_from_location(self, obj):
    return obj.start_location_Id.location_name
    
  def get_to_location(self, obj):
    return obj.end_location_Id.location_name
  
  def get_avg_star(self, obj):
    tourstartdates = obj.tourstartdate_tourid.all()
    count = len(tourstartdates)
    star = 0
    for tourstartdate in tourstartdates:
      cur_star = tourstartdate.register_tourstartdateid.aggregate(star123=Avg('star'))['star123']
      star += cur_star if cur_star else 0
    return star/count if count >=1 else 0

class TourSerializer(serializers.ModelSerializer):
  class Meta:
      model = Tour
      fields = ['id', 'start_location_Id', 'end_location_Id', 'vehicel_Id', 'tour_name', 'price', 'time', 'detail', 'tag']
  
class ScheduleSerializer(serializers.ModelSerializer):
  class Meta:
      model = Schedule
      fields = ['id','date','activity','location_id','tour_id']
  
class PictureSerializer(serializers.ModelSerializer):
  class Meta:
      model = Picture
      fields = ['id','tour_id','picture']
      
class SearchSerializer(serializers.ModelSerializer):
  from_location = serializers.SerializerMethodField()
  to_location = serializers.SerializerMethodField()
  avg_star = serializers.SerializerMethodField()
  picture=serializers.SerializerMethodField()
  acti=serializers.SerializerMethodField()
  class Meta:
    model =Tour 
    fields = ['id', 'from_location', 'to_location','avg_star', 'price','acti','picture']
  def get_from_location(self, obj):
    return obj.start_location_Id.location_name
    
  def get_to_location(self, obj):
    return obj.end_location_Id.location_name
  
  def get_avg_star(self, obj):
    tourstartdates = obj.tourstartdate_tourid.all()
    count = len(tourstartdates)
    star = 0
    for tourstartdate in tourstartdates:
      cur_star = tourstartdate.register_tourstartdateid.aggregate(star123=Avg('star'))['star123']
      star += cur_star if cur_star else 0
    return star/count if count >=1 else 0

  def get_picture(self,obj):
    return obj.picture_tour.all()[:1]
  def get_acti(self,obj):
    data= obj.schedule_tourid.all()
    return data[0].activity 
    
    