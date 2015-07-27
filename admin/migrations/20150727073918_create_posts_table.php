<?php

use Phinx\Migration\AbstractMigration;

class CreatePostsTable extends AbstractMigration
{
    public function up()
    {
        // create the table
        $table = $this->table('posts');
        $table->addColumn('title', 'string')
              ->addColumn('slug', 'string')
              ->addColumn('content', 'text')
              ->addColumn('author_id', 'integer')
              ->addColumn('post_type', 'integer')
              ->addColumn('created_at', 'timestamp')
              ->addColumn('updated_at', 'timestamp')
              ->addForeignKey('author_id', 'users', 'id')
              ->create();
    }

    public function down()
    {
        $table = $this->table('posts');
        $table->dropForeignKey('author_id');

        $this->dropTable('posts');      
    }    
}
