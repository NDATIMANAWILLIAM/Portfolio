<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $to = "ndatimanawilliam096@gmail.com";
    $subject = "New Contact Message";

    $headers = "From: Website <no-reply@yourdomain.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    $body = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent";
    } else {
        echo "Mail failed";
    }
}
