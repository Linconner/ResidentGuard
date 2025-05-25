<!DOCTYPE html>
<html>

<head>
    <?php include_once 'cabecalho.php'; ?>
</head>

<?php require_once(__DIR__ . '/../config.php'); ?>

<?php
if (!isset($_SESSION['role'])) {
    echo "Acesso negado!";
    exit();
}
?>

<body style="margin: 0; text-align: center; font: 24px Arial;">

    <?php include_once 'navegacao.php'; ?>

    <?php
    $pagina = filter_input(INPUT_GET, 'p');

    if (empty($pagina)) {
        include_once 'home.php';
    }
    else {
        if (file_exists($pagina . '.php')) {
            include_once $pagina . '.php';
        } 
        else {
            echo "<div>"
                . "<div role='alert'>"
                . "Erro 404, página não encontrada!"
                . "</div>"
                . "</div>";
        }
    }
    ?>
    <?php include_once 'scripts.php'; ?>
</body>

</html>