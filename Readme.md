#SlimPHP w AngularJS

###How to use

####Set up the admin - Slim PHP

- Go to /admin and download [composer](https://getcomposer.org/download/)
- Run `php composer.phar install`
- Set your db credentials in /admin/phinx.yml
- Run `php vendor/bin/phinx migrate`
- Populate your database (Todo: Seeder)
- Go to /admin/public and run `php -S 0.0.0.0:8001` and go to [localhost](http://localhost:8001/api/v1/users)

####Set up the front end - Angular

- Go to `/front`
- Install [NodeJS](https://nodejs.org/download/) and [Bower](http://bower.io/)
- In Terminal run `npm install`
- Run again `npm start`
- Check your website in [http://localhost:8000](http://localhost:8000/angular/app)