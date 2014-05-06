QuizApp.ResultController = Ember.ArrayController.extend({
username:"",
init:function(controller){
        var username=localStorage.getItem("username");
        if(username == null || username.trim().length <= 0)
        {
                this.transitionToRoute('welcome');
                return;
        }
        else{
                this.username=username;
        }
        },

  actions:{
    quitQuiz:function(){
      localStorage.removeItem("username");
      localStorage.removeItem("redirectURL");
      this.transitionToRoute('welcome');
    }
  },

correctAnswers:function()
               {
                  return this.filterBy("isCorrect",true).length;
               }.property("isCorrect"),
totalAnswered:function()
              {
                return this.filterBy("isAnswered",true).length;
              }.property("isAnswered"),
unanswered:function()
           {
              return this.get("model").length-this.get("totalAnswered");
           }.property("totalAnswered")
});
