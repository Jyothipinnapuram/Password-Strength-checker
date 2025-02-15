const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

// Show/Hide Password Toggle
togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
    }
});

// Password Strength Checker
function checkStrength() {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length > 7) strength++; // Length Check
    if (/[A-Z]/.test(password)) strength++; // Uppercase Letter Check
    if (/[0-9]/.test(password)) strength++; // Number Check
    if (/[@$!%*?&]/.test(password)) strength++; // Special Character Check

    // Update Strength Bar and Text
    switch (strength) {
        case 0:
            strengthBar.style.width = "0%";
            strengthBar.style.background = "#ddd";
            strengthText.innerText = "Strength: Weak";
            strengthText.style.color = "#ff3e36";
            break;
        case 1:
            strengthBar.style.width = "25%";
            strengthBar.style.background = "#ff3e36"; // Red
            strengthText.innerText = "Strength: Weak";
            strengthText.style.color = "#ff3e36";
            break;
        case 2:
            strengthBar.style.width = "50%";
            strengthBar.style.background = "#ff691f"; // Orange
            strengthText.innerText = "Strength: Moderate";
            strengthText.style.color = "#ff691f";
            break;
        case 3:
            strengthBar.style.width = "75%";
            strengthBar.style.background = "#ffda36"; // Yellow
            strengthText.innerText = "Strength: Strong";
            strengthText.style.color = "#ffda36";
            break;
        case 4:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "#0be881"; // Green
            strengthText.innerText = "Strength: Very Strong";
            strengthText.style.color = "#0be881";
            break;
    }
}
