<?php
if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['mailTo'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mailTo = $_POST['mailTo'];

    $to = $mailTo;
    $subject = 'Mirrobot: запись на занятие';
    $message = "Имя: $name\nТелефон: $phone";
    $headers = "From: MIRROBOTRB@gmail.com\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Письмо успешно отправлено.";
        header("Location: " . "index.html");
        exit();
    } else {
        echo "Ошибка при отправке письма.";
        header("Location: " . "index.html");
        exit();
    }

} else {
    echo "Пожалуйста, заполните все обязательные поля и поставьте галочку 'Согласен на обработку персональных данных'.";
}
?>