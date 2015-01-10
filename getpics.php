<? include ('../wp-load.php'); ?>
<? 
//	require_once 'markdownify.php';
//	$md = new Markdownify;


	$lang = qtrans_getLanguage();
	echo $lang;
	query_posts( 'posts_per_page=300' );
	while ( have_posts() ) {
		the_post();

		echo "\n\r\n\r".$post->post_name."\n\r";
		$dirname=$_SERVER['DOCUMENT_ROOT']."/export/o_O/".$post->post_name;

		print_r(mkdir($dirname,0777));
		

		$html = $post->post_content;

		$doc = new DOMDocument();
		@$doc->loadHTML($html);

		$tags = $doc->getElementsByTagName('img');

		foreach ($tags as $tag) {
				$imgsrc = $tag->getAttribute('src');
				echo basename($imgsrc." - ");
				$newfile = file_get_contents($imgsrc);

				$filename = $dirname."/".basename($imgsrc);
				$handle = fopen($filename, "w");
				print_r($handle);
				echo "File: ".$filename." ~ Result: ".fwrite($handle, $newfile)."\r\n";
				print_r(fclose($handle));
		}
	}



?>