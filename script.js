function checkPassword() {

    let password = document.getElementById("password").value;

    let result = document.getElementById("result");

    let suggestion = document.getElementById("suggestion");

    let strength = "";

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[@$!%*?&]/.test(password);

    if (password.length < 6) {
        strength = "Weak";
        result.style.color = "red";
        suggestion.innerHTML =
            "Use at least 8 characters, uppercase, numbers and special symbols.";
    }

    else if (
        password.length >= 8 &&
        hasUpper &&
        hasLower &&
        hasNumber &&
        hasSpecial
    ) {
        strength = "Strong";
        result.style.color = "green";
        suggestion.innerHTML = "Excellent Password!";
    }

    else {
        strength = "Medium";
        result.style.color = "orange";
        suggestion.innerHTML =
            "Add uppercase letters, numbers and special characters.";
    }

    result.innerHTML = "Password Strength: " + strength;
}