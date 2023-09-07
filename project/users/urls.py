from django.urls import path
from .views import RegisterView,ProfileView,LogoutView,protected_view,ChangePasswordView
from rest_framework_simplejwt.views import TokenRefreshView,TokenObtainPairView
app_name = 'users'

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('protected/', protected_view, name='protected'),
    path('changePassword/', ChangePasswordView.as_view(), name='change_password'),
]
