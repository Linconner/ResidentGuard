<?php

// Verifica se o usuário é admin_principal
if ($_SESSION['role'] !== 'admin_principal') {
    echo "<p style='color: red';>Você não tem permissão para acessar esta página.<p>";
    exit();
    // Encerra a execução da página
}

?>

<div>
    <h3>Editar Visitante</h3>
</div>

<div>
    <form method="post" enctype="multipart/form-data" name="frmCadastro" id="frmCadastro">
        <div style="margin-bottom: 6px;">
            <label for="txtnome">ID</label>
            <input type="text" name="txtid" id="txtid" style="font-size: 20px; padding: 6px;" />
        </div>
        <div style="margin-bottom: 6px;">
            <label for="txtnome">Nome</label>
            <input type="text" name="txtnome" id="txtnome" placeholder="Informe o visitante" maxlength="50" minlength="3" style="font-size: 20px; padding: 6px;" required />
        </div>
        <div style="margin-bottom: 6px;">
            <label for="txtdescricao">Descrição</label>
            <input name="txtdescricao" id="txtdescricao" placeholder="Informe a descrição" style="font-size: 20px; padding: 6px;"></>
        </div>
        <div>
            <input type="submit" id="btneditar" name="btneditar" value="Editar" style="font-size: 20px; padding: 4px 9px;" />
        </div>
    </form>
</div>

<?php

// salvar.php tem esse nome porque era usado como criar e editar 
// então, se perder a função de editar, imagino que será necessário criar outro arquivo chamado editar.php 
// enquanto isso, esse arquivo será chamado de criar.php

if (filter_input(INPUT_POST, 'btneditar')) {
    $id = filter_input(INPUT_POST, 'txtid', FILTER_SANITIZE_NUMBER_INT);
    $nome = filter_input(INPUT_POST, 'txtnome');
    $descricao = filter_input(INPUT_POST, 'txtdescricao');

    if (!defined('ROOT_PATH')) {
        // Se for preciso entrar no arquivo de forma sem ser pelo index.php, então vai definir onde é a raiz manualmente.
        require_once __DIR__ . '/../../config.php';
    }
    include_once ROOT_PATH . '/repository/VisitanteDAO.php';

    // Cria a instância do DAO
    $visitanteDAO = new VisitanteDAO();

    // Chama o método salvar passando o nome e a descrição.
    // O método tem que retornar o ID do registro inserido se ocorrer sem problemas ou false se ocorrer algum erro.
    $newId = $visitanteDAO->editar($id, $nome, $descricao); //OBS: ANALISAR O QUE É QUE É PRECISO RETORNAR AQUI!!!!!!!!!!!!

    if ($newId) {
        $msg = "Dados salvos com sucesso! ID: " . $newId;
    } else {
        $msg = "Erro ao salvar os dados.";
    }

    echo '<div role="alert">' . $msg . '</div>';
    echo '<meta http-equiv="refresh" content="0.5;URL=?p=visitante/listar">';
}
?>