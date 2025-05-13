<nav style="background: #0066cc; padding: 10px">
    <a href="?p=home" style="color: #fff; font-size: 24px; text-decoration: none">ResidentGuard</a>
    <div style="margin-top: 10px;">
        <a href="?p=home" style="color: #fff; text-decoration: none;  margin-right: 15px">Home</a>
        <a href="?p=visitante/listar" style="color: #fff; text-decoration: none;  margin-right: 15px">Visitante Teste</a>
        <?php if ($_SESSION['role'] === 'admin_principal') { ?>
        <a href="#" style="color: #fff; text-decoration: none;  margin-right: 15px">Algum outro link</a>
        <?php } ?>
    </div>
</nav>

<!--
// Verifica se o usuário é admin_principal
if ($_SESSION['tipo_usuario'] !== 'admin_principal') {
    echo "Você não tem permissão para acessar esta página.";
    exit(); // Encerra a execução da página
}
-->