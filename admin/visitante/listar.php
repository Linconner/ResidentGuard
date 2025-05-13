<?php
$titulo = "Lista de Visitantes"; // Define o título da página antes de ser definido pelo index.php
?>


<div>
    <h3>Listar visitantes</h3>
</div>

<div>
    <a href="?p=visitante/salvar" style="color: #000;">Adicionar</a>
</div><br>

<table style="margin: auto; text-align: left">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Opções</th>
        </tr>
    </thead>
    <tbody>
        <?php

        if (!defined('ROOT_PATH')) {
            // Se for preciso entrar no arquivo de forma sem ser pelo index.php, então vai definir onde é a raiz manualmente.
            require_once __DIR__ . '/../../config.php';
        }
        include_once ROOT_PATH . '/repository/VisitanteDAO.php';
        
        $visitanteDAO = new VisitanteDAO();
        $listar = $visitanteDAO ->listar();

        if (!empty($listar)) {
            foreach ($listar as $id => $mostrar) {
                ?>
                <tr>
                    <th scope="row"><?= $id ?></th>
                    <td><?= $mostrar['nome'] ?></td>
                    <td><?= $mostrar['descricao'] ?></td>
                    <td style="text-align: center">
                        <a href="?p=visitante/excluir&id=<?= $id ?>" title="excluir"><img src="<?= IMG_PATH ?>Deletar.png" alt="Deletar"></a>
                        <a href="?p=visitante/salvar"><img src="<?= IMG_PATH ?>Editar.png" alt="Editar"></a>
                    </td>
                </tr>
                <?php
            }
        } else {
            echo "<tr><td colspan='4'>Nenhum visitante encontrado.</td></tr>";
        }
        ?>
    </tbody>
</table>