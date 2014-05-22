describe("Result Controller Testing",function(){
      beforeEach(function(){
        var controller = QuizApp.__container__.lookup("controller:result");
        controller.transitionToRoute=sinon.spy();
        //localStorage.removeItem=sinon.spy();
      });

      it("should redirect to Welcome page if directly access the result page",function(){
         var controller = QuizApp.__container__.lookup("controller:result");
         controller.send("init");
         expect(controller.transitionToRoute.calledWithExactly("welcome")).to.be.true;
      });

      it("Should update username property, if username exists in localStorage",function(){
        var controller = QuizApp.__container__.lookup("controller:result");
        localStorage.setItem("username","Kiran Kumar");
        controller.send("init");
        controller.username.should.equal("Kiran Kumar");
      });

      it("Should be moved to Welcome Page, when user Quits the Quiz",function(){
        var controller = QuizApp.__container__.lookup("controller:result");
        controller.send("quitQuiz");
        expect(controller.transitionToRoute.calledWithExactly("welcome")).to.be.true;
      });

      // it("Should remove the content from localStorage, when user Quits the Quiz",function(){
      //   var controller = QuizApp.__container__.lookup("controller:result");
      //   controller.send("quitQuiz");
      //   expect(localStorage.removeItem.calledWithExactly("username")).to.be.true;
      // });

      afterEach(function(){
        localStorage.removeItem("username")
      });
});
