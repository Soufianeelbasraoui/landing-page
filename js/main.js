$(function () {


    $(document).on('click', 'a[href^="#"]', function (e) {
        var t = this.hash;
        if (!t || !$(t).length) return;
        e.preventDefault();
        $('.mob-nav').slideUp(280);
        $('.burger').removeClass('open');
        $('html,body').animate({ scrollTop: $(t).offset().top - 68 }, 680);
    });

    $('.burger').on('click', function () {
        $(this).toggleClass('open');
        $('.mob-nav').slideToggle(280);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav, .mob-nav').length) {
            $('.mob-nav').slideUp(280);
            $('.burger').removeClass('open');
        }
    });

    $(window).on('scroll', function () {
        $('.nav')[$(this).scrollTop() > 50 ? 'addClass' : 'removeClass']('scrolled');
    });

    $(document).on('click', '.btn', function () {
        var $b = $(this).addClass('clicked');
        setTimeout(function () { $b.removeClass('clicked'); }, 280);
    });

});
$(function () {

    function reveal() {
        var wh = $(window).height();
        var st = $(window).scrollTop();
        $('.reveal:not(.on)').each(function () {
            if ($(this).offset().top < st + wh - 60) $(this).addClass('on');
        });
    }
    $('.stagger').children('.reveal').each(function (i) {
        $(this).css('transition-delay', (i * 0.13) + 's');
    });

    reveal();
    $(window).on('scroll', reveal);

    $(window).on('scroll', function () {
        $('.nav')[$(this).scrollTop() > 50 ? 'addClass' : 'removeClass']('scrolled');
    });
    $(document).on('click', 'a[href^="#"]', function (e) {
        var t = this.hash;
        if (!t || !$(t).length) return;
        e.preventDefault();
        $('.mob-nav').slideUp(280);
        $('.burger').removeClass('open');
        $('html,body').animate({ scrollTop: $(t).offset().top - 68 }, 680);
    });
    $('.burger').on('click', function () {
        $(this).toggleClass('open');
        $('.mob-nav').slideToggle(280);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav, .mob-nav').length) {
            $('.mob-nav').slideUp(280);
            $('.burger').removeClass('open');
        }
    });
    var cur = 0;
    var tot = $('.tslide').length;

    function go(n) {
        if (n < 0) n = tot - 1;
        if (n >= tot) n = 0;
        cur = n;
        $('.carousel-track').css('transform', 'translateX(-' + (cur * 33.333) + '%)');
        $('.dot').removeClass('on');
        $('.dot[data-i="' + cur + '"]').addClass('on');
    }

    $(document).on('click', '.dot', function () { 
        go(+$(this).data('i')); 
    });

    var auto = setInterval(function () { go(cur + 1); }, 5000);
    $(document).on('click', '.dot', function () { 
        clearInterval(auto); 
    });

    var tx = 0;
    $('.carousel-wrap')
        .on('touchstart', function (e) { tx = e.originalEvent.changedTouches[0].clientX; })
        .on('touchend', function (e) {
            var d = tx - e.originalEvent.changedTouches[0].clientX;
            if (Math.abs(d) > 45) go(cur + (d > 0 ? 1 : -1));
        });

    go(0);

    $(document).on('click', '.btn', function () {
        var $b = $(this).addClass('clicked');
        setTimeout(function () { $b.removeClass('clicked'); }, 280);
    });

});
