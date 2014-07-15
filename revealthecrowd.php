<? include ('wp-load.php'); ?>
<?php
	if(is_numeric($_GET["postid"])){
		//Gather comments for a specific page/post 
		$comments = get_comments(array(
			'post_id' => $_GET["postid"],
			'status' => 'approve' //Change this to the type of comments to be displayed
		));
	
		//Display the list of comments
		/*wp_list_comments(array(
			'per_page' => 10, //Allow comment pagination
			'reverse_top_level' => false //Show the latest comments at the top of the list
		), $comments);*/
		// print_r($comments);
		
	//		echo "<br /><br /><br />••••••••".$comments[0]['comment_content'];
		$commentsnum=count($comments);
	
		if($commentsnum>1) {
			$commentshead=$commentsnum.' comments';
		}
		else if($commentsnum>0) {
			$commentshead='1 comment';
		}
		else {
			$commentshead='';
		}
		$commentscript = '$(".post-header__comments-count").text("'.$commentshead.'");';
	
		if($commentsnum>0)
		{
			$roman_values=array("I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII");
			$commentslist='<h3 class="alpha">Comments</h3>';
			for ($i=$commentsnum-1; $i>-1;$i--) {
				$comment=$comments[$i];
				// print_r($comment);
				$commentcontent=apply_filters( 'comment_text', get_comment_text( $comment->comment_ID ));
				$commentcontent=str_replace( "\n", '<br />', $commentcontent);
				$commentcontent=str_replace( "\r", '', $commentcontent);
				$commentcontent=str_replace( "<p>", '', $commentcontent);
				$commentcontent=str_replace( "</p>", '', $commentcontent);
				$commentdate=get_comment_date('d.m.Y', $comment->comment_ID);
				$commentdate=substr($commentdate, 0, 2).'&thinsp;/&thinsp;'.$roman_values[(int) (substr($commentdate, 3, 2))].'&thinsp;/&thinsp;'.substr($commentdate, 6, 4);
				// print_r($commentcontent);
				if($comment->comment_author_url!="")
					$commentauthor='<a href="'.$comment->comment_author_url.'">'.$comment->comment_author.'</a>';
				else
					$commentauthor=$comment->comment_author;
				$commentslist=$commentslist.'<article class="comment';
				if($comment->comment_author=='Genn') $commentslist=$commentslist.' comment_admin';
				$commentslist=$commentslist.'">';
				$commentslist=$commentslist.'<div class="comment-i"><div class="comment__date"><nobr>'.$commentdate.'</nobr><br />'.get_comment_time('H:i').'</div><div class="comment__content"><div class="comment__author">'.$commentauthor.'</div><div class="comment__text text">'.$commentcontent.'</div></div></div></article>';
			} 
		}
	
		$commentscript=$commentscript."$('.post-comments-i').html('".$commentslist."');";
	
		print_r($commentscript);
	}
?>