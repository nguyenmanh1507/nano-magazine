jQuery(document).ready(function($) {

	// Toggle Search Form
	var searchForm = $('.search-form'),
		btnTriggerForm = $('#trigger-search-form'),
		triggerIcon = btnTriggerForm.children('.fa-search');

	btnTriggerForm.on('click', function() {

		triggerIcon.toggleClass('fa-times');
		searchForm.toggleClass('fadeInDown');
		return false;

	});

	// Scroll to top
	var linkToTop = $('#scroll-to-top'),
		$window   = $(window);

	linkToTop.on('click', function() {

		$('html, body').animate({
			scrollTop: 0
		}, 400);

		return false;

	});

	$window.on('scroll', function() {
		if($window.scrollTop() > 400) {
			linkToTop.fadeIn();
		} else {
			linkToTop.fadeOut();
		}
	});

	// Mega menu
	var megaMenuWidth = $('.main-nav').closest('.row').width() + 60,
		windowWidth = $(window).width(),
		megaMenu = $('.mega-menu');

	megaMenu.css('position', 'static')
			.closest('.row')
			.css('position', 'relative');

	var maxHeight = 0;

	megaMenu.children('ul').find('> li > ul > li').each(function() {
		maxHeight = $(this).height();
		if(maxHeight > $(this).height()) {
			maxHeight = $(this).height();
		}
	});

	console.log(maxHeight);

	megaMenu.children('ul').css({
		'width': megaMenuWidth,
		'height': maxHeight
	}); 

});
