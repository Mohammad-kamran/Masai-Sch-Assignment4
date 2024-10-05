document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Validate Name
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block"; // Show error
            return false;
        } else {
            nameError.style.display = "none"; // Hide error
            return true;
        }
    }

    // Validate Email
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for valid email
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = "block"; // Show error
            return false;
        } else {
            emailError.style.display = "none"; // Hide error
            return true;
        }
    }

    // Validate Password
    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block"; // Show error
            return false;
        } else {
            passwordError.style.display = "none"; // Hide error
            return true;
        }
    }

    // Event Listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    // Form submit event
    form.addEventListener("submit", function (event) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isNameValid || !isEmailValid || !isPasswordValid) {
            event.preventDefault(); // Prevent form submission if any validation fails
        } else {
            alert("Form submitted successfully!"); // Optional success message
        }
    });
});
