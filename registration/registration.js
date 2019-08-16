
/**
 * Shows a meesage
 * @param {String} msg 
 */
const theMessage = (msg) => {
  alert(msg);
}

/**
 * 
 * @param {the element} theField 
 * @param {css style } theColor 
 */
const theBorderColor = (theField, theColor) => {
  theField.style.border = theColor;
}

/**
 * Validates the form fields
 */
const validateReg = () => {

  // to check confirm user id validification
  let flagUserId = false;

  // user id
  const userIdFld = document.getElementById('user-id');
  userIdFld.addEventListener('input', () => {

    let val = userIdFld.value;
    let rule = /^\w{5,12}$/;

    let theLength = val.length;

    if (rule.test(val) == false) {
      theBorderColor(userIdFld, '1px solid red');
    } else {
      theBorderColor(userIdFld, '1px solid white');
    }

    flagUserId = rule.test(val);

  });

  // to check confirm password validification
  let flagPassword = false;

  //password
  const passwordFld = document.getElementById('password');
  passwordFld.addEventListener('input', () => {
    let theObtainedPassword = passwordFld.value;
    let rule = /^\w{7,12}$/;
    console.log(rule.test(theObtainedPassword));

    if (rule.test(theObtainedPassword) == false) {
      theBorderColor(passwordFld, '1px solid red');
    } else {
      theBorderColor(passwordFld, '1px solid white');
    }

    flagPassword = rule.test(theObtainedPassword);

  });

  // to check confirm name validification
  let flagName = false;
  // name
  const nameFld = document.getElementById('name');
  nameFld.addEventListener('input', () => {

    let theObtainedName = nameFld.value;
    let rule = /^[A-Za-z]+$/;
    console.log(rule.test(theObtainedName));

    if (rule.test(theObtainedName) == false) {
      theBorderColor(nameFld, '1px solid red');
    } else {
      theBorderColor(nameFld, '1px solid white');
    }

    flagName = rule.test(theObtainedName);

  });

  // to check confirm country validification
  let flagCountry = false;
  // countries
  const countryFld = document.getElementById('countries');

  countryFld.addEventListener('change', (e) => {

    let theObatinedCountry = countryFld.value;

    console.log('country value: ' + theObatinedCountry);

    if (theObatinedCountry == '' || theObatinedCountry == null) {
      theBorderColor(countryFld, '1px solid red');
    } else {
      theBorderColor(countryFld, '1px solid white');
      flagCountry = true;
    }

  // flagCountry = rule.test(theObatinedCountry);
  });


  // zip code
  let zipCodeStandard = /^\d+$/;
  const zipCodeFld = document.getElementById('zip-code');
  let flagZipCode = false;
  zipCodeFld.addEventListener('input', () => {
    let theObtainerZipCode = zipCodeFld.value;
    if (zipCodeStandard.test(theObtainerZipCode) == false) {
      theBorderColor(zipCodeFld, '1px solid red');
      flagZipCode = false;
    } else {
      theBorderColor(zipCodeFld, '1px solid white');
      flagZipCode = true;
    }
  });

  // to check confirm email validification
  let flagEmail = false;

  // email
  const emailFld = document.getElementById('email');
  emailFld.addEventListener('input', () => {

    let theObatinedEmail = emailFld.value;
    let rule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(rule.test(theObatinedEmail));

    if (rule.test(theObatinedEmail) == false) {
      theBorderColor(emailFld, '1px solid red');
    } else {
      theBorderColor(emailFld, '1px solid white');
    }
    flagEmail = rule.test(theObatinedEmail);
  });

  /**
   * this makes sure only one check box is in check
   * if a one checkbox is checked, the other is unchecked automagically
   */
  // upon checking the English checkbox
  document.getElementById('english').addEventListener('change', (e) => {
    if (document.getElementById('english').checked) {
      document.getElementById('non-english').checked = false;
    }
  });

  // upon checking the non-english checkbox
  document.getElementById('non-english').addEventListener('change', () => {
    if (document.getElementById('non-english').checked) {
      document.getElementById('english').checked = false;
    }
  });

  // number of words in the text area
  const theTextArea = document.getElementById('text-area');

  let whiteSpaceCount = 0;
  let allWhiteSpaces = [];
  const spaceRule = /\s/g;
  const characterRule = /\w/g;
  let allCharacters = [];


  /**
   * when a character is typed in the textarea
   */
  theTextArea.addEventListener('keypress', (e) => {

    let spaces = e.target.value;
    let spaceMatching = spaces.match(spaceRule);

    if (spaces != null && spaces != '') {

      if (spaceMatching.length > 299) {
        e.preventDefault();
        return false;
      }

    }

  });

  // preventing pasting text into the textarea
  theTextArea.addEventListener('paste', (e) => {
    e.preventDefault();
  });

  // upon submitting form
  let theForm = document.getElementById('the-form');

  theForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // language
    if (document.getElementById('english').checked == false && document.getElementById('non-english').checked == false) {
      theMessage('please specify by checking a box whether you speak English or not');
      return;
    }

    if (flagUserId == false) {
      theMessage('the number of characters for the user id must be between from 7-12');
      userIdFld.focus();
      return;
    }

    if (flagPassword == false) {
      theMessage('please the password must have at least 7 characters and not more than 12');
      passwordFld.focus();
      return;
    }

    if (flagName == false) {
      theMessage('the name must only take in alphabetical characters please');
      nameFld.focus();
      return;
    }

    if (flagCountry == false) {
      theMessage('please choose a country from the dropdown');
      countryFld.focus();
      return;
    }

    // zip code
    if (zipCodeFld.value != null && zipCodeFld.value != '') {
      if (flagZipCode == false) {
        theMessage('please check your zipcode');
        zipCodeFld.focus();
        return;
      }
    }

    theMessage('submitted successfully');

  });

}


validateReg();