document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if mandatory fields are filled
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || phone === '' || message === '') {
        // If any mandatory field is empty, show an alert
        alert('Please fill in all mandatory fields.');
    } else {
        // If all mandatory fields are filled, display the modal
        alert('Thank you for your message! We\'ll get back to you soon.');
        // Reset the form
        document.getElementById('contactForm').reset();
    }
});
