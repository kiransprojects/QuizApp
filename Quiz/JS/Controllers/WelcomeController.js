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
        this.transitionToRoute('/1');
  	}
   }
});
