from django.urls import path, include
from .views import RegisterView #, LoginView, LogoutView
# from rest_auth.views import 


urlpatterns = [
    path('accounts/registration/', RegisterView.as_view(), name='register'), 
    # path('accounts/login/', LoginView.as_view(), name='login'),
    # path('accounts/logout/', LogoutView.as_view(), name='logout'),
]