describe("Welcome Controller Testing",function(){

beforeEach(function(){
    window.alert=sinon.spy();
    var controller = QuizApp.__container__.lookup("controller:welcome");
    constub = sinon.stub(controller, "transitionToRoute");
  //  locstub = sinon.stub(localStorage, "setItem");
});

it("should throw error on calling enterQuiz without username",function(){
   var controller = QuizApp.__container__.lookup("controller:welcome");
   controller.send("enterQuiz");
   expect(window.alert.calledWithExactly("Enter Propername to Proceed!")).to.be.true;
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

afterEach(function(){
  constub.restore();
  //locstub.restore();
  localStorage.removeItem("username")
});

});

describe("Question Controller Testing",function(){

beforeEach(function(){
  var controller = QuizApp.__container__.lookup("controller:question");
  welstub = sinon.stub(controller, "transitionToRoute");
  welstubWithValue = welstub.withArgs("welcome");
  //nextStub=sinon.stub(controller, "transitionToRoute");
  nextStubWithValue=welstub.withArgs("/2");
});

it("Should transit to Welcome page, if username not exist in localStorage",function(){
  var controller = QuizApp.__container__.lookup("controller:question");
  localStorage.removeItem("username");
  controller.send("init");
  expect(welstubWithValue.called).to.be.true;
});

it("Should update username property, if username exists in localStorage",function(){
  var controller = QuizApp.__container__.lookup("controller:question");
  localStorage.setItem("username","Kiran Kumar");
  controller.send("init");
  controller.username.should.equal("Kiran Kumar");
});

it("Question model test",function(){
  var controller = QuizApp.__container__.lookup("controller:question");
  var Question = QuizApp.__container__.lookup("store:main").find("question",1).then(function(model){
    var val = model.get("question");
    expect(val).to.equal("Capital City of Tamilnadu?");
  });
});

it("Should take you to NEXT question", function(){
    var controller = QuizApp.__container__.lookup("controller:question");
    var store = QuizApp.__container__.lookup("store:main");
    controller.set("store", store);
    controller.send("next","1");
    expect(nextStubWithValue.called).to.be.true;
})

afterEach(function(){
  welstub.restore();
  //nextStubWithValue.restore();
  localStorage.removeItem("username");
});

});
