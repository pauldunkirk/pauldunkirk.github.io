// function turnJazzy(){
// document.getElementById("boring").href="jazzy_style.css";
// }
$(document).ready(function() {
	$("#nav li a").click(function() {
		$("link").attr("href",$(this).attr('rel'));
		return false;
	});
});
