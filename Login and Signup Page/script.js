window.addEventListener('DOMContentLoaded', (event) => {
    let signupBtn = document.getElementById('signupBtn');
    let signinBtn = document.getElementById('signinBtn');
    let nameField = document.getElementById('nameField');
    let title = document.getElementById('title');

    signinBtn.onclick = function(){
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }

    signupBtn.onclick = function(){
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }

    // Form Validation for Sign Up
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('nameInput');
        const nameValue = nameInput.value.trim();
        const nameRegex = /^[a-zA-Z\s]*$/; // Regular expression to allow only alphabets and spaces
        
        if (nameValue === '') {
            alert('Please enter your name.');
            return;
        }

        if (!nameRegex.test(nameValue)) {
            alert('Please enter alphabets only in the name field.');
            return;
        }

        const emailInput = document.getElementById('emailInput');
        const emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            alert('Please enter your email.');
            return;
        }
        
        const passwordInput = document.getElementById('passwordInput');
        const passwordValue = passwordInput.value.trim();
        
        if (passwordValue === '') {
            alert('Please enter your password.');
            return;
        }
        
        // If all inputs are filled and name contains only alphabets, display sign up success message
        alert('Sign Up Successful!');
    });

    // Form Validation for Sign In
    const signInForm = document.getElementById('sign'); // Corrected variable name
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('emailInput');
        const emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            alert('Please enter your email.');
            return;
        }
        
        const passwordInput = document.getElementById('passwordInput');
        const passwordValue = passwordInput.value.trim();
        
        if (passwordValue === '') {
            alert('Please enter your password.');
            return;
        }
        
        // If all inputs are filled, display sign in success message
        alert('Sign In Successful!');
    });
});
