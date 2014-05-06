QuizApp.Question =  DS.Model.extend({

question:DS.attr('string'),
answers:DS.attr(),
correctAnswer:DS.attr('string'),
isAnswered:DS.attr('boolean',{defaultValue:false}),
isCorrect:DS.attr('boolean',{defaultValue:false}),
optionSelected:DS.attr('string',{defaultValue:""})

});


QuizApp.Question.FIXTURES=[
{id:1,question:"Capital City of Tamilnadu?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Chennai", isAnswered:false, isCorrect:false, optionSelected:""},
{id:2,question:"Capital City of Andhra Pradesh?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Hyderabad", isAnswered:false, isCorrect:false,optionSelected:""},
{id:3,question:"Capital City of Karnataka?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Bangalore", isAnswered:false, isCorrect:false,optionSelected:""},
{id:4,question:"Capital City of Kerala?", answers:["Hyderabad", "Chennai", "Kochin", "Bangalore"], correctAnswer:"Kochin", isAnswered:false, isCorrect:false,optionSelected:""}
];
