$("body").prepend('<div id="preloader"><img src="./content/logo.png"></div>');

$(document).ready(function () {

    $("#preloader").remove();
    $("html").css("overflow","auto");

    var video = document.getElementById("video-player");

    $('#expand-video').click(function () {
        $('#left-info').toggleClass('left-ani');
        $('#right-video').toggleClass('right-ani');
        $('.tint').toggleClass('tint-ani');
        $('.tint').fadeOut(500);
        setTimeout(() => {
            $('.landing-video').addClass('landing-video-ani');
            $('html, body').animate({
                scrollTop: $("#right-video").offset().top
            }, 500);
        }, 500);  
        $('#expand-video').fadeOut();
        $('#close-video').fadeIn();
        $("html").css("overflow","hidden");
        toggleControls();
    })

    $('#close-video').click(function () {
        $('#left-info').toggleClass('left-ani');
        $('#right-video').toggleClass('right-ani');
        $('.tint').toggleClass('tint-ani');
        setTimeout(() => {
            $('.landing-video').removeClass('landing-video-ani');
            $('.tint').fadeIn(500);
        }, 500);       
        $('.landing-video').toggleClass('landing-video-ani')
        $('#expand-video').fadeIn();
        $('#close-video').fadeOut();
        $("html").css("overflow","auto");
        toggleControls();
    })

    function toggleControls() {
        console.log('test');
        if (video.hasAttribute("controls")) {
            video.removeAttribute("controls")
        } else {
            video.setAttribute("controls", "controls")
        }
    }

    $('#phone-option').click(function(){
        $('#phone-option').addClass('active-option');
        $('#email-option').removeClass('active-option');
        $('#letter-option').removeClass('active-option');
        $('#phone-actions').fadeIn(400);
        $('#email-actions').fadeOut(0);
        $('#letter-actions').fadeOut(0);
    })

    $('#email-option').click(function(){
        $('#email-option').addClass('active-option');
        $('#phone-option').removeClass('active-option');
        $('#letter-option').removeClass('active-option');
        $('#email-actions').fadeIn(400);
        $('#letter-actions').fadeOut(0);
        $('#phone-actions').fadeOut(0);
    })

    $('#letter-option').click(function(){
        $('#letter-option').addClass('active-option');
        $('#email-option').removeClass('active-option');
        $('#phone-option').removeClass('active-option');
        $('#letter-actions').fadeIn(400);
        $('#email-actions').fadeOut(0);
        $('#phone-actions').fadeOut(0);
    })

    $("#know-more").click(function (){
        $('html, body').animate({
            scrollTop: $("#mission").offset().top
        }, 1000);
    });

    $("#action").click(function (){
        $('html, body').animate({
            scrollTop: $("#form-options").offset().top
        }, 1000);
    });

    $('#close-overlay').click(function(){
        $('#antinoiseshims_content').fadeOut();
        $('#autoadjustedpushrods_content').fadeOut();
        $('#backplates_content').fadeOut();
        $('#brackets_content').fadeOut();
        $('#childparts_content').fadeOut();
        $('#cvbackplates_content').fadeOut();
        $('#drumbackplates_content').fadeOut();
        $('#frictiondisks_content').fadeOut();
        $('#linedbrakeshoes_content').fadeOut();
        $('#otherparts_content').fadeOut();
        $('#awards_content').fadeOut();
        $('#certifications_content').fadeOut();
        $('.overlay').fadeOut();
    })

    $('#awards').click(function(){
        $('.overlay').fadeIn();
        $('#awards_content').fadeIn();
    });

    $('#certifications').click(function(){
        $('.overlay').fadeIn();
        $('#certifications_content').fadeIn();
    });

    $('#antinoiseshims').click(function(){
        $('.overlay').fadeIn();
        $('#antinoiseshims_content').fadeIn();
    });

    $('#autoadjustedpushrods').click(function(){
        $('.overlay').fadeIn();
        $('#autoadjustedpushrods_content').fadeIn();
    });

    $('#backplates').click(function(){
        $('.overlay').fadeIn();
        $('#backplates_content').fadeIn();
    });

    $('#childparts').click(function(){
        $('.overlay').fadeIn();
        $('#childparts_content').fadeIn();
    });
    
    $('#brackets').click(function(){
        $('.overlay').fadeIn();
        $('#brackets_content').fadeIn();
    });

    $('#cvbackplates').click(function(){
        $('.overlay').fadeIn();
        $('#cvbackplates_content').fadeIn();
    });

    $('#drumbackplates').click(function(){
        $('.overlay').fadeIn();
        $('#drumbackplates_content').fadeIn();
    });

    $('#frictiondisks').click(function(){
        $('.overlay').fadeIn();
        $('#frictiondisks_content').fadeIn();
    });

    $('#linedbrakeshoes').click(function(){
        $('.overlay').fadeIn();
        $('#linedbrakeshoes_content').fadeIn();
    });

    $('#otherparts').click(function(){
        $('.overlay').fadeIn();
        $('#otherparts_content').fadeIn();
    });

    $('#form-submit').click(function(){
        var name = $('#form-name').val();
        var companyName = $('#form-company-name').val();
        var countryName = $('#form-country-name').val();
        var email = $('#form-email').val();
        var message = $('#form-message').val();

        fetch('https://dry-springs-23996.herokuapp.com/add', {
            method:'POST',
            crossDomain:true,
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: name,
                companyName: companyName,
                countryName: countryName,
                email: email,
                message: message
            }),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.message!=undefined){
                $('.message').toggleClass('message-success');
                $("#message-text").text(result.message);
                setTimeout(() => {
                    $('.message').toggleClass('message-success');
                }, 2000);  
            }
            else if(result.error!=undefined){
                $('.message').toggleClass('message-error');
                $("#message-text").text(result.error);
                setTimeout(() => {
                    $('.message').toggleClass('message-error');
                }, 2000);  
            }
        })
        .catch((error) => {
            $('.message').toggleClass('message-error');
                $("#message-text").text("Check your internet connection");
                setTimeout(() => {
                    $('.message').toggleClass('message-error');
                }, 2000); 
            });
    })

    $('#menu').click(function(){
        $('.header-mobile').toggleClass('header-mobile-expand');
    })

    $("#menu-mission").click(function (){
        $('html, body').animate({
            scrollTop: $("#mission").offset().top
        }, 1000);
        $('.header-mobile').toggleClass('header-mobile-expand');
    });

    $("#menu-partners").click(function (){
        $('html, body').animate({
            scrollTop: $("#partners").offset().top
        }, 1000);
        $('.header-mobile').toggleClass('header-mobile-expand');
    });

    $("#menu-quality").click(function (){
        $('html, body').animate({
            scrollTop: $("#quality").offset().top
        }, 1000);
        $('.header-mobile').toggleClass('header-mobile-expand');
    });

    $("#menu-products").click(function (){
        $('html, body').animate({
            scrollTop: $("#products").offset().top
        }, 1000);
        $('.header-mobile').toggleClass('header-mobile-expand');
    });

    $("#menu-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#form-options").offset().top
        }, 1000);
        $('.header-mobile').toggleClass('header-mobile-expand');
    });

    $("#menu-home").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
        $('.header-mobile').toggleClass('header-mobile-expand');
    });

})

