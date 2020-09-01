<?php

add_theme_support( 'post-thumbnails' );
add_image_size( 'featured-blog-large', 1400, 300, true );

function require_menu_api_plugin_notice() {
    // global $pagenow;
    $activePlugins = get_option( 'active_plugins', array() );

    if ( current_user_can( 'activate_plugins' ) && !in_array("wp-api-menus/wp-api-menus.php", $activePlugins)) {
        echo '<div class="notice notice-warning is-dismissible"><p>This theme requires <a href="/wp-admin/plugin-install.php?tab=plugin-information&plugin=wp-api-menus"><strong>WP REST API Menus</strong></a></p></div>';
    }
}
add_action('admin_notices', 'require_menu_api_plugin_notice');

/* Enable nav menus/widgets for theme */

function register_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' ),
      'footer-menu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'register_menus' );

function themename_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Blog Sidebar', 'My Website' ),
        'id'            => 'blog',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );
 
    register_sidebar( array(
        'name'          => __( 'Comic Sidebar', 'My Website' ),
        'id'            => 'comic',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'themename_widgets_init' );

 /*
    rewrite for permalink so pages include page in url for routing
 */

function wp_page_generate_rewrite_rules( $wp_rewrite ) {
  $new_rules = array(
    'page/([^/]+)/?$' => 'index.php?post_type=page&name=$matches[1]',
    'page/[^/]+/attachment/([^/]+)/?$' => 'index.php?post_type=page&attachment=$matches[1]',
    'page/[^/]+/attachment/([^/]+)/trackback/?$' => 'index.php?post_type=page&attachment=$matches[1]&tb=1',
    'page/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=page&attachment=$matches[1]&feed=$matches[2]',
    'page/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=page&attachment=$matches[1]&feed=$matches[2]',
    'page/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?post_type=page&attachment=$matches[1]&cpage=$matches[2]',		
    'page/[^/]+/attachment/([^/]+)/embed/?$' => 'index.php?post_type=page&attachment=$matches[1]&embed=true',
    'page/[^/]+/embed/([^/]+)/?$' => 'index.php?post_type=page&attachment=$matches[1]&embed=true',
    'page/([^/]+)/embed/?$' => 'index.php?post_type=page&name=$matches[1]&embed=true',
    'page/[^/]+/([^/]+)/embed/?$' => 'index.php?post_type=page&attachment=$matches[1]&embed=true',
    'page/([^/]+)/trackback/?$' => 'index.php?post_type=page&name=$matches[1]&tb=1',
    'page/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=page&name=$matches[1]&feed=$matches[2]',
    'page/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=page&name=$matches[1]&feed=$matches[2]',
    'page/[^/]+/page/?([0-9]{1,})/?$' => 'index.php?post_type=page&name=$matches[1]&paged=$matches[2]',
    'page/([^/]+)/page/?([0-9]{1,})/?$' => 'index.php?post_type=page&name=$matches[1]&paged=$matches[2]',
    'page/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?post_type=page&name=$matches[1]&cpage=$matches[2]',
    'page/([^/]+)(/[0-9]+)?/?$' => 'index.php?post_type=page&name=$matches[1]&page=$matches[2]',
    'page/[^/]+/([^/]+)/?$' => 'index.php?post_type=page&attachment=$matches[1]',
    'page/[^/]+/([^/]+)/trackback/?$' => 'index.php?post_type=page&attachment=$matches[1]&tb=1',
    'page/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=page&attachment=$matches[1]&feed=$matches[2]',
    'page/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=page&attachment=$matches[1]&feed=$matches[2]',
    'page/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?post_type=page&attachment=$matches[1]&cpage=$matches[2]',
  );
  $wp_rewrite->rules = $new_rules + $wp_rewrite->rules;
}
add_action( 'generate_rewrite_rules', 'wp_page_generate_rewrite_rules' );

function wp_page_update_page_link( $page_link, $id = 0 ) {
  $post = get_post( $id );
  if( is_object( $post ) && $post->post_type == 'page' ) {
    return home_url( '/page/' . $post->post_name );
  }
  return $page_link;
}
add_filter( 'page_link', 'wp_page_update_page_link', 1, 3 );

 /*
    rewrite for permalink so posts include posts in url for routing
 */

function wp_post_generate_rewrite_rules( $wp_rewrite ) {
  $new_rules = array(
    '(([^/]+/)*post)/page/?([0-9]{1,})/?$' => 'index.php?pagename=$matches[1]&paged=$matches[3]',
    'post/([^/]+)/?$' => 'index.php?post_type=post&name=$matches[1]',
    'post/[^/]+/attachment/([^/]+)/?$' => 'index.php?post_type=post&attachment=$matches[1]',
    'post/[^/]+/attachment/([^/]+)/trackback/?$' => 'index.php?post_type=post&attachment=$matches[1]&tb=1',
    'post/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=post&attachment=$matches[1]&feed=$matches[2]',
    'post/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=post&attachment=$matches[1]&feed=$matches[2]',
    'post/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?post_type=post&attachment=$matches[1]&cpage=$matches[2]',		
    'post/[^/]+/attachment/([^/]+)/embed/?$' => 'index.php?post_type=post&attachment=$matches[1]&embed=true',
    'post/[^/]+/embed/([^/]+)/?$' => 'index.php?post_type=post&attachment=$matches[1]&embed=true',
    'post/([^/]+)/embed/?$' => 'index.php?post_type=post&name=$matches[1]&embed=true',
    'post/[^/]+/([^/]+)/embed/?$' => 'index.php?post_type=post&attachment=$matches[1]&embed=true',
    'post/([^/]+)/trackback/?$' => 'index.php?post_type=post&name=$matches[1]&tb=1',
    'post/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=post&name=$matches[1]&feed=$matches[2]',
    'post/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=post&name=$matches[1]&feed=$matches[2]',
    'post/page/([0-9]{1,})/?$' => 'index.php?post_type=post&paged=$matches[1]',
    'post/[^/]+/page/?([0-9]{1,})/?$' => 'index.php?post_type=post&name=$matches[1]&paged=$matches[2]',
    'post/([^/]+)/page/?([0-9]{1,})/?$' => 'index.php?post_type=post&name=$matches[1]&paged=$matches[2]',
    'post/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?post_type=post&name=$matches[1]&cpage=$matches[2]',
    'post/([^/]+)(/[0-9]+)?/?$' => 'index.php?post_type=post&name=$matches[1]&page=$matches[2]',
    'post/[^/]+/([^/]+)/?$' => 'index.php?post_type=post&attachment=$matches[1]',
    'post/[^/]+/([^/]+)/trackback/?$' => 'index.php?post_type=post&attachment=$matches[1]&tb=1',
    'post/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=post&attachment=$matches[1]&feed=$matches[2]',
    'post/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?post_type=post&attachment=$matches[1]&feed=$matches[2]',
    'post/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?post_type=post&attachment=$matches[1]&cpage=$matches[2]',
  );
  $wp_rewrite->rules = $new_rules + $wp_rewrite->rules;
}
add_action( 'generate_rewrite_rules', 'wp_post_generate_rewrite_rules' );

function wp_post_update_post_link( $post_link, $id = 0 ) {
  $post = get_post( $id );
  if( is_object( $post ) && $post->post_type == 'post' ) {
    return home_url( '/post/' . $post->post_name );
  }
  return $post_link;
}
add_filter( 'post_link', 'wp_post_update_post_link', 1, 3 );

?>