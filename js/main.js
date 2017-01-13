
$(document).ready(function () {
    //Set Options
    var speed = 500; //Fade speed
    var autoswitch = true; //Auto slider option
    var autoswitch_speed = 4000; // Auto slider speed

    //Add initial active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    //Show first slide
    $('.active').show();


    // Slide Forward
    $('#next').on('click', swichSlide);

    // Slide Back
    $('#prev').on('click', function () {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }); // end on()


    if (autoswitch) {
        setInterval(swichSlide, autoswitch_speed);
    }

    // Switch Slide
    function swichSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);

    }

}); //end ready()