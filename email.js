document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("BGI5QDs9hZrRAsjn_"); // Your EmailJS public key

  const contactForm = document.getElementById('contact-form');
  const resetBtn = document.getElementById('reset');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const params = {
      from_name: document.getElementById('userName').value,
      email_id: document.getElementById('userEmail').value,
      message: document.getElementById('userMessage').value
    };

    emailjs.send('service_73c09rg', 'template_jifb9tw', params)
      .then(function() {
        alert('SUCCESS! Your message has been sent.');
        contactForm.reset();
      }, function(error) {
        alert('FAILED... Please try again later.');
        console.error('Email error:', error);
      });
  });

  resetBtn.addEventListener('click', function() {
    contactForm.reset();
  });
});
