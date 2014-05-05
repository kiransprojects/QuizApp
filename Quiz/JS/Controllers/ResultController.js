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
correctAnswers:function()
               {
                  return this.filterBy("isCorrect",true).length;
               }.property(),
totalAnswered:function()
              {
                return this.filterBy("isAnswered",true).length;
              }.property(),
unanswered:function()
           {
              return this.get("model").length-this.get("totalAnswered");
           }.property()
});
