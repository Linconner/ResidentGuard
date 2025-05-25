<?php

if ($_SESSION['role'] !== 'admin_principal') {
    echo "<p style='color: red';>Você não tem permissão para acessar esta página.<p>";
    exit();
}

// Obtém o id do visitante via GET
$id = filter_input(INPUT_GET, 'id');

if (!defined('ROOT_PATH')) {
    // Se for preciso entrar no arquivo de forma sem ser pelo index.php, então vai definir onde é a raiz manualmente.
    require_once __DIR__ . '/../../config.php';
}
include_once ROOT_PATH . '/repository/VisitanteDAO.php';

// Cria a instância do DAO
$visitanteDAO = new VisitanteDAO();

// Chama o método excluir passando o id.
// O método tem que retornar true se ocorrer a exclusão ou false se ocorrer algum erro.
$result = $visitanteDAO->excluir($id);

// Define a mensagem com base no resultado
$msg = $result ? 'Excluído' : 'Erro ao excluir';
?>
<div>
    <div role="alert">
        <?= $msg ?>
    </div>
</div>
<meta http-equiv="refresh" content="0.5;URL=?p=visitante/listar">