QuizApp.QuestionRoute=Ember.Route.extend({
model:function(params){
return questions.findBy("id", params.question_id);
}
});
