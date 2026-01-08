
<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: index.php?status=error");
  exit;
}

$name    = strip_tags(trim($_POST["name"]));
$email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($_POST["message"]));

if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: index.php?status=error");
  exit;
}

$to = "ndatimanawilliam096@gmail.com";
$subject = "New Contact Form Message";
$headers = "From: Portfolio <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

if (mail($to, $subject, $body, $headers)) {
  header("Location: index.php?status=success");
} else {
  header("Location: index.php?status=error");
}
