from django.urls import path
from .views import register_user, user_login, user_logout

app_name = 'users'

urlpatterns = [
   # path('register/', CustomUserCreate.as_view(), name='creatre_user')
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
]
