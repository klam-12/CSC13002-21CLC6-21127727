from django.urls import path
from .views import RegisterView, LoginView,ProfileView,BlacklistTokenUpdateView

app_name = 'users'

urlpatterns = [
   # path('register/', CustomUserCreate.as_view(), name='creatre_user')
    path('register/', RegisterView.as_view(), name='register'),
    path('signin/', LoginView.as_view(), name='signin'),
    path('profile/<str:id>/', ProfileView.as_view(), name='profile'),
    # path('logout/', ProfileView.as_view(), name='logout'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
]
