/*
    Ivan Kolesnikov, myivanko@gmail.com
    Version: 20.01.14
*/


$(document).ready(function() {

    // file fields
    $('.form-control[type="file"]').each(function() {
        fileAdd(this);
    });

    var $navbarToggle = $('#navbarToggle'),
        $navbarNav = $('#navbarNav');

    // mobile navigation control
    if ($navbarToggle.is(':visible')) {
        if ($navbarToggle.hasClass('active')) {
            $navbarNav.slideDown(200);
        } else {
            $navbarNav.slideUp(200);
        }
    }
    $navbarToggle.on('click', function() {
        $(this).toggleClass('active');
        $navbarNav.slideToggle(200);
    });

    // animate page scrolling
    $navbarNav.find('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash,
            $el = $(hash),
            offset = $el.data('offset') ? $el.data('offset') : 0;
        if ($el.length) {
            var elPos = $el.offset().top;
            $('html, body').animate({scrollTop: elPos + offset}, 300, function() {
                //window.location.hash = hash;
            });
        }
    });

});



function fileAdd(el) {

    var input = el;

    // html layout
    var $input = $(input).wrap('<span class="jViz-file-wrap"><span class="jViz-file-button">'+ input.title +'</span></span>').addClass('jViz-file'),
        $wrapper = $input.parent('.jViz-file-button').after('<span class="jViz-file-path"></span>');

    // set right visual element for default
    if (input.disabled) {
        $wrapper.addClass('disabled');
        return;
    }

    // on input FOCUS

    $input.focus(function() {

        $wrapper.addClass('focus');

    }).blur(function() {

        $wrapper.removeClass('focus');

    }).change(function() {

        FileUpdate(input);

    }).hover(function() {

        $wrapper.addClass('hover');

    }, function() {

        $wrapper.removeClass('hover');

    });

}

function fileUpdate(el) {

    // set elements with which will working
    var input = el,
        $path = $(input).parent('.jViz-file-button').siblings('.jViz-file-path');

    // add path of selected file
    $path.html(input.value);

}