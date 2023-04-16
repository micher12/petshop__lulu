$(function(){
    var mobile = false;

    //animação scroll
    navegation($('nav a'),0);
    function navegation(el,des){
        el.click(function(event){
            var $anchor = $(this);
            var calculo = $($anchor.attr('href')).offset().top;
            if(des){
                var goto = calculo-des;
            }else{
                var goto = calculo;

            }

            $('html, body').stop().animate({
                scrollTop: goto
            },1000,);

            event.preventDefault();
        });
    }

    //mobile
    mobileAnimacao()
    function mobileAnimacao(){
        var animacao = false;
        var button = $('.mobileButton');
        var menuMobile = $('.menuMobile');
        var span = $('.mobileButton span');
        var dark = $('.dark');
        var line1 = $('.mobileButton div.line1');
        var line2 = $('.mobileButton div.line2');
        var line3 = $('.mobileButton div.line3');
        var a = $('.menuMobile li a');

        button.click(function(){
            if(animacao)return
            animacao = true;

            if(mobile){
                button.css("position",'absolute');
                line1.css("background-color","black").css("transform","rotate(0)").css("top",'2px');
                line2.css("display",'block');
                line3.css("background-color","black").css("transform","rotate(0)").css('top','16px');
                span.css("background-color","transparent");
                dark.fadeOut();
                mobile = false;
                menuMobile.toggle('slide',{direction:'right'},'slow',function(){
                    animacao = false;
                },1000);
            }else{
                button.css("position",'fixed');
                line1.css("background-color","white").css("transform","rotate(45deg)").css("top",'14px');
                line2.css("display",'none');
                line3.css("background-color","white").css("transform","rotate(-45deg)").css('top','11px');
                span.css("background-color","red")
                dark.fadeIn();
                mobile = true;
                menuMobile.toggle('slide',{direction:'right'},'slow',function(){
                    animacao = false;
                },1000);
            }
        });
        dark.click(function(){
            if(animacao)return
            animacao = true;

            if(mobile){
                button.css("position",'absolute');
                dark.fadeOut();
                console.log("test")
                line1.css("background-color","black").css("transform","rotate(0)").css("top",'2px');
                line2.css("display",'block');
                line3.css("background-color","black").css("transform","rotate(0)").css('top','16px');
                span.css("background-color","transparent");
                mobile = false;
                menuMobile.toggle('slide',{direction:'right'},'slow',function(){
                    animacao = false;
                },1000);
            }
        });

        a.click(function(){
            if(animacao)return
            animacao = true;

            if(mobile){
                button.css("position",'absolute');
                dark.fadeOut();
                console.log("test")
                line1.css("background-color","black").css("transform","rotate(0)").css("top",'2px');
                line2.css("display",'block');
                line3.css("background-color","black").css("transform","rotate(0)").css('top','16px');
                span.css("background-color","transparent");
                mobile = false;
                menuMobile.toggle('slide',{direction:'right'},'slow',function(){
                    animacao = false;
                },1000);
            }
        });

        $(window).resize(function(){
            if(mobile){
                button.css("position",'absolute');
                mobile = false;
                line1.css("background-color","black").css("transform","rotate(0)").css("top",'2px');
                line2.css("display",'block');
                line3.css("background-color","black").css("transform","rotate(0)").css('top','16px');
                span.css("background-color","transparent");
                dark.fadeOut();
                mobile = false;
                menuMobile.toggle('slide',{direction:'right'},'slow',function(){
                    animacao = false;
                },1000);
            }
        });
    };

    //slider
    slider()
    function slider(){
        var slide = $('.slider');
        var avaliacao = $('.avaliacao');

        avaliacao.slick({
            centerMode: false,
            arrows: false,
            autoplay: true,
            dots: true,
            speed: 1000,
            autoplaySpeed: 8000,
        });

        slide.slick({
            speed: 2000,
            autoplaySpeed: 4000,
            centerMode: true,
            arrows: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            dots: true,
            responsive: [
                {
                    breakpoint: 761,
                    settings: {
                        centerMode: false,
                    },
                },
            ],
        });
    };

});