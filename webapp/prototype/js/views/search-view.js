
var app = app || {};

	app.SearchView = Backbone.View.extend({

   initialize: function(){
       //this.render();
			 //var Validator = require('jsonschema').Validator;
				//var v = new Validator();
				//var instance = 4;
				//var schema = {"type": "number"};
				//console.log(v.validate(instance, schema));
   },
   render: function(){
       // Compile the template using underscore
       var template = _.template( $("#search_template").html(), {} );
       // Load the compiled HTML into the Backbone "el"
       this.$el.html( template );
   },
   events: {
       //"click input[type=button]": "doValidate"
       "click button": "doValidate"
   },
   doValidate: function( event ){
       // Button clicked, you can access the element that was clicked with event.currentTarget
       //alert( "Search for " + $("#search_input").val() );
       //$("#search_result").html($("#search_input").val());
       data = $("#codemeta_document").val();
       //var tv4 = require('./lib/tv4.js')
			 //var schema = require('./lib/codemeta-json-schema.json')
       //schema = JSON.parse(File.read('./lib/codemeta-json-schema.json'))
			 require(['tv4'], function (tv4) {
			     //var tv4 = require("lib/tv4.js")
					 //alert(codemetaSchema.title)
			     var valid = tv4.validate(JSON.parse(data), codemetaSchema);
					 if(valid) {
					     $("#validate_result").html("The CodeMeta document is valid.")
					 } else {
					     $("#validate_result").val(tv4.error)
					 }
       });
   }
});
