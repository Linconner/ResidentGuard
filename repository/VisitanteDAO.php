<?php
include_once 'Database.php';

class VisitanteDAO
{

    private $db;

    public function __construct()
    {
        // Pega a conexão única do banco de dados
        $this->db = Database::getInstance()->getConnection();
    }

    // Método para listar visitantes
    public function listar()
    {
        $sql = "SELECT id_visitante, nome_visitante, descricao_visitante FROM visitantes";
        $result = $this->db->query($sql);
        $dados = [];
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                // O campo 'id' é a chave de cada visitante
                $dados[$row['id_visitante']] = $row;
            }
        }
        return $dados;
    }

    // Método para criar um novo visitante
    public function salvar($nome, $descricao)
    {
        $stmt = $this->db->prepare("INSERT INTO visitantes (nome_visitante, descricao_visitante) VALUES (?, ?)");
        $stmt->bind_param("ss", $nome, $descricao);
        $stmt->execute();
        $idInserido = $stmt->insert_id;
        $stmt->close();
        return $idInserido;
    }

    // Método para editar um visitante a partir do id
    public function editar($id, $nome, $descricao)
    {
        $stmt = $this->db->prepare("UPDATE visitantes SET nome_visitante = ?, descricao_visitante = ? WHERE id = ?");
        $stmt->bind_param("ssi", $nome, $descricao, $id);
        $stmt->execute();
        $stmt->close();
        return true;
    }

    // Método para excluir um visitante a partir do id
    public function excluir($id)
    {
        $stmt = $this->db->prepare("DELETE FROM visitantes WHERE id_visitante = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
        return true;
    }
}
