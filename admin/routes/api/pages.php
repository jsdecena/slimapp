<?php

use Illuminate\Database\Eloquent\Model as Model;

class Pages extends Model {

    protected $table = 'posts';

    protected $fillable = []; 
}

//GET ALL THE USERS
$app->get('/api/v1/pages', function () use ($app) {

    $response   = $app->response();
    $response->header('Access-Control-Allow-Origin', '*');

    $pages      = Posts::where('post_type', 2)->get();
    $response->write(json_encode($pages));
});

//GET THE PARTICULAR USER
$app->get('/api/v1/pages/:id', function ($id) use ($app) {

    $pages = Posts::find($id);

    die(json_encode($pages));
});

$app->post('/api/v1/pages', function () use ($app) {

    $pages              = new Posts;
    $pages->title       = $app->request()->post('title');
    $pages->slug        = str_replace(' ', '-', $app->request()->post('slug'));
    $pages->content     = $app->request()->post('content');
    $pages->author_id   = $app->request()->post('author_id');
    $pages->save();

    die(json_encode($pages));
});

$app->put('/api/v1/pages/:id', function ($id) use ($app) {

    $pages              = Posts::find($id);
    $pages->title       = $app->request()->post('title');
    $pages->slug        = str_replace(' ', '-', $app->request()->post('slug'));
    $pages->content     = $app->request()->post('content');
    $pages->author_id   = $app->request()->post('author_id');
    $pages->save();

    die(json_encode($pages));
});

$app->delete('/api/v1/pages/:id', function ($id) use ($app) {

    $pages = Posts::find($id);
    $pages->delete();

    die(json_encode($pages));
});