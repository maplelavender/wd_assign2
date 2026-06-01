
/*Bill. Email Script*/
function sameAs() {

	var email = document.getElementById("email");
	var bEmail = document.getElementById("billEmailInput");

	if (document.getElementById("billEinput").checked == true) {
		bEmail.value = email.value}
}

/*Pay. Method Script*/
function payWith() {

	var payV = document.getElementById("payV");
	var payC = document.getElementById("payC");
	var payType = document.getElementById("payType");
	var payTypeD = document.getElementById("payTypeDetail");

	if (payV.checked == true) {
		payType.value = payV.value
		payTypeD.style.visibility = "visible" }
	else if (payC.checked == true) {
		payType.value = payC.value
		payTypeD.style.visibility = "visible" }
	else {
		payTypeD.style.visibility = "hidden" }
}
/*Reserv. Fee Script*/
function setFee(){

	var select = document.getElementById("selection").value;
	var fee = document.getElementById("fee");

	if(select == 'gopals'){
        fee.innerHTML = "$ 00.00"; }
	else if(select == 'kajiken'){
        fee.innerHTML = "$ 00.00"; }
	else if(select == 'palermo'){
        fee.innerHTML = "$ 50.00"; }
	else if(select == 'patsys'){
        fee.innerHTML = "$ 25.00"; }
	else if(select == 'secretK'){
        fee.innerHTML = "$ 00.00"; }
	else if(select == 'vapiano'){
        fee.innerHTML = "$ 05.00"; }
}
function init() {

	document.getElementById("billEinput").onsubmit = sameAs
	document.getElementById("restSelect").onsubmit = setFee;
	document.getElementById("paySelect").onclick = payWith;
}
window.onload = init;