from django.urls import path
from .views import *

urlpatterns = [
    # path('', Home.as_view(), name='home'),
    path('questions/', QuestionList.as_view(), name='questions'),
    path('questions/<str:title>/', QuestionDetail.as_view()),
    path('questions/tagged/<str:tag>/', QuestionTaggedList.as_view()),
    path('tags/', TagList.as_view(), name='tags'),
    path('search/', SearchList.as_view(), name='search'),

]