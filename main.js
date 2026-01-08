// EmailJS Integration (add at bottom of main.js or after DOMContentLoaded)
emailjs.init("BGI5QDs9hZrRAsjn_"); // your public key

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event){
  event.preventDefault();

  const params = {
    from_name: document.getElementById('userName').value,
    email_id: document.getElementById('userEmail').value,
    message: document.getElementById('userMessage').value
  };

  emailjs.send('service_73c09rg', 'template_jifb9tw', params)
    .then(function(){
      alert('SUCCESS! Your message has been sent.');
      contactForm.reset();
    }, function(error){
      alert('FAILED... Please try again later.');
      console.error('EmailJS error:', error);
    });
});

document.getElementById('reset').addEventListener('click', function() {
  contactForm.reset();
});


<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
  // Initialize EmailJS
  emailjs.init("BGI5QDs9hZrRAsjn_"); // Replace with your EmailJS public key

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event){
    event.preventDefault();

    const params = {
      from_name: document.getElementById('userName').value,
      email_id: document.getElementById('userEmail').value,
      message: document.getElementById('userMessage').value
    };

    emailjs.send('service_73c09rg', 'template_jifb9tw', params) // replace with your Service ID and Template ID
      .then(function(){
        alert('SUCCESS! Your message has been sent.');
        contactForm.reset();
      }, function(error){
        alert('FAILED... Please try again later.');
        console.error('EmailJS error:', error);
      });
  });

  // Reset button functionality
  document.getElementById('reset').addEventListener('click', function() {
    contactForm.reset();
  });
</script>
