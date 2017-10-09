
	$('div#circle').bind('click', animationreact);
	
	function animationreact(){
	/*$('div#React').css('display','none');*/
	$('div#React').removeAttr('style');
	$('div#circle').unbind();
	$('div#circle.a').addClass('aa');
	$('div#circle.b').addClass('bb');
	$('div#circle.c').addClass('cc');



	function RemoveClass(){
	$('div#circle').css('transition','none');
	$('div#circle.a').css('transform','rotate(60deg)');
	$('div#circle.b').css('transform','rotate(120deg)');
	$('div#circle.c').css('transform','rotate(180deg)');  
	$('div#circle').removeClass('aa');	
	$('div#circle').removeClass('bb');	
	$('div#circle').removeClass('cc');
	setTimeout("$('div#circle').removeAttr('style');",700);
	
	}

	setTimeout(RemoveClass, 1200);
	
	function slideText(){
	$('div#React').css('display','block');
	$('div#React').animate({'margin-left': '450px'},430, function(){
		$('div#React').animate({'margin-left': '315px'},230, function(){
			$('div#React').animate({'margin-left': '335px'},130);	
		});
	});
	}
	setTimeout(slideText, 130);
	
	setTimeout("$('div#circle').bind('click', animationreact);", 1700);	
			
	}




