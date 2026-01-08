// EmailJS Contact Form
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // replace with your real public key
})();

const contactForm = document.getElementById('contact-form');
const resetBtn = document.getElementById('reset');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const params = {
    from_name: document.getElementById('userName').value,
    email_id: document.getElementById('userEmail').value,
    message: document.getElementById('userMessage').value
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params)
    .then(function() {
      alert('SUCCESS! Your message has been sent.');
      contactForm.reset();
    }, function(error) {
      alert('FAILED... Please try again later.');
      console.error('EmailJS error:', error);
    });
});

resetBtn.addEventListener('click', () => contactForm.reset());
