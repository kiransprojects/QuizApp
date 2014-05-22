describe("Question Controller Testing",function(){
      beforeEach(function(){
        var controller = QuizApp.__container__.lookup("controller:question");
        controller.transitionToRoute=sinon.spy();
      });

      it("Should transit to Welcome page, if username not exist in localStorage",function(){
        var controller = QuizApp.__container__.lookup("controller:question");
        localStorage.removeItem("username");
        controller.send("init");
        expect(controller.transitionToRoute.calledWithExactly("welcome")).to.be.true;
      });

      it("Should update username property, if username exists in localStorage",function(){
        var controller = QuizApp.__container__.lookup("controller:question");
        localStorage.setItem("username","Kiran Kumar");
        controller.send("init");
        controller.username.should.equal("Kiran Kumar");
      });

      it("Should take you to NEXT question", function(done){
          var controller = QuizApp.__container__.lookup("controller:question");
          var store = QuizApp.__container__.lookup("store:main");
          controller.set("store", store);
          controller.send("next","1");
          setTimeout(function(){
            expect(controller.transitionToRoute.calledWithExactly("/2")).to.be.true;
            done();
          },1000);
      })

      it("Should take you to RESULT page", function(done){
          var controller = QuizApp.__container__.lookup("controller:question");
          var store = QuizApp.__container__.lookup("store:main");
          controller.set("store", store);
          controller.send("next","4");
          setTimeout(function(){
            expect(controller.transitionToRoute.calledWithExactly("/result")).to.be.true;
            done();
          },1000);
      })

      it("Should take you to Previous page", function(done){
          var controller = QuizApp.__container__.lookup("controller:question");
          var store = QuizApp.__container__.lookup("store:main");
          controller.set("store", store);
          controller.send("previous","4");
          setTimeout(function(){
            expect(controller.transitionToRoute.calledWithExactly("/3")).to.be.true;
            done();
          },1000);
      })

      it("Should show a message saying, you are at the beginning of the page", function(done){
          window.alert=sinon.spy();
          var controller = QuizApp.__container__.lookup("controller:question");
          var store = QuizApp.__container__.lookup("store:main");
          controller.set("store", store);
          controller.send("previous","1");
          setTimeout(function(){
            expect(window.alert.calledWithExactly("You are at the beginning of Quiz!")).to.be.true;
            done();
          },1);//Else it is failing saying maximum timeout limit 2000 exceeded.
      })

      afterEach(function(){
        localStorage.removeItem("username");
      });
});
