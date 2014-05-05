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
