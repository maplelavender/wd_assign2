
/*Fieldset Script*/
function toggle () {
	$(this).parent().next().slideToggle();
		if ($(this).html() == ("&or;")){
			$(this).html("&and;"); }
		else {
			$(this).html("&or;"); }
}
/*Activate Script*/
function init() {
	$(".collapse").click(toggle);
}
$(document).ready(init);