from django.contrib import admin
from django.urls import path, include
from .views import *
from tour import views
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    path('detailTour',TourView.as_view()),
    path('tourStart',TourStartDateView.as_view()),
    path('vehicle',VehicleView.as_view()),
    path('location',LocationView.as_view()),
    path('schedule',ScheduleView.as_view()),
    path('testPost',views.tutorial),
    path('recommend', views.recommend_view),
    path('search',views.search_tour_view),
    path('detail/<str:id>/',views.detail_tour_view)
]   