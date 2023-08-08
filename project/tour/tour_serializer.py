from rest_framework import serializers
from app.models import *
from rest_framework.views import APIView
from django.db.models import Avg


class TourStartSerializer(serializers.ModelSerializer):
  class Meta:
    model=TourStartDate
    fields= ['id','tour_id','start_date']
    
class vehicleSerializer(serializers.ModelSerializer):
  class Meta:
    model=Vehicle
    fields= ['id','vehicle_name']
    
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
    fields = ['id', 'from_location', 'to_location','avg_star', 'detail', 'price','main_picture']

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
      fields = ['id', 'start_location_Id', 'end_location_Id', 'vehicle_Id', 'tour_name', 'price', 'time', 'detail','main_picture']
  
class ScheduleSerializer(serializers.ModelSerializer):
  class Meta:
      model = Schedule
      fields = ['id','date','activity','location_id','tour_id','heading','picture']
  

      
class SearchSerializer(serializers.ModelSerializer):
  from_location = serializers.SerializerMethodField()
  to_location = serializers.SerializerMethodField()
  avg_star = serializers.SerializerMethodField()
  acti=serializers.SerializerMethodField()
  class Meta:
    model =Tour 
    fields = ['id', 'from_location', 'to_location','avg_star', 'price','acti','main_picture']
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

  def get_acti(self,obj):
    data= obj.schedule_tourid.all()
    return data[0].activity 
    
class DetailTourSerializer(serializers.ModelSerializer):
  from_location=serializers.SerializerMethodField()
  to_location=serializers.SerializerMethodField()
  start_date=serializers.SerializerMethodField()
  vehicle_name=serializers.SerializerMethodField()
  heading_activity_picture=serializers.SerializerMethodField()
  class Meta:
    model=Tour
    fields =['tour_name','price','time','detail','from_location','to_location','main_picture','start_date','vehicle_name','heading_activity_picture']
  def get_from_location(self, obj):
    return obj.start_location_Id.location_name
    
  def get_to_location(self, obj):
    return obj.end_location_Id.location_name
  def get_start_date(self,obj):
    tourstartdates = obj.tourstartdate_tourid.all()
    list_start_date=[]
    for tourstartdate in tourstartdates:
      list_start_date.append(tourstartdate.start_date)
    return list_start_date
  def get_vehicle_name(self,obj):
    return obj.vehicle_Id.vehicle_name
  def get_heading_activity_picture(self,obj):
    schedules=obj.schedule_tourid.all()
    result=[]
    for schedule in schedules:
      result.append({"Heading":schedule.heading,"Activity":schedule.activity})
    return result
  