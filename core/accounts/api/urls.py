from django.urls import path, include, re_path
from rest_auth.registration.views import RegisterView, VerifyEmailView
from rest_auth.views import LoginView, LogoutView



urlpatterns = [
    path('accounts/registration/', RegisterView.as_view(), name='register'), 
    re_path(r'^account-confirm-email/', VerifyEmailView.as_view(),
     name='account_email_verification_sent'),
    re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$', VerifyEmailView.as_view(),
     name='account_confirm_email'),
    path('accounts/login/', LoginView.as_view(), name='login'),
    path('accounts/logout/', LogoutView.as_view(), name='logout'),
]