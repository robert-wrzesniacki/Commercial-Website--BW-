<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $message = isset($_GET['message']) ? $_GET['message'] : null;
    $tel = isset($_GET['tel']) ? $_GET['tel'] : null;
    $email = isset($_GET['from']) ? $_GET['from'] : null;

        require 'vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();
        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
           // $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = $_ENV['SMTP_HOST'];                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = $_ENV['SMTP_USERNAME'];           // SMTP username
            $mail->Password   = $_ENV['SMTP_PASSWORD'];                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = $_ENV['SMTP_PORT'];
            $mail->CharSet = "UTF-8";
            // Recipients
            $mail->setFrom($email, $name);
            $mail->addAddress($_ENV['SMTP_ADRESS']);     // Add a recipient
            $mail->addReplyTo($email);

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'Wiadomość ze strony';
            $mail->Body    = 'Imię: ' . $name . '<br />Email: ' . $email . '<br />Nr telefonu:' . $tel . '<br /><br /><b>Treść Wiadomości:</b> '
            . $message;

            if($mail->send())
                echo "success";
        }catch (Exception $e){
            echo "fail";
        }


?>


