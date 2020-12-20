const inputs = document.querySelectorAll('input');

// RegEx Patterns
const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
};

// Validation Function (hoisted)
function validate(field,regex) {
    if (regex.test(field.value)) { // test() method tests for a match in a string
        field.className = 'valid'; // add a new css class
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        // console.log(event.target.attributes.name.value);
        validate(event.target, patterns[event.target.name]); // parameters of the validate function
    });
});