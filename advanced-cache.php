<?php
/* PageSpeed Ninja Caching */
defined('ABSPATH') || die();
define('PAGESPEEDNINJA_CACHE_DIR', '/var/www/klimo266/data/www/krinestudio.com/wp-content/plugins/psn-pagespeed-ninja/cache');
define('PAGESPEEDNINJA_CACHE_PLUGIN', '/var/www/klimo266/data/www/krinestudio.com/wp-content/plugins/psn-pagespeed-ninja');
define('PAGESPEEDNINJA_CACHE_RESSDIR', '/var/www/klimo266/data/www/krinestudio.com/wp-content/plugins/psn-pagespeed-ninja/ress');
define('PAGESPEEDNINJA_CACHE_DEVICEDEPENDENT', false);
define('PAGESPEEDNINJA_CACHE_TTL', 900);
define('PAGESPEEDNINJA_CACHE_GZIP', 1);
include '/var/www/klimo266/data/www/krinestudio.com/wp-content/plugins/psn-pagespeed-ninja/public/advanced-cache.php';
