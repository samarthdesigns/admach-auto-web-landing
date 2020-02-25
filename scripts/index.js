

$(document).ready(function () {

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

})