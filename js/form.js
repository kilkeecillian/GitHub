function validateForm() {
    var x = document.forms["myForm"]["forename"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["surname"].value;
    if (x == "") {
        alert("Surname must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["username"].value;
    if (x == "") {
        alert("Username must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["age"].value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 150) {
        alert("Number must be between 1 & 150");
		return false;
    }
	var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
       var dotpos = x.lastIndexOf(".");
       if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
          alert("Not a valid e-mail address");
		return false;
    }
	
}

/*function nextPage() {
		if (validateForm) {
			
	document.getElementById("start") 
	<a href="quiz.html" target="new">
	<button type="button" class="btn btn-default">Start the Quiz</button>
	</a>
	}else{
		return false;
	}
	*/



/*function setCookie() {
	var customObject = {};
	
	customObject.name = document.getElementById("forename").value;
	customObject.surname = document.getElementById("surname").value;
	customObject.email = document.getElementById("email").value;
	
	var jsonString = JSON.stringify(customObject);
	
	document.cookie = "cookieObject=" + jsonString;
}
*/
	

