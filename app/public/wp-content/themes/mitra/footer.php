<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Mitra
 */

?>
<?php
if ( ! is_page_template( 'elementor_header_footer' ) && ! is_page_template( 'templates/skeleton.php' ) ) { ?>
    </div><!-- .inner-wrapper -->
    </div><!-- .container -->
	<?php
} ?>
</div><!-- #content -->

<?php
if ( is_active_sidebar( 'footer-1' ) ||
     is_active_sidebar( 'footer-2' ) ||
     is_active_sidebar( 'footer-3' ) ||
     is_active_sidebar( 'footer-4' ) ) :
	?>
    <div id="footer-widget-area">
        <div class="container">
            <div class="inner-wrapper">
				<?php
				for ( $i = 1; $i <= 4; $i ++ ) {
					if ( is_active_sidebar( 'footer-' . $i ) ) {
						?>
                        <aside class="footer-column footer-column-4">
							<?php dynamic_sidebar( 'footer-' . $i ); ?>
                        </aside>
						<?php
					}
				}
				?>
            </div>
        </div><!-- .container -->
    </div><!-- #footer-widget-area -->

<?php endif; ?>

<footer id="colophon" class="site-footer">
    <div class="container">
        <div class="inner-wrapper">

			<?php

			$copyright_text = mitra_get_option( 'copyright_text' );

			if ( ! empty( $copyright_text ) ) : ?>

                <div class="site-info site-copyright">

					<?php

					$copyright = mitra_apply_theme_shortcode( wp_kses_post( $copyright_text ) );

					echo do_shortcode( $copyright );

					?>
					<?php
					/* translators: %s: Theme author */
					$author_uri = wp_get_theme()->get( 'AuthorURI' );
					printf( esc_html__( 'Mitra by %s', 'mitra' ), '<a href="' . $author_uri . '">iThemer</a>' );
					?>

                </div><!-- .copyright -->

			<?php

			endif;

			$enable_social_icons = mitra_get_option( 'enable_social_icons' );

			if ( ( 1 == $enable_social_icons ) && has_nav_menu( 'social' ) ) { ?>

                <div class="footer-social-links">
                    <div class="menu-social-menu-container">
						<?php
						wp_nav_menu( array(
							'theme_location' => 'social',
							'link_before'    => '<span class="screen-reader-text">',
							'link_after'     => '</span>',
						) ); ?>
                    </div>
                </div>
				<?php
			} ?>
        </div><!-- .inner-wrapper -->
    </div><!-- .container -->
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
