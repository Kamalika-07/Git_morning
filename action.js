document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop form submit

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation
        if (username === "" || password === "") {
            alert("Username and Password cannot be empty!");
            return;
        }

        // Dummy login check
        if (username === "admin" && password === "admin123") {
            alert("Login Successful!");
            // redirect page
            window.location.href = "index.html";
        } else {
            alert("Invalid Username or Password");
        }
    });

});
