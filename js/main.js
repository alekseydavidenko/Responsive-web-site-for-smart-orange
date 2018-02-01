$(document).ready(function(){

    var flagSelect = true;
    var flagSelectBlock = true;

    $(".dropdown").dropdown({
        cover: true
    });
    $('.select__title').click(function(){
        $('.select__title').toggleClass('select__title-change');
    });
    $('.fs-dropdown-item').click(function(){
        $('.select__title').toggleClass('select__title-change');

        if ($(window).width() < 860) {
            $('.order-form__left').animate(
                { 'margin-bottom': '0' }, 300
            );
            flagSelect = true;
        }

    });   
    $('.select__title').click(function(){
        if ($(window).width() < 860 && flagSelect) {
            $('.order-form__left').animate(
                { 'margin-bottom': '200px' }, 300
            );
            flagSelect = false;
        }
        else {
            $('.order-form__left').animate(
                { 'margin-bottom': '0' }, 300
            );
            flagSelect = true;
        }
    });


    /***/

    $('.select__title').click(function(){
        if (flagSelectBlock) {
            $('.fs-dropdown-open').css('display', 'block');
            $('.fs-dropdown-options').css('display', 'block');
            flagSelectBlock = false;
        }
        else {
            $('.fs-dropdown-open').css('display', 'none');
            $('.fs-dropdown-options').css('display', 'none');
            flagSelectBlock = true;
        }
        
    });
    $('.fs-dropdown-item').click(function(){
        $('.fs-dropdown-open').css('display', 'none');
        $('.fs-dropdown-options').css('display', 'none');
        flagSelectBlock = true;
    });

    // .fs-dropdown-open .fs-dropdown-options
});