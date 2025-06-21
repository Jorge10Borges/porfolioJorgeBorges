<?php
/* header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
 */
require 'config.php'; // Asegúrate de que este archivo contiene las constantes MAIL_HOST, MAIL_USERNAME, etc.

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//require __DIR__ .'/PHPMailer/src/Exception.php';
//require __DIR__ .'/PHPMailer/src/PHPMailer.php';
//require __DIR__ .'/PHPMailer/src/SMTP.php';

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

//$data = json_decode(file_get_contents('php://input'), true);

//$name    = $data['name'] ?? '';
//$email   = $data['email'] ?? '';
//$message = $data['message'] ?? '';

$name    = $_POST['name'] ?? '';
$email   = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
  echo json_encode(['status' => 'error',
                   'message' => 'Todos los campos son obligatorios',
                   'code' => 400,
                    'data' => [
                      'name' => $name,
                      'email' => $email,
                      'message' => $message
                    ]
                  ]);
  exit;
}

$mail = new PHPMailer(true);

// Configuración del servidor SMTP
try {
  $mail->isSMTP();
  $mail->Host       = MAIL_HOST;
  $mail->SMTPAuth   = true;
  $mail->Username   = MAIL_USERNAME;
  $mail->Password   = MAIL_PASSWORD;
  $mail->SMTPSecure = MAIL_SMTPSECURE;
  $mail->Port       = MAIL_PORT;

  // Remitente y destinatario
  $mail->setFrom(MAIL_FROM, $name);
  $mail->addAddress(MAIL_TO); 

  // Contenido del correo
  $mail->isHTML(true);
  $mail->CharSet = 'UTF-8';
  $mail->Subject = "Nuevo mensaje desde tu portafolio";

  $mail->Body = "
  <h3>Nuevo mensaje</h3>
  <p><strong>Nombre:</strong> {$name}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Mensaje:</strong> {$message}</p>
  ";

  $mail->send();
  echo json_encode(['status' => 'success', 'message' => 'Correo enviado correctamente']);

} catch (Exception $e) {
  echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}