document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Passwords do not match");

        return;
    }

    const existingUser =
    localStorage.getItem(email);

    if(existingUser){

        alert("User already exists");

        return;
    }

    const user = {
        name,
        email,
        password
    };

    localStorage.setItem(
        email,
        JSON.stringify(user)
    );

    alert("Registration Successful");

    window.location.href =
    "login.html";
});