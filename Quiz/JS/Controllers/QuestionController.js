QuizApp.QuestionController=Ember.ObjectController.extend({

   username:"",

   init:function(controller)
        {
          var username=localStorage.getItem("username");
          if(username == null || username.trim().length <= 0)
          {
            localStorage.setItem("redirectURL",window.location.href);
            this.transitionToRoute('welcome');
            return;
          }
          else
          {
            this.username=username;
          }
        },

   actions:
   {

     next:function(id)
          {
            var nextQ = parseInt(id)+1;
            if(nextQ > questions.length)
            {
              this.transitionToRoute('result');
              return;
            }
            this.transitionToRoute('/'+nextQ);
          },
		 previous:function(id)
              {
                var previousQ=parseInt(id)-1;
                if(previousQ <= 0)
                {
                   return alert("You are at the beginning of Quiz!");
                }

                this.transitionToRoute('/'+previousQ);
              },
		 questionAnswered:function(questionId,optSel)
                      {
                        var que = this.store.find("question",questionId);
                        console.log(que);
                        que.set("isAnswered", true);
                        que.set("optionSelected",optSel);
                        que.set("isCorrect",(optSel === que.correctAnswer));
                      }
	}
});
