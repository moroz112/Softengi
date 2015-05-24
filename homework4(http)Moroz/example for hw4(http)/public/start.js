$.ajax({
	url: "insert",
	method: "POST",
	data: {
		id: 10,
		title: "title"
	},
	success: function (result) {
		console.log(result);
	},
	error: function (result) {
		console.log(result);
	}
});

$.ajax({
	url: "select",
	method: "POST",
	data: {
		id: 10
	},
	success: function (result) {
		console.log(result);
	},
	error: function (result) {
		console.log(result);
	}
});