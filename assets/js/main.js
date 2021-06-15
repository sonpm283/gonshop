$( document ).ready(function() {
	const navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>" ];
    $("#hero-slider").owlCarousel({
    	items: 1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: true,
        navText: navText,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {

            }
        }
    })

     $("#feedback-slider").owlCarousel({
    	items: 1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: true,
        navText: navText,
        autoplayHoverPause: true
    })

    $("#tab-slide").owlCarousel({
    	items: 3,
        dots: false,
        loop: true ,
        nav: true,
        autoplay: false,
        navText: navText,
        autoplayHoverPause: true
    })


    $("#news-slider").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: false,
        navText: navText,
        autoplayHoverPause: true
    })

    // tab product
 	var tabs = $(".tab")
 	var panes = $(".pane")
 	tabs.click(function(){
 		tabs.removeClass("active")
 		$(this).addClass("active")
 		panes.hide()
 		var pane = $(this).attr("data-tab")
 		$(pane).fadeIn(300)
 	})
 	$("#tab-slide .tab-slide-item h3:first").click()

    var menuBtn = $(".menu-btn") 
    var menuMb  = $(".menu-mb")

    menuBtn.click(function() {
        menuMb.toggleClass("active");
    })

    $(".btn-close").click(function() {
         menuMb.removeClass("active");
    }) 

    $(window).click
});