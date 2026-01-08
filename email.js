<!-- EmailJS -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
  (function(){
    emailjs.init("BGI5QDs9hZrRAsjn_"); // your public key
  })();

  const contactForm = document.getElementById('contact-form');
  const resetBtn = document.getElementById('reset');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const params = {
      from_name: document.getElementById('userName').value,
      email_id: document.getElementById('userEmail').value,
      message: document.getElementById('userMessage').value
    };

    emailjs.send('service_6218a88', 'template_bruq7tt', params)
      .then(() => {
        alert('SUCCESS! Your message has been sent.');
        contactForm.reset();
      })
      .catch(err => {
        alert('FAILED... Please try again later.');
        console.error('EmailJS Error:', err);
      });
  });

  resetBtn.addEventListener('click', () => contactForm.reset());
</script>
