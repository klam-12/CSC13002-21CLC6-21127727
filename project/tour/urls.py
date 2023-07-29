from django.urls import path
from tour.views import *
urlpatterns = [
    path('tour/data',TourView.as_view())
]
