/*Вариант с ошибками*/
$(document).ready(function() {
	$("div").each(function (div) {
		$(div).css({
			left: Math.round(Math.random() * 1024),
			top: Math.round(Math.random() * 768)
		}).show();
	});
});



/*Рабочий вариант 1*/
$(document).ready(function() {
	$("div").each(function (div) {
		$(this).css({
			left: Math.round(Math.random() * 1024),
			top: Math.round(Math.random() * 768)
		}).show();
	});
});

/*Рабочий вариант 2*/
$(document).ready(function() {
	$("div").each(function (index,div) {
		$(div).css({
			left: Math.round(Math.random() * 1024),
			top: Math.round(Math.random() * 768)
		}).show();
	});
});
