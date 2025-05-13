<div>
    <h3>Salvar</h3>
</div>

<div>
    <form method="post" enctype="multipart/form-data" name="frmCadastro" id="frmcadastro">
        <div>
            <label>#</label>
        </div>
        <div>
            <label>Nome</label>
            <input type="text" name="txtnome" id="txtnome" placeholder="Informe o visitante" maxlength="50"
                minlength="3" value="" />
        </div>
        <div>
            <label>Senha</label>
            <input type="password" name="txtsenha" id="txtsenha" placeholder="Insira a senha" minlength="5"></input>
        </div>
        <div>
            <input type="submit" name="btnsalvar" id="btnsalvar" value="Salvar" />
        </div>
    </form>
</div>

<?php
if (filter_input(INPUT_POST, 'btnsalvar')) {
    $nome = filter_input(INPUT_POST, 'txtnome');
    $senha = filter_input(INPUT_POST, 'txtsenha');

    $dados = array(
        'nome' => $nome,
        'senha' => $senha
    );

    include_once 'class/Visitante.php';
    $vis = new Visitante();

    $vis->setJsonDados(json_encode($dados));

    $msg = $vis->salvar() === true ? "Erro" : "Dados salvo";

    echo '<div>'
        . '<div role="alert">'
        . $msg
        . '</div>'
        . '</div>';

    echo '<meta http-equiv="refresh" content="0.5;URL=login.php">';
}