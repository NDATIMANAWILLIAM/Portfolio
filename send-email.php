<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Collect form data
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Email details
  $to = 'ndatimanawilliam096@gmail.com'; // Replace with your email address
  $subject = 'New Contact Form Submission';
  $headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

  // Email content
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo 'Email successfully sent.';
  } else {
    echo 'Email sending failed.';
  }
} else {
  echo 'Invalid request method.';
}
