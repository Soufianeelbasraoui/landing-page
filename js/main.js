$(function () {

    // Gestion du défilement fluide
    $(document).on('click', 'a[href^="#"]', function (e) {
        var t = this.hash;
        if (!t || !$(t).length) return;
        e.preventDefault();
        $('.mob-nav').slideUp(280);
        $('.burger').removeClass('open');
        $('html,body').animate({ scrollTop: $(t).offset().top - 68 }, 680);
    });

    // Toggle menu mobile
    $('.burger').on('click', function () {
        $(this).toggleClass('open');
        $('.mob-nav').slideToggle(280);
    });

    // Fermeture menu mobile au clic à l'extérieur
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav, .mob-nav').length) {
            $('.mob-nav').slideUp(280);
            $('.burger').removeClass('open');
        }
    });

    // Ajout de la classe scrolled au scroll
    $(window).on('scroll', function () {
        $('.nav')[$(this).scrollTop() > 50 ? 'addClass' : 'removeClass']('scrolled');
    });

    $(document).on('click', '.btn', function () {
        var $b = $(this).addClass('clicked');
        setTimeout(function () { $b.removeClass('clicked'); }, 280);
    });

});
