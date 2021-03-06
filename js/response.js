// Generated by CoffeeScript 1.4.0
(function() {

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var Response;
    return Response = Backbone.Model.extend({
      initialize: function(options) {
        this.answer = options.answer;
        return this.set({
          id: this.answer.get("id")
        });
      },
      isCorrect: function() {
        return this.answer.get("selected") === this.get("response");
      },
      answer: null
    });
  });

}).call(this);
