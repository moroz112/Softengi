/**
 * Created by AMoroz on 11/3/2015.
 */
$(function(){
	$.ajax({
		url: "http://malaysiaairlines-stage.adobecqms.com/content/mas/my/en/mobiledeals/jcr:content/Landing_Page_Par_Sys/mobiledeals.viewTncDesc.html?id=5757",
		dataType: "html",
		success: function(data) {
			console.log(data)
		},
		error: function(er) {
			console.log(arguments)
		}
	})
}());