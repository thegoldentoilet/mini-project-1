// Generated by CoffeeScript 1.4.0
(function() {

  define(['jquery', 'underscore', 'backbone', 'response'], function($, _, Backbone, Response) {
    var QuestionView;
    return QuestionView = Backbone.View.extend({
      template: '<fieldset><legend>Question #<%=question.id%></legend><div class="questionText"><%=question.get("text")%></div><input type="radio" class="answer" name="answer" id="answerTrue" value="1" required="required"/><label for="answerTrue">True</label><input type="radio" class="answer" name="answer" id="answerFalse" value=""/><label for="answerFalse">False</label><input class="qnext" type="button" value="Next" disabled="disabled"/></fieldset>',
      el: $("#question"),
      nextBtn: null,
      appView: null,
      question: null,
      answer: null,
      response: null,
      initialize: function(options) {
        this.question = options.question;
        this.answer = options.answer;
        this.appView = options.appView;
        return this.response = new Response({
          answer: this.answer
        });
      },
      render: function() {
        var data;
        data = {
          question: this.question
        };
        this.$el.html(_.template(this.template, data));
        return this.nextBtn = this.$el.find("input[type=button]");
      },
      hide: function() {
        return this.$el.css("display", "none");
      },
      nextClicked: function() {
        return this.appView.nextQuestion();
      },
      answerChange: function() {
        var userResponse;
        this.nextBtn.removeAttr("disabled");
        userResponse = $(".answer:checked").val() ? true : false;
        return this.response.set({
          response: userResponse
        });
      },
      events: {
        "click .qnext": "nextClicked",
        "change .answer": "answerChange"
      }
    });
  });

}).call(this);
