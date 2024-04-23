function login() {
    const emailField = document.getElementById("email-input");
    const passwordField = document.getElementById("password-input");
    const email = emailField.value;
    const password = passwordField.value;

    if(email ==='abc@gmail.com' && password ==="abcd"){
        window.location.href = 'home.html';
    }else{
        alert("Please Enter Correct Password")
    }
}