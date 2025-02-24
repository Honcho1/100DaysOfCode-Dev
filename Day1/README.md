# Day 1: Custom Form Validator

## Project Description

Welcome to Day 1 of the 100DaysOfCode Challenge! Today, you will build a custom form validator. This project will help you practice your skills in HTML, CSS, and JavaScript by creating a complex registration form with real-time validation.

### Features to Implement

- **Complex Registration Form:** Create a form with multiple fields including:
  - Username
  - Email
  - Password
  - Confirm Password
  - Phone Number
- **Real-Time Validation:** Use JavaScript to validate the form fields in real-time as the user types.
- **Custom Error Messages:** Display custom error messages for each field when validation fails.
- **Password Strength Checker:** Ensure the password meets the following criteria:
  - At least 8 characters long
  - Contains at least one special character (e.g., !, @, #, $, etc.)
  - Contains at least one number
  - Contains at least one uppercase letter
- **Email Format Verification:** Validate that the email address is in a proper format (e.g., user@example.com).
- **Phone Number Format Verification:** Ensure the phone number includes a country code and is in a valid format.
- **CSS Animations:** Add CSS animations to visually indicate validation states (e.g., green border for valid fields, red border for invalid fields).
- **Responsive Design:** Make the form fully responsive so it looks good on all devices.
- **Accessibility Standards:** Ensure the form meets basic accessibility standards (e.g., proper labels, ARIA attributes).

## Instructions

### Getting Started

1. **Navigate to the Day 1 Folder:** Open your code editor and navigate to the `Day1` folder.
2. **Review the Starter Files:** The folder contains the following starter files:
   - `index.html`: The HTML structure of the form.
   - `styles.css`: The CSS file for styling the form.
   - `script.js`: The JavaScript file for handling form validation.
3. **Open the README:** Read through the `README.md` file in the `Day1` folder for detailed instructions and requirements.

### Steps to Complete the Project

1. **Set Up the Form Structure:**

   - Open `index.html` and set up the form structure with the required fields.
   - Ensure each field has a proper label and placeholder text.

2. **Style the Form:**

   - Open `styles.css` and style the form to make it visually appealing.
   - Add CSS animations for validation states (e.g., green border for valid fields, red border for invalid fields).
   - Ensure the form is fully responsive using media queries.

3. **Implement Real-Time Validation:**

   - Open `script.js` and write JavaScript functions to validate each field in real-time.
   - Display custom error messages for each field when validation fails.
   - Implement the password strength checker to ensure it meets the required criteria.
   - Validate the email format using a regular expression.
   - Validate the phone number format, ensuring it includes a country code.

4. **Test the Form:**

   - Test the form in different browsers and devices to ensure it works as expected.
   - Check for accessibility by using screen readers and ensuring proper labels and ARIA attributes are in place.

5. **Commit Your Work:**
   - Stage your changes using `git add .`.
   - Commit your changes with a descriptive message: `git commit -m "Completed Day 1 challenge: Custom Form Validator"`.
   - Push your changes to your forked repository: `git push origin main`.

### Stretch Goals

- **Additional Form Fields:** Add more fields to the form, such as date of birth or address, and implement validation for these fields.
- **Form Submission:** Implement a form submission handler to prevent the form from submitting if there are validation errors.
- **Advanced CSS Animations:** Add more advanced CSS animations to enhance the user experience.

### Resources

- [MDN Web Docs on Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [W3Schools on JavaScript Form Validation](https://www.w3schools.com/js/js_validation.asp)
- [CSS Tricks on Responsive Design](https://css-tricks.com/responsive-web-design-101/)

Good luck, and have fun coding!
