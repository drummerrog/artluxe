<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование письма Формы обратной связи
// if (empty($name)) {
if (strlen($email) !== 0) {
  $title = "Новое письмо";
  $body = "
  <h2>Новое письмо</h2>
  <b>Email:</b> $email<br><br>
  <b>Сообщение:</b><br>$message
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();   
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

  // Настройки вашей почты
  $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'artluxe2021@yandex.ru'; // Логин на почте (почта тестовая, не используется)
  // $mail->Password   = ''; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('artluxe2021@yandex.ru', 'Театр Art Luxe'); // Адрес самой почты и имя отправителя
  $mail->addReplyTo('artluxe2021@yandex.ru', 'Театр Art Luxe');
  
  // Получатель письма
  $mail->addAddress('artluxe2021@yandex.ru');  
  // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thank-you.html');