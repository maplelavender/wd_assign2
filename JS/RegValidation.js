/*Validation Javascript*/
function validate() {
/*regForm Variables*/
	var user = document.getElementById("user").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
	var diet = document.getElementById("dietary").value;
	var region = document.getElementById("region").value;

	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z]+$/;
	
/*Input Check*/
	if (user == "") {
		errMsg += "User ID cannot be empty.\n";
	}
	if (email == "") {
		errMsg += "Email Address cannot be empty.\n";
	}
	if (phone == "") {
		errMsg += "Phone Number cannot be empty.\n";
	}
	if (pwd1 == "") {
		errMsg += "Password cannot be empty.\n";
	}
	if (pwd2 == "") {
		errMsg += "Retype password cannot be empty.\n";
	}
	if ((genm == "")&&(genf == "")) {
		errMsg += "A gender must be selected.\n";
	}
	if (region == "") {
		errMsg += "Country/Region cannot be empty.\n";
	}
	if (diet == "") {
		errMsg += "Please select something.\n";
	}
	
/*Symbol Check*/
	if (email.indexOf('@') < 0 ) {
		errMsg += "Email Address must contain an @ symbol.\n";
	}

/*Phone Check*/
	if (phone == (pattern)) {
		errMsg += "Phone Number contains characters.\n";
	}

/*Password Check*/
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}

/*Error Alert*/
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
return result;
}

/*Activate Script*/
function init() {

	var regForm = document.getElementById("regForm");
	regForm.onsubmit = validate;
}
window.onload = init;