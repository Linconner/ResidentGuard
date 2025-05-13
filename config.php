<?php
// Inicia a sessão para o usuário manipular dados sem erros
session_start();

// Define a raiz do projeto para os includes e requires
define('ROOT_PATH', __DIR__);
// Define a raiz do projeto para os PATHs
define('BASE_PATH', '/ResidentGuard/');
// Define a pasta das imagens, se for decidido alterar seu local futuramente, a modificação precisara ser feita apenas aqui.
define('IMG_PATH', BASE_PATH . 'img/');
// Define a pasta do JS, se necessário, a modificação precisara ser feita apenas aqui.
define('JS_PATH', BASE_PATH . 'js/');
