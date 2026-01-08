document.addEventListener("DOMContentLoaded", () => {
  // Other existing code for navigation & animations...

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const resetButton = document.getElementById('reset');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const from_name = document.getElementById('userName').value.trim();
    const email_id = document.getElementById('userEmail').value.trim();
    const message = document.getElementById('userMessage').value.trim();

    if (!from_name || !email_id || !message) {
      alert('Please fill in all fields.');
      return;
    }

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name,
      email_id,
      message
    }, 'YOUR_PUBLIC_KEY')
    .then(function(response) {
      alert('SUCCESS! Your message has been sent.');
      contactForm.reset();
    }, function(error) {
      console.error('EmailJS error:', error);
      alert('FAILED... Please try again later.');
    });
  });

  resetButton.addEventListener('click', () => {
    contactForm.reset();
  });
});
