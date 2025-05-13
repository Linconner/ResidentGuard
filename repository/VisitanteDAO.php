<?php
include_once 'Database.php';

class VisitanteDAO {

    private $db;

    public function __construct() {
        // Pega a conexão única do banco de dados
        $this->db = Database::getInstance()->getConnection();
    }

    // Método para listar visitantes
    public function listar() {
        $sql = "SELECT id, nome, descricao FROM visitantes";
        $result = $this->db->query($sql);
        $dados = [];
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                // Usamos o campo 'id' como chave para cada visitante
                $dados[$row['id']] = $row;
            }
        }
        return $dados;
    }

    // Método para inserir um novo visitante
    public function salvar($nome, $descricao) {
        $stmt = $this->db->prepare("INSERT INTO visitantes (nome, descricao) VALUES (?, ?)");
        $stmt->bind_param("ss", $nome, $descricao);
        $stmt->execute();
        $idInserido = $stmt->insert_id;
        $stmt->close();
        return $idInserido;
    }

    // Método para excluir um visitante dado seu id
    public function excluir($id) {
        $stmt = $this->db->prepare("DELETE FROM visitantes WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
        return true;
    }
}
?>