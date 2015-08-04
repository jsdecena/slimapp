<?php

use Illuminate\Database\Eloquent\Model as Model;

class Posts extends Model {

    protected $table = 'posts';

    protected $fillable = [];

    public function scopePosts($query)
    {
        return $query->where('post_type', 1);
    }
}

//GET ALL THE USERS
$app->get('/api/v1/posts', function () use ($app) {

    $response = $app->response();
    $response->header('Access-Control-Allow-Origin', '*');

    $posts      = Posts::posts()->get();

    $results = array();
    for ($i=0; $i < sizeof($posts); $i++) {
        
        $data['id']         = $posts[$i]['id']; 
        $data['title']      = $posts[$i]['title'];
        $data['slug']       = $posts[$i]['slug'];
        $data['content']    = $posts[$i]['content'];
        $data['created_at'] = $posts[$i]['created_at'];

        $author             = Users::find($posts[$i]['author_id']);
        $data['author']     = $author->firstname;

        $results[]          = $data;
    }

    $response->write(json_encode($results));
});

//GET THE PARTICULAR POST
$app->get('/api/v1/posts/:slug', function ($slug) use ($app) {

    $response   = $app->response();
    $response->header('Access-Control-Allow-Origin', '*');    

    $posts      = Posts::where('slug', $slug)->get();

    $results = array();
    for ($i=0; $i < sizeof($posts); $i++) {
        
        $data['id']         = $posts[$i]['id']; 
        $data['title']      = $posts[$i]['title'];
        $data['slug']       = $posts[$i]['slug'];
        $data['content']    = $posts[$i]['content'];
        $data['created_at'] = $posts[$i]['created_at'];

        $author             = Users::find($posts[$i]['author_id']);
        $data['author']     = $author->firstname;
    }

    $results[]          = $data;

    $response->write(json_encode($results));
});

$app->post('/api/v1/posts', function () use ($app) {

    $posts              = new Posts;
    $posts->title       = $app->request()->post('title');
    $posts->slug        = str_replace(' ', '-', $app->request()->post('slug'));
    $posts->content     = $app->request()->post('content');
    $posts->author_id   = $app->request()->post('post_type');
    $posts->author_id   = $app->request()->post('author_id');
    $posts->save();

    die(json_encode($posts));
});

$app->put('/api/v1/posts/:id', function ($id) use ($app) {

    $posts              = Posts::find($id);
    $posts->title       = $app->request()->post('title');
    $posts->slug        = str_replace(' ', '-', $app->request()->post('slug'));
    $posts->content     = $app->request()->post('content');
    $posts->author_id   = $app->request()->post('author_id');
    $posts->save();

    die(json_encode($posts));
});

$app->delete('/api/v1/posts/:id', function ($id) use ($app) {

    $posts = Posts::find($id);
    $posts->delete();

    die(json_encode($posts));
});