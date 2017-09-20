<?php

// Define path to application directory
defined('APPLICATION_PATH')
        || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../application'));

// Define application environment
defined('APPLICATION_ENV')
        || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') :
                        'production'));

// Configuramos el include path, es decir los directorios donde estarán nuestros archivos
$rootPath = dirname(__FILE__)."/..";

// Leyendo los datos de conexcion API
$data = file_get_contents(realpath(dirname(__FILE__) . '/../application/configs/api.json'));
$apikey = json_decode($data, true);
define("MAIL", $apikey['email']);
define("TOKEN", $apikey['key']);
define("AUTHKEY", base64_encode($apikey['email'].":".$apikey['key']));

set_include_path($rootPath . '/application/config' . PATH_SEPARATOR . $rootPath . '/library/');

// Ensure library/ is on include_path
set_include_path(implode(PATH_SEPARATOR, array(
            realpath(APPLICATION_PATH . '/../library'),
            get_include_path(),
        )));

/** Zend_Application */
require_once 'Zend/Application.php';

//agrego esto
require_once 'Zend/Loader/Autoloader.php';
Zend_Loader_Autoloader::getInstance ();


// Create application, bootstrap, and run
$application = new Zend_Application(
                APPLICATION_ENV,
                APPLICATION_PATH . '/configs/application.ini'
);
$application->bootstrap()->run();
