window.QuizApp = Ember.Application.create();

QuizApp.Router.map(function(){
this.resource("welcome",{path:"/"});
this.resource("question",{path:":question_id"});
this.resource("result");
});

QuizApp.WelcomeController=Ember.ObjectController.extend({
username : "",  
actions:{
  	enterQuiz : function(){
		if(this.username.trim().length <= 0)
		{
			alert("Enter Propername to Proceed!");
			return;
		}
 		if(typeof(Storage) !== "undefined")
		{
			localStorage.setItem("username",this.username);
			var redirectURL = localStorage.getItem("redirectURL");
    			if(redirectURL != null)
			{
				window.location.href=redirectURL;
				return;
			}	
		} 
                window.location.href="#/1"; 
  	}
   }
});

QuizApp.authenticateNRoute = function(username){

}; 

QuizApp.QuestionsRoute = Ember.Route.extend({
model:function(){
return questions;
}
});

QuizApp.QuestionRoute=Ember.Route.extend({
model:function(params){
return questions.findBy("id", params.question_id);
}
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

QuizApp.QuestionController=Ember.ObjectController.extend({
  username:"",
  init:function(controller){
	var username=localStorage.getItem("username");
        if(username == null || username.trim().length <= 0)
        {
		localStorage.setItem("redirectURL",window.location.href);
                window.location.href="#";
		return;
        }
	else{
		this.username=username;
	}
	},

   actions: {
               next:function(id){
		  var nextQ = parseInt(id)+1;
		  if(nextQ > questions.length)
		  {
			window.location.href="#/result";	
			return;// alert("No more Questions to Anser!");
		  }	
		  window.location.href="#/"+nextQ;	
		},
		previous:function(id){
		  var previousQ=parseInt(id)-1;
		  if(previousQ <= 0)
		  {
		     return alert("You are at the beginning of Quiz!");	
		  }			
		  window.location.href="#/"+previousQ;
		},
		questionAnswered:function(questionId,optSel){
		  var que = questions.findBy("id",questionId);
		  que.isAnswered = true;
 	          console.log(que.correctAnswer);		
	          que.isCorrect = (optSel === que.correctAnswer);		  	
		}	
	}
});

QuizApp.ResultRoute = Ember.Route.extend({
	setupController: function(controller, model){
		controller.set('model', questions);
	}
});

QuizApp.ResultController = Ember.ArrayController.extend({
username:"",  
init:function(controller){
        var username=localStorage.getItem("username");
        if(username == null || username.trim().length <= 0)
        {
                window.location.href="#";
                return;
        }
        else{
                this.username=username;
        }
        },
correctAnswers:function(){
return this.filterBy("isCorrect",true).length;
}.property(),
totalAnswered:function(){
return this.filterBy("isAnswered",true).length;}.property(),
unanswered:function(){
	return this.get("model").length-this.get("totalAnswered");
	}.property()
});

var questions=[
{id:"1",question:"Capital City of Tamilnadu?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Chennai", isAnswered:false, isCorrect:false, optionSelected:""},
{id:"2",question:"Capital City of Andhra Pradesh?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Hyderabad", isAnswered:false, isCorrect:false,optionSelected:""},
{id:"3",question:"Capital City of Karnataka?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Bangalore", isAnswered:false, isCorrect:false,optionSelected:""},
{id:"4",question:"Capital City of Kerala?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Kochin", isAnswered:false, isCorrect:false,optionSelected:""}
];
