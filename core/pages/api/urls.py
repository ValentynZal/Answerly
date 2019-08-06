from django.urls import path
from pages.api.views import *

urlpatterns = [
    # path('', Home.as_view(), name='home'),
    path('questions/', QuestionList.as_view(), name='questions'),
    path('questions/<str:title>/', QuestionDetail.as_view()),
    # path('questions/<str:title>/answer/create', AnswerCreate.as_view())
    # path('questions/<str:title>/vote/<vote:str>', QuestionVoteCount),
    path('questions/tagged/<str:tag>/', QuestionTaggedList.as_view()),
    # path('answer/<id:int>/vote/<vote:str>', AnswerVoteCount),
    path('tags/', TagList.as_view(), name='tags'),
    path('search/', SearchList.as_view(), name='search'),
]          