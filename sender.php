<?php
    $name = $_POST['user-name'];
    $tel = $_POST['tel'];
	$email = $_POST['user-email'];
    $text = $_POST['user-comment'];

	$to = "living_beer@ukr.net"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Фамилия: $tel /n
    Телефон: $email /n
    Почта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<p>Привет, форма отправлена</p>
