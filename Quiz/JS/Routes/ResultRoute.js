QuizApp.ResultRoute = Ember.Route.extend({
	setupController: function(controller, model){
		controller.set('model', questions);
	}
});
