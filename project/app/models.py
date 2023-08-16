from django.db import models
from django.conf import settings 
# Create your models here.
class Vehicel(models.Model):
  id=models.AutoField(primary_key=True)
  vehicel_name= models.CharField(max_length=30)

class Location(models.Model):
  id=models.AutoField(primary_key=True)
  location_name= models.CharField(max_length=100)

class Tour(models.Model):
  id=models.AutoField(primary_key=True)
  start_location_Id=models.ForeignKey(Location,on_delete=models.CASCADE,related_name='tour_location_start')
  end_location_Id=models.ForeignKey(Location,on_delete=models.CASCADE,related_name='tour_location_end')
  vehicel_Id=models.ForeignKey(Vehicel,on_delete=models.CASCADE,related_name='tour_vehicle')
  tour_name=models.CharField(max_length=100)
  price=models.IntegerField(null=True)
  time=models.IntegerField(null=True)
  detail=models.CharField(max_length=500)
  NAME_TAG=[
    ("s","Sap dien ra"),
    ("d","Dang dien ra"),
    ('k',"Da ket thuc"),
  ]
  tag=models.CharField(max_length=30,choices=NAME_TAG,default="Sap dien ra")


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
  tour_id= models.ForeignKey(Tour,on_delete=models.CASCADE,related_name='schedule_tourid')
  date=models.DateField(null=True)
  activity=models.CharField(max_length=500,null=True)
  location_id=models.ForeignKey(Location,on_delete=models.CASCADE,related_name='schedule_locationid')
  picture=models.ImageField(null=True)

  class Meta:
    constraints=[
      models.UniqueConstraint(
        fields=['tour_id','date'],name='unique_migration_schedule'
      )
    ]  

