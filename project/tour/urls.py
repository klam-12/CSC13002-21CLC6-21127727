from django.contrib import admin
from django.urls import path, include
from .views import *
from tour import views
urlpatterns = [
    path('detailTour',TourView.as_view()),
    path('tourStart',TourStartDateView.as_view()),
    path('vehicel',VehicelView.as_view()),
    path('location',LocationView.as_view()),
    path('picture',PitureView.as_view()),
    path('schedule',ScheduleView.as_view()),
    path('testPost',views.tutorial),
    path('recommend', views.recommend_view),
    path('search',views.search_tour_view)
  
]   
