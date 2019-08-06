from django.contrib import admin
from .models import *


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'pub_date', 'author')


class AnswerAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'author', 'pub_date') 
 
    
class TagAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'discription', )  # 'use_cnt'


admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
admin.site.register(Tag, TagAdmin) 