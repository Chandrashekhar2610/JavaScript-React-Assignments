
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });

    let valid = true;

    if (name.length < 3) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        valid = false;
    }

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid 10-digit Indian mobile number.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
    }

    return false;
}
