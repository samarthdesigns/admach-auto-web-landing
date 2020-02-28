

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

})