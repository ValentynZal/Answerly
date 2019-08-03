from django.contrib import admin
from django.urls import path, include, re_path
from rest_auth.registration.views import RegisterView, VerifyEmailView
from rest_auth.views import LoginView, LogoutView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pages.api.urls')),
    path('', include('accounts.api.urls')),
 
]


