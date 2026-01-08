// email.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect data
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Use EmailJS
    emailjs.send("service_73c09rg", "template_jifb9tw", data)
      .then(() => {
        alert("SUCCESS! Your message has been sent.");
        form.reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("FAILED... Please try again later.");
      });
  });

  document.getElementById("reset").addEventListener("click", function () {
    form.reset();
  });
});
