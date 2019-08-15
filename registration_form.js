
/* This function validates all the inputs in the form
in this function will be different consts assigned to different fields*/

const validation =()=>{
//
        const useid = document.getElementById('userId');
        if(useid.value.length <5 || useid.value.length >12 ){
            alert('UserID Required and must be of length 5 to 12');
        }
// this piece of code will validate the password field and ensure its length is not less 7 or greater than 12
        const userpassword = document.getElementById('Password');
        if(userpassword.value.length <7 || userpassword.value.length >12 ){
            alert('password Required and must of length 7 to 12');
        
        }
//in this code i use regular expression or "regex" to validate the input and will only allow Alphabates 
        const username = document.getElementById('name');
        const alphabates = /^[A-Za-z]+$/;
        if(username.value.match(alphabates)){
            return true;
        }
        else{
            alert('required and only alphabates');
        }
// this code instructs not to leave the select value as "choose a country" 
        const usercountry= document.getElementById('country');
        if(usercountry.value =='Choose a Country'){
            alert('Required and must choose a country');
        
        }

        else{
            return true;
        }
        
//in this code i use regex to validate the input that only allows numeric.
        const zipcode = document.getElementById('zip');
        const numeric = /^[1-9]+$/;
            if(zipcode.value.match(numeric)){
                 return true;
            }
            else{
                    alert('required and only numeric');
                }

 //in this code i use regex to validate the email input that only allows email.
        const useremail = document.getElementById('email');
        const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(useremail.value.match(email)){
                 return true;
            }
            else{
                    alert('required and and put valid email');
                }


        
}
