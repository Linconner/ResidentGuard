<?php
session_start();
require_once 'repository/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitizar os valores enviados pelo formulário (remove as tags e caracteres "ilegais")
    $username = trim(filter_input(INPUT_POST, 'inputname', FILTER_SANITIZE_STRING));
    $password = trim(filter_input(INPUT_POST, 'inputpassword', FILTER_SANITIZE_STRING));

    // Essa parte não é tão essencial por conta do hrml, mas acho que que dependendo do tipo do browser talvez o html não funcione
    if (empty($username) || empty($password)) {
        $erro = "Por favor, preencha todos os campos.";
    } else {
        // Garante que o padrão Sigleton funcione, ou seja, se ainda não existir uma instância da classe, ele instancia agora
        $db = Database::getInstance()->getConnection();

        // 1 - Verifica primeiro se o usuário está na tabela `admin`

        //Para mais segurança se utiliza os statements, no caso do prepare, é passado a consulta SQL com placeholders em vez de concatenar os valores diretamente na SQL
        $stmtAdmin = $db->prepare("SELECT nome_admin, senha_admin FROM admin WHERE nome_admin = ?");
        //O bind_param serve para associar os valores que devem substituir os placeholders na consulta, o type "s" significa string
        $stmtAdmin->bind_param("s", $username);
        $stmtAdmin->execute();
        //Pega os dados retornados pela query com get, fetch_assoc pega a próxima linha dispoível do resultado e retorna um array
        $resultAdmin = $stmtAdmin->get_result()->fetch_assoc(); //Se nenhum registro for encontrado resultadmin se torna null
        $stmtAdmin->close();

        // Aqui provavelmente vai mudar depois para ficar com o passwordhash, que é mais seguro
        if ($resultAdmin && $password === $resultAdmin['senha_admin']) {
            //_SESSION é uma funciona como um array, armazenando informações que poderão ficar disponíveis ao longo de várias páginas pelo mesmo usuário.
            $_SESSION['usuario'] = $resultAdmin['nome_admin'];
            $_SESSION['role']    = 'admin_principal'; //Os valores _SESSION ficam salvos no servidor e serão acessiveis em todas as páginas com session_start
            header("Location: admin/index.php");
            exit();
        }

        // 2 - Verifica se é um funcionário com (role = "Porteiro") para acessar o admin secundário

        $stmtFunc = $db->prepare("SELECT nome_funcionario, senha_funcionario, cargo_funcionario FROM funcionario WHERE nome_funcionario = ?");
        $stmtFunc->bind_param("s", $username);
        $stmtFunc->execute();
        $resultFunc = $stmtFunc->get_result()->fetch_assoc();
        $stmtFunc->close();

        if ($resultFunc && $password === $resultFunc['senha_funcionario']) {
            if ($resultFunc['cargo_funcionario'] === 'Porteiro') {
                $_SESSION['usuario'] = $resultFunc['nome_funcionario'];
                $_SESSION['role']    = 'admin_secundario';
                header("Location: admin/index.php");
                exit();
            } else {
                $erro = "Você não tem permissão para acessar o admin.";
            }
        } 
        
        // 3 - Se os dados colocados pelo usuário não são nem do Porteiro, nem do Admin
        else {
            $erro = "Usuário ou senha inválidos.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResidentGuard Login</title>
    <link rel="stylesheet" href="css/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
</head>
<body>

    <div class="main-container">
        <div class="container">
            <div class="left">
                <div class="greeting">
                    <h1 class="bv">Bem-Vindo</h1>
                </div>
                <div class="logoresi">
                    <img src="img/Logo.png" alt="Logo">
                </div>
                <div class="system-name">
                    ResidentGuard
                </div>
                <div class="description">
                    Sistema de acesso a condomínios
                </div>
            </div>
        </div>

        <form method="POST" action="">
            <fieldset>
                <div class="userlog">
                    <img src="img/loguser.png" alt="User Icon">
                </div>

                <div class="textboxesteste">
                    <input placeholder="Digite seu login" type="text" id="inputname" name="inputname" required
                        onfocus="this.placeholder=''" onblur="if (this.value == '') {this.placeholder='Digite seu login'}">
                </div>

                <div class="textboxesteste2">
                    <input placeholder="Digite sua senha" type="password" id="inputpassword" name="inputpassword" required
                        onfocus="this.placeholder=''" onblur="if (this.value == '') {this.placeholder='Digite sua senha'}">
                </div>

                <a id="password" href="login.html">Esqueci minha senha</a>

                <button type="submit" class="button" id="btncadastrar" name="btncadastrar" value="Cadastrar">Cadastrar</button>

                <?php if (isset($erro)): ?>
                    <p id="error"><?= $erro ?></p>
                <?php endif; ?>
            </fieldset>
        </form>
    </div>

    <script src="js/script.js"></script>
</body>
</html>