<?php

// Define routes
$app->get('/api/v1/users', function () use ($app) {

    die('1');
});

$app->get('/users', function () use ($app) {

    // Render index view
    $app->render('admin/posts.html');
});

$app->get('/', function () use ($app) {

    // Render index view
    $app->render('index.html');
});