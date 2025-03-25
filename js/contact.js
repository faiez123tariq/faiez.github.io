document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields', 'error');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        showMessage('Message sent successfully!', 'success');
        contactForm.reset();
        
        // In a real application, you would use fetch() to send the data:
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        })
        .then(response => response.json())
        .then(data => {
            showMessage('Message sent successfully!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showMessage('Error sending message', 'error');
        });
        */
    });
    
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 5000);
    }
});