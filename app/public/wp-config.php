<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY','22t7YY+DxBzkldGVBzqdnWDKpeFpywqg7+GGjiYwgBTa9v+D0zKP7sS2aH4k9r5k');
define('SECURE_AUTH_KEY','HaaF5fsR0CLiDUaWp6QPm4o50I6/TmLN/W98tzyeDvw14HqFwGvRyO8XQBD081Ok');
define('LOGGED_IN_KEY','q3nf7UkMpVKzlgh2SDmZfw2YNLza3sbOnytQQpJoQnACpTLt30+oZfLGLe2Jmjr1');
define('NONCE_KEY','hUgSdvnk8vOl/OLWjCmXitPYTU+Db0PLh1aAtCOXxJUoMrbvuCkQvY9o1Zw1CMnn');
define('AUTH_SALT','3db7m4tXmN1TkZPsnXsydpPxVTzu3XYfEGsG/EJXD6bSsZukYHFVrdWecNVTF2ca');
define('SECURE_AUTH_SALT','lSTizKlj1rijMkEmyzfUbbuFUUoIOcgbi/Epl0p2TvHOqWF1kdBMozO6NX75qwhZ');
define('LOGGED_IN_SALT','wQeKg3SNdfHSt/J2yeREr59+6LB3Pqg+LvfcyPHr6RbeDOSL9mdwnW3tToMvwuXD');
define('NONCE_SALT','3Z4YHsokiNp0ZLI8PWkfRieQ7WZM3JC0ZJRUXUtyJmYnvMVIne+IyYKi/lwpXaA8');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'thebrokaido';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/** FTP Data added by MB on 2023/01/11 */
define( 'FTP_USER', 'FTP Wordpress' );
define( 'FTP_PASS', 'jaxsjaxs' );
define( 'FTP_HOST', '127.0.0.1' );   
define( 'FTP_SSL', true );
