<?php

//USER ROUTES
$app->get('/users', function () use ($app) {

    $app->render('admin/users.html');
});