function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailSpan = document.getElementById('email-span')

    if (!email) {
        emailSpan.innerHTML = "<p>Please enter an email address.</p>";
    } else if (!emailRegex.test(email)) {
        emailSpan.innerHTML = "<p>Please enter a valid email address.</p>";
    } else {
        emailSpan.innerHTML = '';
    }
}

function validatePass() {
    var passInput = document.getElementById('password');
    var pass = passInput.value;
    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // At least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number
    var passSpan = document.getElementById('pass-span')

    if (!pass) {
        passSpan.innerHTML = "<p>Please enter a password.</p>";
    } else if (!passRegex.test(pass)) {
        passSpan.innerHTML = "<p>Please enter a valid password. It must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.</p>";
    } else {
        passSpan.innerHTML = "";
    }
}

function confirmEmail() {
    var emailInput = document.getElementById('email').value;
    var confirmEmailInput = document.getElementById('emailconfirm').value;
    var emailSpan = document.getElementById('emailv');

    if (!emailInput || !confirmEmailInput) {
        emailSpan.innerHTML = "<p>Please enter both email and confirm email.</p>";
    } else if (emailInput !== confirmEmailInput) {
        emailSpan.innerHTML = "<p>Email addresses do not match.</p>";
    } else {
        emailSpan.innerHTML = "";
    }
}


function PasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.getElementById("toggleBtn");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function validateAlpha() {
    var alphaInput = document.getElementById('alpha');
    var alpha = alphaInput.value;
    var alphaRegex = /^[a-zA-Z]+$/;
    var alphaSpan = document.getElementById('alpha-span');

    if (!alpha) {
        alphaSpan.innerHTML = "<p>Please enter an alphabet.</p>";
    } else if (!alphaRegex.test(alpha)) {
        alphaSpan.innerHTML = "<p>Please enter a valid character.</p>";
    } else {
        alphaSpan.innerHTML = "";
    }
}

function validateDOB() {
    var dobInput = document.getElementById('dob').value;
    var dobError = document.getElementById('date-span');
    var dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(dobInput)) {
        dobError.textContent = "Invalid date format (YYYY-MM-DD)";
        return false;
    }
    var dob = new Date(dobInput);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age < 18) {
        dobError.textContent = "You must be at least 18 years old.";
        return false;
    }
    dobError.textContent = "";
    return true;
}

function validatePhoneNumber() {
    var phoneInput = document.getElementById('phoneno').value;
    var phoneError = document.getElementById('phone-span');
    var phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (!phoneRegex.test(phoneInput)) {
        phoneError.textContent = "Invalid phone number format. Please include country code and area code.";
        return false;
    }

    phoneError.textContent = "";
    return true;
}



function submit() {
    validateEmail();
    validatePass();
    validateAlpha();
    validatePhoneNumber();
    confirmEmail();
    validateDOB();
}
