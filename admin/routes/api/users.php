<?php

use Illuminate\Database\Eloquent\Model as Model;

class Users extends Model {

    protected $table = 'users';

    protected $fillable = ['firstname', 'lastname', 'email', 'password', 'created_at'];
}

//GET ALL THE USERS
$app->get('/api/v1/users', function () use ($app) {

    $response = $app->response();
    $response->header('Access-Control-Allow-Origin', '*');

    $users = Users::all();

    $response->write(json_encode($users));
});

//GET THE PARTICULAR USER
$app->get('/api/v1/users/:id', function ($id) use ($app) {

    $user = Users::find($id);

    die(json_encode($user));
});

$app->post('/api/v1/users', function () use ($app) {

    $response = $app->response();
    $response->header('Access-Control-Allow-Origin', '*');

    $user = new Users;
    $user->firstname    = $app->request()->post('firstname');
    $user->lastname     = $app->request()->post('lastname');
    $user->email        = $app->request()->post('email');
    $user->password     = sha1($app->request()->post('password'));
    $user->save();

    $response->write(json_encode($user));

});

$app->put('/api/v1/users/:id', function ($id) use ($app) {

    $user = Users::find($id);
    $user->firstname    = $app->request()->post('firstname');
    $user->lastname     = $app->request()->post('lastname');
    $user->email        = $app->request()->post('email');
    $user->password     = sha1($app->request()->post('password'));
    $user->save();

    die(json_encode($user));
});

$app->delete('/api/v1/users/:id', function ($id) use ($app) {

    $user = Users::find($id);
    $user->delete();

    die(json_encode($user));
});