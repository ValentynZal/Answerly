from django.db import models
from django.contrib.auth.models import User


class Question(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=500, default="Write your question")  # HTMLField() look  TinyMCE
    tags = models.ManyToManyField("Tag")
    pub_date = models.DateField(auto_now=False, auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    answers = models.ManyToManyField("Answer")
    comment_cnt = models.IntegerField(default=0)
    like_cnt = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:    
        ordering = ['pub_date']


class Answer(models.Model):
    content = models.CharField(max_length=500, default="Write the answer")  # HTMLField() look  TinyMCE
    pub_date = models.DateField(auto_now=False, auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    like_cnt = models.IntegerField(default=0)

    def __str__(self):
        return self.author.username


class Tag(models.Model):
    name = models.CharField(max_length=50)
    discription = models.CharField(max_length=500, default="This is description")
    use_cnt = models.IntegerField(default=0)

    def __str__(self):
        return self.name
