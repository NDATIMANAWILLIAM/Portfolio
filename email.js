document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  emailjs.init("BGI5QDs9hZrRAsjn_"); // Your public key

  const contactForm = document.getElementById('contact-form');
  const resetBtn = document.getElementById('reset');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const params = {
      from_name: document.getElementById('userName').value,
      email_id: document.getElementById('userEmail').value,
      message: document.getElementById('userMessage').value
    };

    emailjs.send('service_73c09rg', 'template_jifb9tw', params)
      .then(() => {
        alert('SUCCESS! Your message has been sent.');
        contactForm.reset();
      })
      .catch((err) => {
        alert('FAILED... Please try again later.');
        console.error(err);
      });
  });

  resetBtn.addEventListener('click', () => contactForm.reset());
});
