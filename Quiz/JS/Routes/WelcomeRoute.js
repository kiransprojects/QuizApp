QuizApp.WelcomeRoute =  Ember.Route.extend({
setupController: function(controller, model){
		controller.set('username', "");
	}
});
