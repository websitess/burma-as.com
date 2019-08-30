
$(function(){
    $('.more--btn').on('click', function(){
        var phones = $('.phones ul');
        if($(phones).is(':visible')){
            $(phones).slideUp();
            $(this).removeClass('open');
        }
        else{
            $(phones).slideDown();
            $(this).addClass('open');
        }
    })
    return false;
 });

 $(function(){  
    var date = new Date(2019, 4, 4);
    var today = new Date();
    
    var dif = date.getTime() - today.getTime();
    
    var timeLeft = Math.abs(dif/1000)/60;
    
    var clock = $('.banner .time').FlipClock({
        autoStart: false,
        clockFace: 'DailyCounter',
        countdown: true,
        language:'ru-ru',
    });
    
    clock.setTime(timeLeft);
    clock.start();   
 });  

//  submenu
$(function(){
    var width = $(window).width();
    $('.submenu > a').on('mouseover', function(){
        if(width > 1199){
            $(this).next('ul').fadeIn(200);
        }
    });

    $('.submenu > a').on('click', function(){
        if (width < 1100) {
          $(this).next('ul').slideToggle();
          return false;
        } 
      });

    if(width > 1199){
        $('.submenu').on('mouseleave', function(){
            $('.submenu').children('ul').fadeOut();
        });
    }
});

$(function(){
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: true
    })
    $('.materials-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
                {
                        breakpoint: 1100,
                        settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                 }       
              },
                    {
                        breakpoint: 540,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }       
              },
                    {
                        breakpoint: 400,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                }       
                } 
          ]
      })

 });

 $(function(){
    $('.card_slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: false,
        asNavFor: '.card_slider-nav'
      });
      $('.card_slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.card_slider-for',
        arrows: false,
        dots: false,
        vertical: true,
        focusOnSelect: true
      });
});

// Modal
$(document).ready(function() {
	$('.open--modal').on('click', function(){
		var link = $(this).attr('data-modal');
		$(link).fadeIn();
		return false;
	});

	$('.modal .close, .modal__layer').on('click', function() {
		$(this).parents('.modal, .mobile-contacts').fadeOut();
		return false;	
	});

	$('[name="tel"]').inputmask('+7 (999) 999-99-99');
});


// show in map

var myMap;
    
function init(){
    // myMap = DG.map('map', {
    //     center: [42.877364, 74.602411],
    //     zoom: 11
    // });

    // var marker = DG.icon({
    //     iconUrl: '/img/location.png',
    //     iconSize: [44, 56]
    // });

    myMap = new ymaps.Map(
            'map', {
                    center: [43.216031, 76.845240],
                    zoom: 14,
                controls: ['zoomControl', 'typeSelector', 'geolocationControl', 'fullscreenControl']
            }
    );

    $('.footer-contacts').each(function(i){
        var coords = $(this).find('.show-in-map').data('id').split(', ');
        var x = parseFloat(coords[0]);
        var y = parseFloat(coords[1]);
        // var address = $(this).find('.col--location').html();
        // var img = $(this).find('.col--photo').attr('src');
        // var phone = $(this).find('.col--phone a').first().html();
        // var schedule = $(this).find('.col--time').html();
        // DG.marker([x, y], {
    //        icon: marker
    //    }).addTo(myMap).bindPopup('<div class="map__block"><div class="map__block__img"><img src="'+img+'" alt="" /></div><p>'+address+'</p><p>'+schedule+'</p><a href="tel:'+phone+'">'+phone+'</a></div>');
        var myGeoObject = new ymaps.Placemark([x, y], {
                    
            
                iconLayout: 'default#imageWithContent',
                    iconImageHref: '',
                    iconImageSize: [44, 30],
                    iconImageOffset: [0, 0]
            });
            myMap.geoObjects.add(myGeoObject);
        });
}


$(function(){
    
    ymaps.ready(init);

    $('.show-in-map').click(function(){
        var coords = $(this).data('id').split(',');
            var x = parseFloat(coords[0]);
            var y = parseFloat(coords[1]);
            // var latlng = DG.latLng(x,y);
        myMap.geoObjects.each(function(object){
            var objX = object.geometry._coordinates[0];
            var objY = object.geometry._coordinates[1];
            if(objX == x && objY == y){
                myMap.panTo([x, y]).then(
                    function () { object.balloon.close();}
                );
            }
        });
        return false;

        // $('html, body').animate({scrollTop: 0}, 500);
        // 	// var popup = DG.popup().
        // 	// 			setLatLng(latlng).
        // 	// 			setContent('<div class="map__block"><div class="map__block__img"><img src="'+img+'" alt="" /></div><p>'+address+'</p><p>'+schedule+'</p><a href="tel:'+phone+'">'+phone+'</a></div>').
        // 	// 			openOn(myMap);
        // 	return false;
    });
    
});

$(function(){
    $('.menu--btn').on('click', function(){
        var menu = document.querySelector('header .nav');
        if($(menu).is(':visible')){
            $(menu).slideUp();
            $(this).removeClass('open');
        }
        else{
            $(menu).slideDown();  
            $(this).addClass('open');
        }
    })
    return false;
});

$(function(){
    $('.phone--btn').on('click', function(){
        var call = document.querySelector('.col--phone.phones');
        if($(call).is(':visible')){
            $(call).slideUp();
            $(this).removeClass('close');
        }
        else{
            $(call).slideDown();
            $(this).addClass('close');
        }
    });
    return false;
});

$(function(){
    var lang=document.querySelector('header .langs');
    $('.current-lang').on('click', function(){
        if($(lang).is(':visible')){
            $(lang).slideToggle();
            $(this).removeClass('open');
        }
        else{
            $(lang).slideToggle();
            $(this).addClass('open');
        }
    });
    return false;
    
});

$(function(){
    $('.search--btn').on('click', function(){
        $('.search').fadeIn();
        $('.close-search').on('click', function(){
          $(this).parents('.search').fadeOut();
        });
        return false;
      });
});
