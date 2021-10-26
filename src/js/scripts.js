$(document).ready(function(){

//	Table of Content
//
//	- Hamburger Menu and Of-Canvas Menu
//	- Add BG to nav on scrolling
//
//



//////////////////////////////////////////////////
// Hamburger Menu
//////////////////////////////////////////////////

	var navToggle = document.querySelector(".site-header__hamburger");
	var menuToggle = document.querySelector(".canvas-menu");

	navToggle.addEventListener('click', function() {

		navToggle.classList.toggle("is-active");
		menuToggle.classList.toggle("is-active");


	}, false);

//////////////////////////////////////////////////
// Search
//////////////////////////////////////////////////

	// var communitySearch = document.querySelector(".community__search");
	// var communitySearchToggle = document.querySelector(".community__search-icon-wrap");

	// communitySearchToggle.addEventListener('click', function() {

	// 	communitySearch.classList.toggle("is-active");

	// }, false);


//////////////////////////////////////////////////
// Nav Scroll Inverse Heading
//////////////////////////////////////////////////
	
	var siteHeaderHeight = $('.site-header--inverse').height();
	var siteHeaderOuter = $('.site-header--inverse').offset() + siteHeaderHeight;


	$(window).on('scroll',function(){

	    var stop = Math.round($(window).scrollTop());

	    if (stop || siteHeaderHeight > siteHeaderOuter) {
	        $('.site-header__inner--inverse').addClass('is-active');
	        $('.glass').addClass('is-active');
	    } else {
	        $('.site-header__inner--inverse').removeClass('is-active');
	        $('.glass').removeClass('is-active');
	    }

	});




	// $('.search-input').material_select();


 
}); //ready

 



      