<?php

use Illuminate\Database\Eloquent\Model as Model;

class Users extends Model {

    protected $table = 'users';

    protected $fillable = ['firstname', 'created_at'];
}

//GET ALL THE USERS
$app->get('/api/v1/users', function () use ($app) {

    $users = Users::all();

    die(json_encode($users));
});

//GET THE PARTICULAR USER
$app->get('/api/v1/users/:id', function ($id) use ($app) {

    $user = Users::find($id);

    die(json_encode($user));
});

$app->post('/api/v1/users', function () use ($app) {

    $user = new Users;
    $user->firstname = $app->request()->post('firstname');
    $user->save();

    die(json_encode($user));
});

$app->put('/api/v1/users/:id', function ($id) use ($app) {

    $user = Users::find($id);
    $user->firstname = $app->request()->post('firstname');
    $user->save();

    die(json_encode($user));
});

$app->delete('/api/v1/users/:id', function ($id) use ($app) {

    $user = Users::find($id);
    $user->delete();

    die(json_encode($user));
});