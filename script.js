$(document).ready(function() {
    $('#btn-mob').on('click', function() {
        $('#menu_Mob').toggleClass('active');
        $('#btn-mob').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItens = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');

        let activeSecIndex = 0;

        const scrollPos = $(window).scrollTop() - header.outerHeight();

        if(scrollPos <= 0){
            header.css('box-shadow', 'none');
        }
        else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0, 0.1)')
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTopo = section.offset().top - 156;
            const sectionBaixo = sectionTopo+ section.outerHeight();

            if(scrollPos >= sectionTopo && scrollPos < sectionBaixo){
                activeSecIndex = i;
                return false;
            }
        })
        navItens.removeClass('active');
        $(navItens[activeSecIndex]).addClass('active');
    });

    ScrollReveal().reveal('#info', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.produto', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#store_img', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.avaliacao', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#about', {
        origin: 'left',
        duration: 2500,
        distance: '20%'
    });
});