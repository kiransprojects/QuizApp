window.QuizApp = Ember.Application.create();

QuizApp.ApplicationAdapter = DS.FixtureAdapter;

QuizApp.Router.map(function(){
this.resource("welcome",{path:"/"});
this.resource("question",{path:":question_id"});
this.resource("result");
});

