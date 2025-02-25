document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".registrationForm");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const phone = document.getElementById("phone");

  // Validation functions
  function validateUsername() {
    if (username.value.trim() === "") {
      showError(username, "Username is required");
      return false;
    } else {
      clearError(username);
      return true;
    }
  }

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      return false;
    } else if (!regex.test(email.value)) {
      showError(email, "Invalid email format");
      return false;
    } else {
      clearError(email);
      return true;
    }
  }

  function validatePassword() {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.value.trim() === "") {
      showError(password, "Password is required");
      return false;
    } else if (!regex.test(password.value)) {
      showError(
        password,
        "Password must be at least 8 characters long and include a special character, number, and uppercase letter"
      );
      return false;
    } else {
      clearError(password);
      return true;
    }
  }

  function validateConfirmPassword() {
    if (confirmPassword.value.trim() === "") {
      showError(confirmPassword, "Confirm Password is required");
      return false;
    } else if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match");
      return false;
    } else {
      clearError(confirmPassword);
      return true;
    }
  }

  function validatePhone() {
    const regex = /^\+\d{1,3}\s?\d{4,}$/;
    if (phone.value.trim() === "") {
      showError(phone, "Phone Number is required");
      return false;
    } else if (!regex.test(phone.value)) {
      showError(phone, "Invalid phone number format");
      return false;
    } else {
      clearError(phone);
      return true;
    }
  }

  // Helper functions
  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = message;
    input.classList.add("error");
  }

  function clearError(input) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = "";
    input.classList.remove("error");
  }

  // Event listeners
  username.addEventListener("input", validateUsername);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validateConfirmPassword);
  phone.addEventListener("input", validatePhone);

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      validateUsername() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validatePhone()
    ) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
