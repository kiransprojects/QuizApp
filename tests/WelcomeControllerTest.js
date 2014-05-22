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
