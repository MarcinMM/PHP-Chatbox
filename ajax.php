<?php

if (file_exists('chat.json')) {
        $jsonAr = json_decode(file_get_contents('chat.json'), true);
}

if (isset($_POST) && isset($_POST['author']) && (strlen($_POST['author']) > 0) && (strlen($_POST['text'])> 0)) {
        $author = htmlentities(strip_tags($_POST['author']), ENT_QUOTES);
        $text = stripslashes(htmlentities(strip_tags($_POST['text']), ENT_QUOTES));
	$chat = array("author" => $author, "text" => $text, "timestamp" => date('H:i:s',time()), "size" => sizeof($jsonAr));
	$jsonAr[] = $chat;
}

$jsonAr = array_slice($jsonAr, sizeof($jsonAr) - 70);

file_put_contents("chat.json", json_encode($jsonAr));

echo json_encode($jsonAr);

