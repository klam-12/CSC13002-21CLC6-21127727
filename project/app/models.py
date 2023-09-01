from django.db import models
from django.conf import settings 
from users.models import *
from django.core.exceptions import ValidationError
# Create your models here.
class Vehicle(models.Model):
  id=models.AutoField(primary_key=True)
  vehicle_name= models.CharField(max_length=30)

class Location(models.Model):
  id=models.AutoField(primary_key=True)
  location_name= models.CharField(max_length=100)
    
def check_role(tour_guide):
  touguide=NewUser.objects.filter(id=tour_guide)
  role= touguide[0].role
  if(role!="TG" ):
    raise ValidationError("user is not tour guide")
class Tour(models.Model):
  id=models.AutoField(primary_key=True)
  start_location_Id=models.ForeignKey(Location,on_delete=models.CASCADE,related_name='tour_location_start')
  end_location_Id=models.ForeignKey(Location,on_delete=models.CASCADE,related_name='tour_location_end')
  vehicle_Id=models.ForeignKey(Vehicle,on_delete=models.CASCADE,related_name='tour_vehicle')
  tour_name=models.CharField(max_length=100)
  price=models.IntegerField(null=True)
  time=models.IntegerField(null=True)
  detail=models.CharField(max_length=5000)
  main_picture=models.ImageField(null=True)
  tour_guide=models.ForeignKey(NewUser ,on_delete=models.CASCADE,validators=[check_role],null=True,related_name="tour_guide")
  

class TourStartDate(models.Model):
  id=models.AutoField(primary_key=True)
  tour_id=models.ForeignKey(Tour,on_delete=models.CASCADE,related_name='tourstartdate_tourid')
  start_date=models.DateField(null=True)
  class Meta:
    constraints=[
      models.UniqueConstraint(
        fields=['tour_id','start_date'],name='unique_migration_tourstartdate'
      )
    ]   

class Schedule(models.Model):
  id=models.AutoField(primary_key=True)
  tour_id= models.ForeignKey(Tour,on_delete=models.CASCADE,null=True,related_name="schedule_tourid")
  date=models.IntegerField(null=True)
  activity=models.CharField(max_length=5000,null=True)
  picture=models.ImageField(null=True)
  heading=models.CharField(max_length=200,null=True)
  class Meta:
    constraints=[
      models.UniqueConstraint(
        fields=['tour_id','date'],name='unique_migration_schedule'
      )
    ]

class Register(models.Model):
  id=models.AutoField(primary_key=True)
  tour_startdate_id= models.ForeignKey(TourStartDate,on_delete=models.CASCADE,related_name="register_tourstartdateid")
  acc_id=models.ForeignKey(NewUser,on_delete=models.CASCADE,related_name="register_accid")
  register_date=models.DateField(null=True)
  comment=models.CharField(max_length=200,null=True,blank=True)
  STAR=[
    (1,1),
    (2,2),
    (3,3),
    (4,4),
    (5,5),
  ]
  star=models.IntegerField(choices=STAR,blank=True,null=True)