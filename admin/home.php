<div>
    
    <?php
    // Mostra o nivel do usuário, bloquendo para aqueles que não deveriam ter permissão
    if ($_SESSION['role'] === 'admin_principal') {
        echo "<h1>Bem-vindo, Admin principal!</h1>";
        echo "<p>Acesso total ao sistema.</p>";
    } elseif ($_SESSION['role'] === 'admin_secundario') {
        echo "<h1>Bem-vindo, Porteiro!</h1>";
        echo "<p>Acesso limitado ao admin secundário.</p>";
    } else { //teoricamente não é pra funcionar por conta do index.php
        echo "<p style='color: red';>Você não tem permissão para acessar esse site.</p>";
        exit();
    }
    ?>

    <a href="?p=visitante/listar" style="color: #000; margin: 5px;">Listar de Visitante</a><br><br>

    <a href="../login.php" class="button" style="color: #000; margin: 5px;">Sair</a>
</div>