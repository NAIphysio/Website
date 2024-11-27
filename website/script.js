script.js
// JavaScript to handle the form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Here you can add logic to actually send the form data via an API or server
    alert('Your message has been sent!'); // Show a confirmation alert
}
