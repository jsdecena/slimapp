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
              ->addColumn('date_add', 'datetime')
              ->addColumn('date_upd', 'datetime')
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
