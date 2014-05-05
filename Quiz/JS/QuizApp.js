window.QuizApp = Ember.Application.create();

QuizApp.Router.map(function(){
this.resource("welcome",{path:"/"});
this.resource("question",{path:":question_id"});
this.resource("result");
});


QuizApp.OptionView = Ember.View.extend({
attributeBindings:["questionId","optSel"],
click:function(event){
	var el = event.target;
	var questionId = el.getAttribute("questionId");
	var optSel = el.getAttribute("optSel");
	el.className="option clicked";
	var que = questions.findBy("id",questionId);
        que.isAnswered = true;
        que.optionSelected=optSel;
	console.log(que.correctAnswer);
        que.isCorrect = (optSel === que.correctAnswer);
}
});



var questions=[
{id:"1",question:"Capital City of Tamilnadu?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Chennai", isAnswered:false, isCorrect:false, optionSelected:""},
{id:"2",question:"Capital City of Andhra Pradesh?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Hyderabad", isAnswered:false, isCorrect:false,optionSelected:""},
{id:"3",question:"Capital City of Karnataka?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Bangalore", isAnswered:false, isCorrect:false,optionSelected:""},
{id:"4",question:"Capital City of Kerala?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Kochin", isAnswered:false, isCorrect:false,optionSelected:""}
];
