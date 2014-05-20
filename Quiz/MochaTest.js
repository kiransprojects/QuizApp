describe("Welcome Controller Testing",function(){

before(function(){
    var controller = QuizApp.__container__.lookup("controller:welcome");
    stub = sinon.stub(window, "alert");
});

it("should throw error on calling enterQuiz without username:",function(){
   var controller = QuizApp.__container__.lookup("controller:welcome");
   controller.send("enterQuiz");
   console.log(stub.getCall(0).args[0]);
   stub.getCall(0).args[0].should.equal("Enter Propername to Proceed!");
});

after(function(){
  stub.restore();
});

});
