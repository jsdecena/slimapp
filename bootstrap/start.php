<?php

/* Setup Eloquent. */
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;

$capsule = new Capsule;
$capsule->addConnection([
    "driver"    => "mysql",
    "host"      => "localhost",
    "database"  => "slimapp",
    "username"  => "root",
    "password"  => "",
    "charset"   => "utf8",
    "collation" => "utf8_general_ci",
    "prefix"    => ""
]);

$capsule->setEventDispatcher(new Dispatcher(new Container));
$capsule->bootEloquent();

// Prepare app
$app = new \Slim\Slim(array(
    'templates.path'    => '../templates',
    'mode'              => 'develop',
    'debug'             => true,
    'cookies.encrypt'   => true,
    'cookies.path'      => '../app/storage/logs/slimcookie.log'
));

// Create monolog logger and store logger in container as singleton 
// (Singleton resources retrieve the same log resource definition each time)
$app->container->singleton('log', function () {
    $log = new \Monolog\Logger('slim-skeleton');
    $log->pushHandler(new \Monolog\Handler\StreamHandler('../app/storage/logs/slimapp.log', \Monolog\Logger::DEBUG));
    return $log;
});

// Prepare view
$app->view(new \Slim\Views\Twig());
$app->view->parserOptions = array(
    'charset'           => 'utf-8',
    'cache'             => realpath('../templates/cache'),
    'auto_reload'       => true,
    'strict_variables'  => false,
    'autoescape'        => true
);

$app->view->parserExtensions = array(new \Slim\Views\TwigExtension());

require '../app/routes/api/users_api.php';
require '../app/routes/users/users.php';