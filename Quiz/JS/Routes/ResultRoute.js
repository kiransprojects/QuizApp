QuizApp.ResultRoute = Ember.Route.extend({
	model:function(params){
    return this.store.find("question");
    }
});
