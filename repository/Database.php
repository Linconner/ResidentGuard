<?php
class Database {
    private static $instance = null;
    private $conn;

    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $dbName = 'residentguard';

    // Construtor privado garante que somente o método getInstance possa criar uma instância
    private function __construct() {
        $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->dbName);
        if ($this->conn->connect_error) {
            die("Falha na conexão: " . $this->conn->connect_error);
        }
    }

    // Retorna a instância da classe, que é uma instância única
    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    // Retorna a conexão ativa
    public function getConnection() {
        return $this->conn;
    }
}
?>
