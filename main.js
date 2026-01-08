<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
  emailjs.init("BGI5QDs9hZrRAsjn_"); // Your public key

  const contactForm = document.getElementById('contact-form');
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
        console.error(error);
      });
  });

  document.getElementById('reset').addEventListener('click', function() {
    contactForm.reset();
  });
</script>
