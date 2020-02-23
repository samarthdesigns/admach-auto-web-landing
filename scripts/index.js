

$(document).ready(function () {

    var video = document.getElementById("video-player");

    $('#expand-video').click(function () {
        $('#left-info').toggleClass('left-ani');
        $('#right-video').toggleClass('right-ani');
        $('.tint').toggleClass('tint-ani');
        $('.tint').fadeOut(500);
        setTimeout(() => {
            $('.landing-video').addClass('landing-video-ani');
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
})