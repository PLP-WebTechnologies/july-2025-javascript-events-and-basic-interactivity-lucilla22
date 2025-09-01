// ==========================================================
// Part 1: Event Handling
// ==========================================================

// Get a reference to the button and the paragraph
const toggleButton = document.getElementById('toggleButton');
const toggleText = document.getElementById('toggleText');

// Add a click event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the 'hidden' class on the paragraph
    toggleText.classList.toggle('hidden');
});


// ==========================================================
// Part 2: Interactive Elements
// ==========================================================

// --- Light/Dark Mode Toggle ---
const modeToggleBtn = document.getElementById('modeToggle');
const body = document.body;

modeToggleBtn.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
});


// --- Simple Counter ---
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const counterDisplay = document.getElementById('counterDisplay');

let count = 0;

decrementBtn.addEventListener('click', function() {
    count--;
    counterDisplay.textContent = count;
});

incrementBtn.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
});


// ==========================================================
// Part 3: Form Validation
// ==========================================================

const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Add a submit event listener to the form
myForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear previous error and success messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    // A flag to check if the form is valid
    let isValid = true;

    // --- Validation Logic ---

    // Name validation: Must not be empty
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation: Simple check for '@'
    if (!emailInput.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation: Must be at least 6 characters
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If all validation passes, show success message
    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
        // In a real application, you would send the data to a server here.
    }
});
