<? include ('../wp-load.php'); ?>
<? 
//	require_once 'markdownify.php';
//	$md = new Markdownify;

	$lang = qtrans_getLanguage();
	query_posts( 'posts_per_page=300' );
	while ( have_posts() ) {
		the_post();

		$date=strstr($post->post_date,' ', true);

		$mainpicturehtml = strstr($post->post_content,"\n", true);
		preg_match('/<img(.*?) src=\"(.*?)\"/', $mainpicturehtml, $mainpicture);
		$mainpicture=array_pop(explode('/', $mainpicture[2]));
		$newfile="---\r\nlayout: default\r\ncategory: mega\r\nlang: ".$lang."\r\n";
		$newfile.="title: ".$post->post_title."\r\nslug: ".$post->post_name."\r\n";

		if($mainpicture) {
			$newfile.="mainpicture: ".$mainpicture."\r\n";
		}

		$posttags = get_the_tags();
		if ($posttags) {
		 $newfile.="tags: ";
		  foreach($posttags as $tag) {
		   	 $newfile.=$tag->name . ' '; 
			}
		};
		$newfile.="\r\npostid: ".$post->ID."\r\n---\r\n";

		if ($mainpicture) {
			$content=strstr($post->post_content,"\n");
		} else {
			$content=$post->post_content;
		} 

		
//		$content=preg_replace('/<img(.*?) src=\"http:\/\/mega.genn.org\/=\^_\^=\/uploads\/\d{4}\/\d{2}\/(.+?)\"(.*?)>(\s*)<p class=\"imgdesc\">(.*?)<\/p>/i', "\r\n\r\n{% figure /o_O/".$post->post_name."/$2~$5 %}\r\n\r\n", $content);
//		$content=preg_replace('/<img(.*?) src=\"http:\/\/mega.genn.org\/=\^_\^=\/uploads\/\d{4}\/\d{2}\/(.+?)\"(.*?)>/i', "\r\n\r\n{% figure /o_O/".$post->post_name."/$2 %}\r\n\r\n", $content);
		$content=preg_replace('/http:\/\/mega.genn.org\/=\^_\^=\/uploads\/\d{4}\/\d{2}\/(.*?)/i', "/o_O/".$post->post_name."/$2", $content);
		$content=preg_replace('/<img(.*?) src=\"(.+?)\"(.+?)>(\s*?)<p class=\"imgdesc\">(.*?)<\/p>/i', "\r\n\r\n{% figure $2~$5 %}\r\n\r\n", $content);
		$content=preg_replace('/<img(.*?) src=\"(.+?)\"(.+?)>/i', "\r\n\r\n{% figure $2 %}\r\n\r\n", $content);
		$content=preg_replace('/<p (.*?)class=\"imgdesc\"(.*?)>(.*?)<\/p>/s', "\r\n$1\r\n{% figureinfo $3 %}\r\n\r\n", $content);
		$content=preg_replace('/<h3>(.*?)<\/h3>/', '<h2>$1</h2>', $content);
		$content=preg_replace('/<h2>(.*?)<\/h2>/', "\r\n\r\n## $1\r\n", $content);
//		$content=preg_replace('/<(.*?)( class=.*)>/', '<$1>', $content);
		$content=preg_replace('/<div(.*?)class=\"sidenote\"(.*?)>(.*?)<\/div>/', "\r\n\r\n{% sidenote $1 %}\r\n\r\n", $content);
		$content=preg_replace('/<a(.*?)href=\"(.*?)"(.*?)>(.*?)<\/a>/s', '<a href="$2">$4</a>', $content);
		$content=preg_replace('/\(http:\/\/mega.genn.org\/en\/\d{4}\/(.*?)\)/s', '(/mega/$1)', $content);
		$content=preg_replace('/\(http:\/\/mega.genn.org\/d{4}\/(.*?)\)/s', '(/mega/ru/$1)', $content);
		$content=preg_replace('/\(http:\/\/mega.genn.org\/ru\/d{4}\/(.*?)\)/s', '(/mega/ru/$1)', $content);
		$content=preg_replace('/\(http:\/\/mega.genn.org\/(.*?)\)/s', '(/mega/$1)', $content);
		$content=preg_replace('/\(http:\/\/mega.genn.org\/en\/(.*?)\)/s', '(/mega/$1)', $content);
		$content=preg_replace('/\]\s\(/', ']  (', $content);
		//$content=preg_replace('/<(.+?)>(.*?)/s', "\r\n\r\n<$1>$2", $content);


		// preg_replace('/\[(.*?)(\&)(?!amp;)(.*?)\]/s', '[$1&amp;$3]', $content); -- fix this ampersand stuff
//		$content=preg_replace('/<a href=\"http:\/\/mega.genn.org\/\d{4}\/(.*?)\/\">/', '<a href="/mega/$1/">', $content);
//		$content=preg_replace('/<p>/s', '', $content);
//		$content=preg_replace('/<\/p>/s', "\r\n", $content);

//		$content=$md->parseString($content); — nothing works with this shit

//		$content=preg_replace('/({% (.*?) %})/s', "\r\n\r\n$1\r\n\r\n", $content);
//		$content=preg_replace('/{%.*(\s+).*%}/', " ", $content);
		//$content=preg_replace('/(\s{3,100}/', "", $content);

		$content=preg_replace('/\*\*\*/', '✖✖✖', $content);

		$newfile.=$content;

//		echo $newfile."<br /><br /><br />";

/*		Save file */
		$filename=$_SERVER['DOCUMENT_ROOT']."/export/".$lang."/".$date."-".$post->post_name.".md";

		$handle = fopen($filename, "w");
//		print_r(error_get_last());
		echo "File: ".$filename." ~ Result: ".fwrite($handle, $newfile)."<br />\r\n";
		fclose($handle);

//		print_r($content);

//		echo "File: ".$filename." ??
	}
?>