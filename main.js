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
