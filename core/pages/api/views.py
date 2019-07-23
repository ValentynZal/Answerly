from pages.models import *
from pages.api.serializer import * 
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from rest_framework import mixins
from rest_framework import generics


# Home
class SearchList(generics.ListAPIView):

    serializer_class = QuestionSerializer

    def get_queryset(self):
        queryset = Question.objects.all()
        query = self.request.query_params.get('q', None)
        if query is not None:
            questions = Question.objects.filter(
                Q(title__icontains=query) |
                Q(content__icontains=query)
            ).distinct()
        return questions

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class QuestionList(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):

    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class QuestionTaggedList(mixins.ListModelMixin,
                        generics.GenericAPIView):

    serializer_class = QuestionSerializer
    lookup_url_kwarg = 'tag'

    def get_queryset(self):
        tag = self.kwargs.get(self.lookup_url_kwarg)
        questions = Question.objects.filter(tags__name=tag)
        return questions        

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

   
class QuestionDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):

    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    lookup_field = 'title'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class TagList(mixins.ListModelMixin,
             mixins.CreateModelMixin,
             generics.GenericAPIView):

    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)