describe("Question Controller Testing",function(){
      beforeEach(function(){
        var controller = QuizApp.__container__.lookup("controller:question");
        welstub = sinon.stub(controller, "transitionToRoute");
        welstubWithValue = welstub.withArgs("welcome");
        //nextStub=sinon.stub(controller, "transitionToRoute");
        nextStubWithValue=welstub.withArgs("/2");
        resStubWithValue=welstub.withArgs("/result");
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

      it("Should take you to NEXT question", function(){
          var controller = QuizApp.__container__.lookup("controller:question");
          var store = QuizApp.__container__.lookup("store:main");
          controller.set("store", store);
          controller.send("next","1");
          expect(nextStubWithValue.called).to.be.true;
      })

      it("Should take you to RESULT page", function(){
          var controller = QuizApp.__container__.lookup("controller:question");
          var store = QuizApp.__container__.lookup("store:main");
          controller.set("store", store);
          controller.send("next","4");
          expect(resStubWithValue.called).to.be.true;
      })

      afterEach(function(){
        welstub.restore();
        localStorage.removeItem("username");
      });
});
