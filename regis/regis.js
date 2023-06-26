function matchPassword() {
    let pw1 = document.getElementById("pswd1");
    let pw2 = document.getElementById("pswd2");
    
    if (pw1 !== pw2) {
        alert("Password did not match");
    } else {
        alert("Password created successfully")
    }
}