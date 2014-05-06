window.QuizApp = Ember.Application.create();

QuizApp.ApplicationAdapter = DS.FixtureAdapter;

QuizApp.Router.map(function(){
this.resource("welcome",{path:"/"});
this.resource("question",{path:":question_id"});
this.resource("result");
});


QuizApp.OptionView = Ember.View.extend({
click:function(event){
	var el = event.target;
	var questionId = this.get("questionId");
	var optSel = this.get("optSel");
	el.className="option clicked";
	var que = this.get("controller").get("store").find("question",questionId);
  que.set("isAnswered",true);
  que.set("optionSelected",optSel);
  que.set("isCorrect",(optSel === que.correctAnswer));
  que.save();
}
});

