let full_name = document.getElementById("full_name");
let email = document.getElementById("email");
let message = document.querySelector("#message");
let btn = document.querySelector("#button");
let form = document.querySelector("form");
let emailFormat = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

function handleForm() {
    
    // clear the console
    console.clear();
    
    // collect your error messages in the array
    let errors = [];
    
    // collect user input into object
    let data = {};
    
    
    // Validate full name
    if (full_name.value) {
       data.full_nameValue = full_name.value;
    } else {
        errors.push("Full name is missing!");
    } 
    
    
    // Email validation
    if (email.value) {
        
        if (emailFormat.test(email.value)) {
            data.emailValue = email.value;
        } else {
            errors.push("Email is invalid!");
        }
        
    } else {
        errors.push("Email is empty!");
    }   
      
    
    // Validate message
    if (message.value) {
       data.messageValue = message.value;
    } else {
        errors.push("Message is missing!");
    }   
    
    
    // create feedback
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(data);
        form.reset();
    }
}

btn.addEventListener("click", handleForm);
