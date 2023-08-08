from django.db import models

# Create your models here.
class React(models.Model):
  employee = models.CharField(max_length= 30)
  department = models.CharField(max_length=200) 

class Vehicle(models.Model):
  id=models.AutoField(primary_key=True)
  vehicle_name= models.CharField(max_length=30)

class Location(models.Model):
  id=models.AutoField(primary_key=True)
  location_name= models.CharField(max_length=100)



class Tour(models.Model):
  id=models.AutoField(primary_key=True)
  start_location_Id=models.ForeignKey(Location,on_delete=models.CASCADE,related_name='tour_location_start')
  end_location_Id=models.ForeignKey(Location,on_delete=models.CASCADE,related_name='tour_location_end')
  vehicle_Id=models.ForeignKey(Vehicle,on_delete=models.CASCADE,related_name='tour_vehicle')
  tour_name=models.CharField(max_length=100)
  price=models.IntegerField(null=True)
  time=models.IntegerField(null=True)
  detail=models.CharField(max_length=500)
  main_picture=models.ImageField(null=True)



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
  date= models.IntegerField(null=True)
  heading=models.CharField(max_length=50, null=True)
  activity=models.CharField(max_length=500,null=True)
  picture=models.ImageField(null=True)
  
  class Meta:
    constraints=[
      models.UniqueConstraint(
        fields=['tour_id','date'],name='unique_migration_schedule'
      )
    ]  

class Account(models.Model):
  id=models.AutoField(primary_key=True)
  account_name=models.CharField(max_length=256,unique=True)
  password=models.CharField(max_length=256)

  ROLE=[
    ("tg","Huong dan vien"),
    ("us","Nguoi dung"),
    ]
  role=models.CharField(max_length=30,choices=ROLE,default="Nguoi dung")


class Profile(models.Model):
  id=models.AutoField(primary_key=True)
  account_id=models.ForeignKey(Account,on_delete=models.CASCADE,related_name="profile_accountid")
  name_user=models.CharField(max_length=30)
  ROLE=[
    ("tg","Huong dan vien"),
    ("us","Nguoi dung"),
    ]  
  role=models.CharField(max_length=30,choices=ROLE,default="Nguoi dung")
  birth_date=models.DateField(null=True)
  email=models.EmailField(null=True)
  address=models.CharField(max_length=200,null=True)
  ROLE=[
    ("m","Nam"),
    ("w","Nu"),
    ]   
  gender=models.CharField(max_length=30,choices=ROLE,default="Nam")
  phone_num=models.CharField(max_length=10)
  avatar=models.ImageField(null=True)

class Register(models.Model):
  id=models.AutoField(primary_key=True)
  tour_startdate_id= models.ForeignKey(TourStartDate,on_delete=models.CASCADE,related_name="register_tourstartdateid")
  acc_id=models.ForeignKey(Account,on_delete=models.CASCADE,related_name="register_accid")
  register_date=models.DateField(null=True)
  comment=models.CharField(max_length=200,null=True)
  STAR=[
    (1,1),
    (2,2),
    (3,3),
    (4,4),
    (5,5),
  ]
  star=models.IntegerField(choices=STAR,default=5)

  class Meta:
    constraints=[
      models.UniqueConstraint(
        fields=['tour_startdate_id','acc_id'],name='unique_migration_register'
      )
    ]    