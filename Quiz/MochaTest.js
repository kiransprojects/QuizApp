describe("Welcome Controller Testing",function(){

before(function(){
    alertstub = sinon.stub(window, "alert");
    var controller = QuizApp.__container__.lookup("controller:welcome");
    constub = sinon.stub(controller, "transitionToRoute");
  //locstub = sinon.stub(localStorage, "setItem");
});

it("should throw error on calling enterQuiz without username",function(){
   var controller = QuizApp.__container__.lookup("controller:welcome");
   controller.send("enterQuiz");
   alertstub.getCall(0).args[0].should.equal("Enter Propername to Proceed!");
});

it("should enter quiz on providing username",function(){
   var controller = QuizApp.__container__.lookup("controller:welcome");
   controller.username="Kiran Kumar";
   controller.send("enterQuiz");
   expect(constub.called).to.be.true;
});

// it("should use localStorage on providing username:",function(){
//    var controller = QuizApp.__container__.lookup("controller:welcome");
//    controller.username="Kiran Kumar"
//    controller.send("enterQuiz");
//    expect(locstub.called).to.be.true;
// });

after(function(){
  alertstub.restore();
  constub.restore();
//  locstub.restore();
});

});

describe("Question Controller Testing",function(){

before(function(){
  var controller = QuizApp.__container__.lookup("controller:question");
  welstub = sinon.stub(controller, "transitionToRoute");
  welstubWithValue = welstub.withArgs("welcome");
});

it("Should transit to Welcome page, if username not exist in localStorage",function(){
  var controller = QuizApp.__container__.lookup("controller:question");
  localStorage.removeItem("username");
  controller.send("init");
  expect(welstubWithValue.called).to.be.true;
});

after(function(){
  welstub.restore();
});

});
