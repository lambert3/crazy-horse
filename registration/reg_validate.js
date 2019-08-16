/* The following code is written to validate a registration form.
   All the 
*/

// declaring an arrow function validate to validate the form fields
const validate = () => {

	//creating a function and passing to it parameters field and style to style a given field in HTML
	const borderColour = (theField, theStyle) => {
	theField.style.border = theStyle;
}	
	// getting the element address input field by its id and assigning it to the variable address
	const address = document.getElementById("address");

	// getting the element form by its id
	let form = document.getElementById("main-form")

	//an event listener that is triggered when the submit button is clicked and all the code in it is executed
	form.addEventListener("submit", (event) => {
		// preventDefault() method cancels the event if it is cancelable, 
		// meaning that the default action that belongs to the event will not occur.
		event.preventDefault()

		// getting the element user input field by its id and assigning it to the variable user
		const user = document.getElementById("user_id");
		
		// regular expression rule to check whether user id is between 5 and 12
		let userRegex =  /^\w{5,12}$/;

		//condition to check if the value input into the field obeys the regular expression defined above(userRegex)
    	if(userRegex.test(user.value) == false){
    		//calling the function borderColour and passing 2 arguments( the respective field and its style)
    		borderColour(user,"1px solid red");

    		//getting an html element by its class name and adding a text/message to that element.
    		//a class returns an array-like object of all child elements which have all of the given class names.
    		document.getElementsByClassName("warningMessage")[0].innerHTML = "Required and must be of length 5 to 12";
    		document.getElementsByClassName("warningMessage")[0].style = "color: red; font-family: Helvetica, sans-serif;"
    		// e.preventDefault()
    	}
    		//the else statement is executed if the input value obeys the regular expression
    	else {
    		borderColour(user,"1px solid rgb(122, 122, 139)");
    		document.getElementsByClassName("warningMessage")[0].innerHTML = "";
    	}

    	// getting the element password input field by its id and assigning it to the variable password
    	const pass = document.getElementById("password");

    	// regular expression rule to check whether the password is between 7 and 12
    	let pwdRegex =  /^\w{7,12}$/;
    	//condition to check if the value input into the field obeys the regular expression defined above(userRegex)
    	//the else statement is executed if the input value obeys the regular expression
    	if(pwdRegex.test(pass.value) == false){
    		borderColour(pass,"1px solid red");
    		document.getElementsByClassName("warningMessage")[1].innerHTML = "Required and must be of length 7 to 12";
    		document.getElementsByClassName("warningMessage")[1].style = "color: red; font-family: Helvetica, sans-serif;"
    	}
    	else {
    		borderColour(pass,"1px solid rgb(122, 122, 139)");
    		document.getElementsByClassName("warningMessage")[1].innerHTML = "";
    	}

    	// getting the element name input field by its id and assigning it to the variable name
    	const name = document.getElementById("name");

    	// regular expression rule to check whether the characters typed into the text box are only alphabets
    	let nameRegex =  /^[A-Za-z]+$/;

    	//condition to check if the input value is alphabet only and return error if the rule is not met
    	//the else statement is executed if the input value obeys the regular expression
    	if(nameRegex.test(name.value) == false){
    		borderColour(name,"1px solid red");
    		document.getElementsByClassName("warningMessage")[2].innerHTML = "Required and alphabets only.";
    		document.getElementsByClassName("warningMessage")[2].style = "color: red; font-family: Helvetica, sans-serif;"
    	}
    	else {
    		borderColour(name,"1px solid rgb(122, 122, 139)");
    		document.getElementsByClassName("warningMessage")[2].innerHTML = "";
    	}

    	// getting the element select field by its id and assigning it to the variable country
    	const country = document.getElementById("optionCountry");

    	//condition to check if a value is selected from the drop down list or not
    	if (optionCountry.selected == true) {
    		borderColour(country,"1px solid red");
    		document.getElementsByClassName("warningMessage")[3].innerHTML = "Required. Must select a country.";
    		document.getElementsByClassName("warningMessage")[3].style = "color: red; font-family: Helvetica, sans-serif;"
    	}
    	else {
    		borderColour(country,"1px solid rgb(122, 122, 139)");
    		document.getElementsByClassName("warningMessage")[3].innerHTML = "";
    	}

    	// getting the element zip input field by its id and assigning it to the variable zip
    	const zip = document.getElementById("zip");

    	// regular expression rule to check whether the characters typed into the text box are only numbers
    	zipRegex = /^\d+$/;

    	//condition to check if the input value is number only and return error if the rule is not met
    	//the else statement is executed if the input value obeys the regular expression
    	if(zipRegex.test(zip.value) == false){
    		borderColour(zip,"1px solid red");
    		document.getElementsByClassName("warningMessage")[4].innerHTML = "Required. Must be numeric only.";
    		document.getElementsByClassName("warningMessage")[4].style = "color: red; font-family: Helvetica, sans-serif;"
    	}
    	else {
    		borderColour(zip,"1px solid rgb(122, 122, 139)");
    		document.getElementsByClassName("warningMessage")[4].innerHTML = "";
    	}

    	// getting the element email input field by its id and assigning it to the variable email
    	const email = document.getElementById("email");

    	// regular expression rule to check whether the input email is valid
    	emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/s;

    	//condition to check if the input value is a valid email and return error if the rule is not met
    	//the else statement is executed if the input value obeys the regular expression
    	if(emailRegex.test(email.value) == false){
    		borderColour(email,"1px solid red");
    		document.getElementsByClassName("warningMessage")[5].innerHTML = "Required. Must be a valid email.";
    		document.getElementsByClassName("warningMessage")[5].style = "color: red; font-family: Helvetica, sans-serif;"
    	}
    	else {
    		borderColour(email,"1px solid rgb(122, 122, 139)");
    		document.getElementsByClassName("warningMessage")[5].innerHTML = "";
    	}

    	/* getting the elements radiobuttons input fields by their ids and 
    	   assigning them to the variables male and female respectively*/
    	
    	const male = document.getElementById("male");
    	const female = document.getElementById("female");

    	//condition to check if the radiobutton is selected or not 
    	if (male.checked == false && female.checked == false) {
    		document.getElementsByClassName("warningMessage")[6].innerHTML = "Required.";
    		document.getElementsByClassName("warningMessage")[6].style = "color: red; font-family: Helvetica, sans-serif; padding-left: 79px;"
    	}
    	else {
    		document.getElementsByClassName("warningMessage")[6].innerHTML = "";
    	}

    	/* getting the elements checkboxes input fields by their ids and
     	   assigning them to the variables english and nonEnglish respectively.
        */
	    const english = document.getElementById("english");
	    const nonEnglish = document.getElementById("non-english");

	    //Event listener triggered when english checkbox is checked
	    english.addEventListener("change", () => {
	    	// checks if english checkbox is checked and if it is true it disables the non-english checkbox
	    	if(english.checked){
	    		nonEnglish.checked = false;
	    	}
	    });

	    //Event listener triggered when non-english checkbox is checked
	    nonEnglish.addEventListener("change", () => {
	    	// checks if non-english checkbox is checked and if it is true it disables the english checkbox
	    	if(nonEnglish.checked){
	    		english.checked = false;
	    	}
	    });

	    /* checks if english checkbox and the non-english checkbox
	       are not checked and shows a message to select one or the other*/
    	if(english.checked == false && nonEnglish.checked == false){
    		document.getElementsByClassName("warningMessage")[7].innerHTML = "Required.";
    		document.getElementsByClassName("warningMessage")[7].style = "color: red; font-family: Helvetica, sans-serif; padding-left: 30px;"
    	}
    	else{
    		document.getElementsByClassName("warningMessage")[7].innerHTML = "";
    	}

    	// getting the element textarea field by its id and assigning it to the variable textArea
    	const textArea = document.getElementById("textarea")

	    // var spaceCounter = 0;

	    // regular expression to capture white space entered from the keyboard
	    var spaceRegex =  /\s/g;

	    // regular expression to capture a character
	    // var wordRegex =  /\w/g;

	    //event triggered when there is a keypress on the keyboard
	    textArea.addEventListener("keypress", (e) => {

	    	// finding the spaces entered by using the match method/the amount of spaces entered 
	    	let matchSpace = e.target.value.match(spaceRegex);

	    	//condition to check if the value input is not empty and not null
	    	if (e.target.value != "" && e.target.value != null) {
	    		//condition to check the words entered do not exceed 300 words by counting the amount of spaces caught
	    		if (matchSpace.length >= 300) {
	    			e.preventDefault();
	    			return false;
	    		};   		
	    	};
	    });
	});
}

//callling the function validate
validate();
    
    
    
    // const name = document.getElementById("name");
    // const name = document.getElementById("name");

    //
    
    
    // user.addEventListener("input", () => {
    	
    // });

    
    
    // pass.addEventListener("input", () => {
    	
    // });

    
    // name.addEventListener("input", () => {
    	
    // });

    
    // country.addEventListener("input", () => {
    	
    // });

    
    // zip.addEventListener("input", () => {
    	
    // });

    
    // email.addEventListener("input", () => {
    	
    // });

    