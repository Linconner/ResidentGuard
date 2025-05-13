<div>
    <h3>Salvar Visitante</h3>
</div>

<div>
    <form method="post" enctype="multipart/form-data" name="frmCadastro" id="frmCadastro">
        <div style="margin-bottom: 6px;">
            <label for="txtnome">Nome</label>
            <input type="text" name="txtnome" id="txtnome" placeholder="Informe o visitante" maxlength="50" minlength="3" style="font-size: 20px; padding: 6px;" required/>
        </div>
        <div style="margin-bottom: 6px;">
            <label for="txtdescricao">Descrição</label>
            <input name="txtdescricao" id="txtdescricao" placeholder="Informe a descrição" style="font-size: 20px; padding: 6px;"></>
        </div>
        <div>
            <input type="submit" id="btnsalvar" name="btnsalvar" value="Salvar" style="font-size: 20px; padding: 4px 9px;" />
        </div>
    </form>
</div>

<?php

if (filter_input(INPUT_POST, 'btnsalvar')) {
    $nome = filter_input(INPUT_POST, 'txtnome');
    $descricao = filter_input(INPUT_POST, 'txtdescricao');

    if (!defined('ROOT_PATH')) {
        // Se for preciso entrar no arquivo de forma sem ser pelo index.php, então vai definir onde é a raiz manualmente.
        require_once __DIR__ . '/../../config.php';
    }
    include_once ROOT_PATH . '/repository/VisitanteDAO.php';

    $visitanteDAO = new VisitanteDAO();

    // Chama o método salvar passando o nome e a descrição.
    // O método retorna o ID do registro inserido (ou false em caso de erro).
    $novoId = $visitanteDAO->salvar($nome, $descricao);

    if ($novoId) {
        $msg = "Dados salvos com sucesso! ID: " . $novoId;
    } else {
        $msg = "Erro ao salvar os dados.";
    }

    echo '<div role="alert">' . $msg . '</div>';
    echo '<meta http-equiv="refresh" content="0.5;URL=?p=visitante/listar">';
}
?>