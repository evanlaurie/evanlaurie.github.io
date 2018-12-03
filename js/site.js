$(document).ready(function(){
 $("#top").sticky({topSpacing:0});
  
 $(window).on("touchmove scroll", function(){
	 var offset = $(this).scrollTop() + $('#top').outerHeight(true);
	 
	 var sections = $('.section')
	 	.filter(function(){ return (($(this).offset().top) < offset); })
	 	.map(function(){ return $(this).attr("id"); });
	 
	 if(sections.length){
	 	var current = sections[sections.length-1];
	 	var id = current.split('-');	 
	 
	 	$('#nav a').removeClass("active");
	 	$('#nav-' + id[1]).addClass("active");
	 }
	});
	
	$('#nav a').on("click", function(e){
		var id = $(this).attr("id").split('-');
		var offset = $('#section-' + id[1]).offset().top - ($('#top').outerHeight(true)) + 1;
		
		$('body,html').stop().animate({ 
		  scrollTop: offset
	  }, 400, function(){
	  	$('#nav a').removeClass("active");
			$('#nav-' + id[1]).addClass("active");
	  });
	  e.preventDefault();
	});
	
	$('#nav a:first').addClass("active");
});