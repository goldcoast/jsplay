	require.config({
	  paths: {
	    "jquery": "jquery-2.1.1",
	  }
	})

	define(['jquery'], function($){

	  parentDom = $('body');

	 
	  $("#test").html("default require.js testing....")

	  var dosth = function() {
	    $("#test").html("this is require.js testing....")
	  }

	  parentDom.find('.updateButton').on('click', function (evt) {
            dosth();
        });

	});
