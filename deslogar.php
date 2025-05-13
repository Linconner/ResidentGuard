<?php
// Limpa os dados da sessão
$_SESSION = array();

// Encerra a sessão
session_destroy();

// Manda o usuário de volta para a tela de login
header("Location: login.php");
exit();
?>