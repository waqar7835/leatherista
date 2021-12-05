# Leatherista

<img alt="Drupal Logo" src="/logo.png" height="60px">

This is Leatherista pur project for leather products using git and composer

also create

## Installation

- Please run commands written blow to run this project locally.

```
  composer install
```

- Create a file "settings.local.php" at "leatherista/web/sites/default"
  and add this code

```
  $databases['default']['default'] = array (
    'database' => 'drupal',
    'username' => 'drupal',
    'password' => 'drupal',
    'prefix' => '',
    'host' => 'localhost',
    'port' => '3306',
    'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
    'driver' => 'mysql',
  );
```

- Change Database, Username and password in this code with your local one .
