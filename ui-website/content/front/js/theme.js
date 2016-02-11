'use strict';

// Sticky Header
// ---------------------------------------------------------------------------------------

var $ = jQuery.noConflict();

$(window).load(function () {
    // Preloder
    // --------------------------------------------------
    $('#loading').delay(1000).fadeOut(200);

    // ISOTOPE
    // --------------------------------------------------
    if ($().isotope) {
        var $container = $('.isotope'); // cache container
        $container.isotope({
            itemSelector: '.isotope-item'
        });
        $('.filtrable a').on("click", function () {
            var selector = $(this).attr('data-filter');
            $('.filtrable li').removeClass('current');
            $(this).parent().addClass('current');
            $container.isotope({filter: selector});
            return false;
        });
        $container.isotope('layout'); // layout/reLayout
    }
});

$(document).ready(function () {

    // Smooth Page Scroll
    // ---------------------------------------------------------------------------------------   
    $(".scroll-on-form").on("click", function () {
        var header_height = $('.header-wrap').outerHeight(true);
        $("html, body").animate({scrollTop: jQuery(".mobile-view-form").offset().top - header_height}, 1e3);
    });

    $('.primary-navbar a[href^=#]').on("click", function (event) {
        event.preventDefault();
        if ((jQuery('body > main').hasClass('non-sticky'))) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top}, 1000);
        }
        else {
            $('.primary-navbar li').removeClass('active');
            $(this).addClass('active');
            var header_height = $('.header-wrap').outerHeight(true);
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - header_height}, 1000);
        }

    });

    // Dropdown Menu Hover
    // ---------------------------------------------------------------------------------------
    if (window.matchMedia('(min-width: 992px)').matches) {
        jQuery(".primary-navbar .dropdown").hover(
                function () {
                    jQuery(this).children('.dropdown-menu').hide();
                    jQuery(this).children('.dropdown-menu').slideDown('300');
                },
                function () {
                    jQuery(this).children('.dropdown-menu').slideUp('1000');
                });
    }


    $(window).scroll(function () {

        // Sticky Header Start
        // ---------------------------------------------------------------------------------------
        if (!(jQuery('body > main').hasClass('non-sticky'))) {
            if ($(window).scrollTop() > 50) {
                $('body').addClass('sticky-header');
            }
            else {
                $('body').removeClass('sticky-header');
            }
        }
        else {
            console.log('sticky');
        }
        // Sticky Header Ends
        // ---------------------------------------------------------------------------------------

        if ($(this).scrollTop() > 100) {
            $('.to-top').css({bottom: '55px'});
        } else {
            $('.to-top').css({bottom: '-150px'});
        }

        if ($(this).scrollTop() > 100) {
            $('.header-variation-3 .header-wrap').css({bottom: '0px'});
        } else {
            $('.header-variation-3 .header-wrap').css({bottom: '-150px'});
        }


    });

    // Scroll To Top Start
    // ---------------------------------------------------------------------------------------

    $('.to-top').on("click", function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


    // Slider Text Animation
    // ---------------------------------------------------------------------------------------
    $(".caption-text").addClass("animated fadeInUp");
    $("#main-slider .owl-prev, #main-slider .owl-next, .slide-img").addClass("animated fadeInDown");


    // Video Popup
    // ---------------------------------------------------------------------------------------
    var $doc = $(document);
    $doc.on('hidden.bs.modal', '#video-popup', function () {
        $(this).find('iframe').attr('src', '');
    });
    $doc.on('show.bs.modal', '#video-popup', function (e) {
        var $a = $(e.relatedTarget);
        var src = $a.data('iframe');
        if (src) {
            $(this).find('iframe').attr('src', src);
        }
    });
    // Video Popup End
    // ---------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------
    // Main Slider Start


    $("#main-slider").owlCarousel({
        pagination: false,
        navigation: true,
        autoPlay: false,
        singleItem: true,
        navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]

    });
    //Main Slider End
    // ---------------------------------------------------------------------------------------   

    // ---------------------------------------------------------------------------------------
    // Our Customers Slider Start
    $(".brand-slider").owlCarousel({
        pagination: false,
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [1024, 5],
        itemsTablet: [991, 3],
        itemsTabletSmall: [600, 2],
        itemsMobile: [480, 1]
    });
    //Our Customers Slider End
    // ---------------------------------------------------------------------------------------


    // ---------------------------------------------------------------------------------------
    // Stratup Ready For Devices Start
    $(".startup-ready-slider").owlCarousel({
        pagination: true,
        navigation: false,
        autoPlay: true,
        singleItem: true
    });
    //Stratup Ready For Devices End
    // ---------------------------------------------------------------------------------------   

    // ---------------------------------------------------------------------------------------
    // Testimonials Slider Start
    jQuery(".testimonials-slider").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 1,
        itemsDesktop: [1199, 1],
        itemsTablet: [1024, 1],
        itemsMobile: [768, 1]
    });
    jQuery("#testimonials-slider .next").on("click", function () {
        jQuery(".testimonials-slider").trigger('owl.next');
    });
    jQuery("#testimonials-slider .prev").on("click", function () {
        jQuery(".testimonials-slider").trigger('owl.prev');
    });
    // Testimonials Slider End
    // ---------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------
    // Our Costumers Slider Start
    jQuery(".our-costumers-slider").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 3,
        itemsDesktop: [1199, 3],
        itemsTablet: [1024, 3],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1]
    });
    jQuery("#testimonials .next").on("click", function () {
        jQuery(".our-costumers-slider").trigger('owl.next');
    });
    jQuery("#testimonials .prev").on("click", function () {
        jQuery(".our-costumers-slider").trigger('owl.prev');
    });
    // Our Costumers Slider End
    // ---------------------------------------------------------------------------------------


    // ---------------------------------------------------------------------------------------
    // Our Team Slider Start
    jQuery(".our-team-slider").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 3,
        itemsDesktop: [1199, 3],
        itemsTablet: [1024, 3],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1]
    });
    jQuery("#our-team .next").on("click", function () {
        jQuery(".our-team-slider").trigger('owl.next');
    });
    jQuery("#our-team .prev").on("click", function () {
        jQuery(".our-team-slider").trigger('owl.prev');
    });
    // Our Team Slider End
    // ---------------------------------------------------------------------------------------

    if ($().isotope) {
        $('#about-filter').isotope({filter: '.about-startup'});
    }


//set up map options
     if ($('#map').length) {
        //set up markers 
        var myMarkers = {"markers": [
                {"latitude": "-37.8176419", "longitude": "144.9554397", "icon": "assets/img/logo/map-icon.png", "baloon_text": '121 King St, Melbourne VIC 3000, Australia'}
            ]};

        $("#map").mapmarker({
            zoom: 10,
            center: '121 King Street Melbourne Victoria 3000 Australia',
            markers: myMarkers
        });
    }
   

// Gmap End
// ---------------------------------------------------------------------------------------

});

$(window).trigger('resize').trigger('scroll');

// ---------------------------------------------------------------------------------------
// Gmap Start

