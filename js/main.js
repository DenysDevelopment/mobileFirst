$(function(){
	$(".menu").on("click", function () {
	  $(".menu").toggleClass("active");
	});

	//slider
	$('.slider').slick({
	autoplay: 3000,
	dots: true,
	mobileFirst: true,
	responsive: [
	    {
	      breakpoint: 640,
	      settings: {
	        arrows: true,
	      }
	    },
	    {
	      breakpoint: 0,
	      settings: {
	        arrows: false,
	      }
	    }
	  ]
	})


	$('.quote__slider').slick({
		autoplay: 1,
		dots: true,
		arrows: false,
		mobileFirst: true,
	})
});