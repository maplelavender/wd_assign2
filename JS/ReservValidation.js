/*Validation Javascript*/
function validate() {
/*regForm Variables*/
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var select = document.getElementById("selection").value;
	var payV = document.getElementById("payV").checked;
	var payC = document.getElementById("payC").checked;
	var bEmail = document.getElementById("BillEmailInput").value;

	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z]+$/;
	
/*Input Check*/
	if (name == "") {
		errMsg += "Full Name cannot be empty.\n";
	}
	if (email == "") {
		errMsg += "Email Address cannot be empty.\n";
	}
	if (phone == "") {
		errMsg += "Phone Number cannot be empty.\n";
	}
	if (select == "") {
		errMsg += "A restaurant must be selected.\n";
	}
	if ((payV == "")&&(payC == "")) {
		errMsg += "A Payment Method must be selected.\n"; }

	if (bEmail == "") {
		errMsg += "Billing Email cannot be empty.\n"; }
	
/*Symbol Check*/
	if (email.indexOf('@') < 0 ) {
		errMsg += "Email Address must contain an @ symbol.\n";
	}

/*Phone Check*/
	if (phone == (pattern)) {
		errMsg += "Phone Number contains characters.\n";
	}

/*Error Alert*/
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
return result;
}

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

	var select = document.getElementById("selection");
	var fee = document.getElementById("fee")

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

/*Activate Script*/
function init() {

	var regForm = document.getElementById("regForm");
	
	document.getElementById("selection").value = sessionStorage.getItem('restaurant');
	document.getElementById("restSelect").onclick = setFee;
	document.getElementById("paySelect").onclick = payWith;
	regForm.onsubmit = validate;
}
window.onload = init;