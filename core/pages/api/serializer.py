class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__' 


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__' 


class QuestionSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    answers = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = '__all__' 

# ['id', 'title', 'content', 'pub_date', 'author', 'comment_cnt', 'like_cnt', 'tags', 'answers']
