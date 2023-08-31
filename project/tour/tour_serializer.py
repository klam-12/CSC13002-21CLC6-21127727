from rest_framework import serializers
from rest_framework.fields import empty
from app.models import *
from rest_framework.views import APIView
from django.db.models import Avg
from users.models import *

class TourStartSerializer(serializers.ModelSerializer):
  class Meta:
    model=TourStartDate
    fields= ['id','tour_id','start_date']
    
class VehicleSerializer(serializers.ModelSerializer):
  class Meta:
    model=Vehicle
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
      fields = ['id', 'start_location_Id', 'end_location_Id', 'vehicel_Id', 'tour_name', 'price', 'time', 'detail', 'tag']
  
class ScheduleSerializer(serializers.ModelSerializer):
  class Meta:
      model = Schedule
      fields = ['id','date','activity','location_id','tour_id']
        
class SearchSerializer(serializers.ModelSerializer):
  heading=serializers.SerializerMethodField()
  avg_star = serializers.SerializerMethodField()
  class Meta:
    model =Tour 
    fields = ['id', 'tour_name','avg_star', 'price','detail','main_picture','heading']

  
  def get_avg_star(self, obj):
    tourstartdates = obj.tourstartdate_tourid.all()
    count = len(tourstartdates)
    star = 0
    for tourstartdate in tourstartdates:
      cur_star = tourstartdate.register_tourstartdateid.aggregate(star123=Avg('star'))['star123']
      star += cur_star if cur_star else 0
    return star/count if count >=1 else 0

  def get_heading(self,obj):
    schedules=obj.schedule_tourid.all()
    result=[]
    for schedule in schedules:
      result.append(schedule.heading)
    return result
    
    
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
  
  
class CommendSerializer(serializers.ModelSerializer):
  ava=serializers.SerializerMethodField()
  class Meta:
    model= Register
    fields=['comment','star','acc_id','ava']
  def get_ava(self,obj):
    user=obj.acc_id.full_name
    return user

class listCustomerSerializer(serializers.ModelSerializer):
  avatar=serializers.SerializerMethodField()
  class Meta:
    model=Register
    fields=['avatar','comment','star']
  def get_avatar(self,obj):
    avatar=obj.acc_id.avatar
    return 1
  
class BookingTourSerializer(serializers.ModelSerializer):
  #ten tour, ma tour, thoi gian, huong dan vien, gia , end_location, to_location
  name_tour=serializers.SerializerMethodField()
  price=serializers.SerializerMethodField()
  from_location=serializers.SerializerMethodField()
  to_location=serializers.SerializerMethodField()
  guide=serializers.SerializerMethodField()
  
  class Meta:
    model=TourStartDate
    fields=['name_tour','tour_id','start_date','price','from_location','to_location','guide']
  def get_name_tour(self, obj):
    tour=obj.tour_id.tour_name
    return tour
  def get_price(self,obj):
    return obj.tour_id.price
  def get_from_location(sefl,obj):
    tour=obj.tour_id.end_location_Id.location_name
    return tour
  def get_to_location(sefl,obj):
    tour=obj.tour_id.start_location_Id.location_name
    
    return tour
  def get_guide(self,obj):
    temp=obj.tour_id.tour_guide.full_name
    return temp
    
    
class BookingUserSerializer(serializers.ModelSerializer):

  class Meta:
    model= NewUser
    fields=['id','full_name','email','phone']


class PostBookingSerializer(serializers.ModelSerializer):
  class Meta:
    model=Register
    fields=['acc_id','tour_startdate_id','star']

    