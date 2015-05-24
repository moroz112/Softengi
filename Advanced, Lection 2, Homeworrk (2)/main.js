$(document).ready(function() {
	$("div").each(function (div) {
		$(div).css({
			left: Math.round(Math.random() * 1024),
			top: Math.round(Math.random() * 768)
		}).show();
	});
});
