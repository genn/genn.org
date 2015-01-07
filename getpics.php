<? include ('../wp-load.php'); ?>
<? 
//	require_once 'markdownify.php';
//	$md = new Markdownify;

	$lang = qtrans_getLanguage();
	query_posts( 'posts_per_page=300' );
	while ( have_posts() ) {
		the_post();

		$html = $post->post_content;

		$doc = new DOMDocument();
		@$doc->loadHTML($html);

		$tags = $doc->getElementsByTagName('img');

		foreach ($tags as $tag) {
		       echo $tag->getAttribute('src');
		}



?>