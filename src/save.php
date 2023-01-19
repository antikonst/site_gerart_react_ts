<?php	

if(isset($_POST["send"])) {
	session_start();
	$filename = "ftp://u0628289:nc_C!09F@37.140.192.100/httpdocs/rolline.ru/img/roll.txt";
	$data = $_POST['imageData'];
	$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));
	$handle = fopen($filename, 'w');
	fwrite($handle, $data);
	fclose($handle);
	//$dt = date("h_i_s");
	$dt = $_POST['datenow'];
	$newfile = "ftp://u0628289:nc_C!09F@37.140.192.100/httpdocs/rolline.ru/img/newimage".$dt.".png";
	rename($filename, $newfile);
	//$file = 'http://rolline.ru/img/newimage'.$dt.'.png';
	//$msg = $_POST['text'];
	//$msg = "<a href=\"".$file."\">\u{00a0}</a>\n". $msg;
	//$token = "2014855978:AAHAhsOzobqHZxHsmvnc4e4hFsSahRKJS00";
	//$telegram_admin_id = "936578907";
	//$telegram_admin_id = "-686182842";
	//$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.php';
	
	$redirect = $_SERVER['HTTP_REFERER'];
	
	//file_get_contents('https://api.telegram.org/bot'. $token .'/sendMessage?chat_id='. $telegram_admin_id .'&text=' . rawurlencode($msg));
	//file_get_contents('https://api.telegram.org/bot'. $token .'/sendPhoto?chat_id='. $telegram_admin_id .'&photo='. $file .'&caption='. $msg);

	header("Location: $redirect");

//header("Location: http://allforroll.gerart.spb.ru");
exit;
}

?>