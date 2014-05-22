QuizApp.QuestionController=Ember.ObjectController.extend({

   username:"",

   init:function()
   {
      this._super();
      var username=localStorage.getItem("username");
      if(username == null || username.trim().length <= 0)
      {
    //    localStorage.setItem("redirectURL",window.location.href);
        this.transitionToRoute("welcome");
        return;
      }
      else
      {
        this.username=username;
      }
    //  this.startTimer();
   },

   actions:
   {
     next:function(id)
     {
       var nextQ = parseInt(id)+1;
       var self = this;
       this.store.find("question").then(function(ques){
           var length = ques.get("length")
           if(nextQ > length)
           {
             self.transitionToRoute('/result');
             return;
           }
           var route='/'+nextQ;
           self.transitionToRoute(route);
          });
     },
		 previous:function(id)
     {
       var previousQ=parseInt(id)-1;
       if(previousQ <= 0)
       {
         return alert("You are at the beginning of Quiz!");
       }
       this.transitionToRoute('/'+previousQ);
     }
	}
});

QuizApp.RadioButton = Ember.View.extend({
  tagName: "input",
  type:"radio",

  attributeBindings:["name","type","value","checked:checked"],

  change:function(){
    this.set("controller.isAnswered",true);
    this.set("controller.isCorrect",(this.get("value") === this.get("controller.correctAnswer")));
    this.set("controller.optionSelected",this.get("value"));
  },

  checked: function () {
    return this.get('controller.optionSelected') === this.get('value');
  }.property('controller.optionSelected'),

});
