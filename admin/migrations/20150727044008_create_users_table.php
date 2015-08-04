<?php

use Phinx\Migration\AbstractMigration;

class CreateUsersTable extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     */
    public function change()
    {
        // create the table
        $table = $this->table('users');
        $table->addColumn('firstname', 'string', array('limit' => 30))
              ->addColumn('lastname', 'string', array('limit' => 30))
              ->addColumn('created_at', 'timestamp')
              ->addColumn('updated_at', 'timestamp')
              ->create();
    }

    public function up()
    {

    }

    public function down()
    {
        $this->dropTable('users');      
    }
}
