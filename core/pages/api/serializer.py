from rest_framework import serializers
from pages.models import *


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__' 
        read_only_fields = ['use_cnt']


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__' 


class QuestionSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True )
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = '__all__' 

    def create(self, validated_data):
        tags_data = validated_data.pop('tags')
        question = Question.objects.create(**validated_data)
        for tag_data in tags_data:
            tag = Tag.objects.create(**tag_data)
            question.tags.add(tag)
        question.save()
        return question

    def update(self, instance, validated_data):
        tags_data = validated_data.pop('tags')
        tags = instance.tags
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()