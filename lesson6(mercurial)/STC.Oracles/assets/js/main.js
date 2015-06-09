$ (document).ready (function (){
	$ ("#send").click(function (){
		function send () {
			$.ajax ({
				type: 'get',
				url: 'localhost:3000',
				data: { "sourceField" : getText() },
				dataType: 'JSON',
				success: function(result) {
					var paste = getElemenById("resultField"),
						string = JSON.parse(result);
					paste.value	= string;
				}
			});

		}

	function getText() {
		var text = getElemenById("sourceField").value;
	}

	});

});

