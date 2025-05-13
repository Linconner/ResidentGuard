<?php
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
// O método deve retornar true se a exclusão ocorrer com sucesso ou false em caso de erro.
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