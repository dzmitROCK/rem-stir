$(document).ready(function() {

    $('.info_icon,.close_btn').click(function(event) {
        event.preventDefault();
        $('.pers_block').toggle("fast");
    });



    $('.history_btn').click(function(event) {
        event.preventDefault();
        $('.wishes_modal').fadeOut(0, function() {
            $('.rules_modal').fadeOut(0, function() {
                $('.info_modal').fadeToggle('fast');
            })
        })
    });


    $('.rules_btn').click(function(event) {
        event.preventDefault();
        $('.wishes_modal').fadeOut(0, function() {
            $('.info_modal').fadeOut(0, function() {
                $('.rules_modal').fadeToggle('fast');
            })
        })
    });


    $('.wishes_btn').click(function(event) {
        event.preventDefault();
        $('.rules_modal').fadeOut(0, function() {
            $('.info_modal').fadeOut(0, function() {
                $('.wishes_modal').fadeToggle('fast');
            })
        })

    });

    $('.vk_btn_open').click(function(event) {
        event.preventDefault();
        $('.vk_comments').fadeToggle('fast');
    });
    $('.open_mail').click(function(event) {
        event.preventDefault();
        $('.mail_block').fadeToggle('fast');
    });



    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function() {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open fix_bg');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open fix_bg');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function() {
        return false;
    });
    searchBox.mouseup(function() {
        return false;
    });
    $(document).mouseup(function() {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });
});

function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbox-icon').css('display', 'none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display', 'block');
    }
}

jQuery(document).ready(function($) {

    $('.no_active .btn_white').click(function(event) {
        event.preventDefault();
        $('.no_active').fadeOut('fast', function() {
            $('.active_form').fadeIn('slow');
        });
    });

    // // всплывашка
    $('.warn').tooltip();
    // всплывашка
    // подсчёт в форме символов
    $('.feedback-input').on('input', function() {

        var dataSymbols = $('.placeholder').data().symbols;
        var ost = dataSymbols - $(this).val().length;
        $('.placeholder span').text(ost)

        if (ost < 1) {
            $(this).siblings().css("opacity", "0");
            $('button[type="button"]').removeAttr('disabled');
        } else {
            $(this).siblings().css("opacity", "0.7");
            $('button[type="button"]').attr('disabled', 'disabled');
        }
    });
    // подсчёт в форме символов
    // scrol
    $(function() {
        $("a[href^='#']").click(function() {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
    });
    // scrol
    $(window).scroll(function() {

        if ($(window).width() > 768) {

            var hVeryTop = $('.very_top_line').height();
            var Head = $('.header').height();
            var topH = $(window).scrollTop();

            if (topH > hVeryTop) {
                $('#top_btn').fadeIn();
                $('.header').css({
                    position: 'fixed',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                });
                $('.navigate').css({
                    borderRight: '1px solid rgba(0, 112, 158, 0.25)',
                    borderLeft: '1px solid rgba(0, 112, 158, 0.25)'
                });
                $('#wrap_content').css('marginTop', Head + 'px');
                $('.header').css('minHeight', 50 + 'px');
                $('.navigate ul li a').css('padding', 7 + 'px ' + 0);
                $('.navigate ul').css({
                    boxShadow: 'none',
                    position: 'relative'
                });
            } else {
                $('#top_btn').fadeOut();

                $('.header').css({
                    position: 'relative',
                    boxShadow: 'none'
                });
                $('#wrap_content').css('marginTop', 0 + 'px');
                $('.header').css('minHeight', 90 + 'px');
                $('.navigate ul li a').css('padding', 15 + 'px ' + 0);

                $('.navigate').css({
                    borderRight: '1px solid rgba(0, 112, 158, 0.25)',
                    borderLeft: '1px solid rgba(0, 112, 158, 0.25)'
                });
                $('.navigate ul').css({
                    position: 'absolute',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                });
            }


        }
    });

    $('.close_block').each(function(index) {

        $(this).attr('data-block', index);

    });
    // text
    $('.open_text').each(function(index) {

        $(this).attr('data-opnbtn', index);

    });
    $('.hiden_block').each(function(index) {

        $(this).attr('data-hidenblock', index);

    });
    $('.on_dis').each(function(index) {

        $(this).attr('data-ondis', index);

    });
    $('.off_dis').each(function(index) {

        $(this).attr('data-offdis', index);

    });
    // text
    $('.close_btn a').each(function(index) {

        $(this).attr('data-close', index);

    });
    $('.icons_aside a').each(function(index) {

        $(this).attr('data-icon', index);

    });

    $('.job').each(function(index) {

        $(this).find('.close_btn_job').attr('data-btnclose', index);

    });

    $('.job').each(function(index) {

        $(this).attr('data-blockjob', index);

    });

    $('.job .close_btn_job').click(function(event) {
        event.preventDefault();
        $('.star').addClass('active');
        var item = $(this).data().btnclose;
        $('body').find('[data-blockjob="' + item + '"]').fadeToggle('fast');
    });

    $('.star').click(function(event) {
        event.preventDefault();
        $(this).removeClass('active');
        $('.job').fadeIn('fast');
    });
    $('.open_text').click(function(event) {
        event.preventDefault();
        var item = $(this).data().opnbtn;
        $('body').find('[data-hidenblock="' + item + '"]').fadeToggle('fast');
        $('body').find('[data-offdis="' + item + '"]').fadeToggle(0);
        $('body').find('[data-ondis="' + item + '"]').fadeToggle(0);

    });


    $('.icon_aside').click(function(event) {
        event.preventDefault();
        var item = $(this).data().icon;
        $('body').find('[data-block="' + item + '"]').removeClass('closed_closed');
        $('body').find('[data-icon="' + item + '"]').fadeOut('slow');
    });

    $('.close_btn a').click(function(event) {
        event.preventDefault();
        var one = $('.close_block.one:visible').length > 0;

        var item = $(this).data().close;
        $('body').find('[data-block="' + item + '"]').addClass('closed_closed');
        $('body').find('[data-icon="' + item + '"]').fadeIn('slow');

    });



    $('.filial a').click(function(event) {
        event.preventDefault();
        $('.copyryght').toggle();
        $('.fillials').toggle();
    });

    // DELETE THIS SHIT
    $('.str').click(function(event) {
        event.preventDefault();
        $('#str ul').toggle();
    });
    var numB = 1;
    $('#str ul li a').each(function(index) {
        $(this).prepend(numB + ' - ');
        numB++;
    });
    // #####DELETE THIS SHIT



    $('.number_phone').inputmask({ "mask": "+7(999)999-99-99" });



});
$(document).ready(function() {
    jQuery('.fade_me').addClass('hide_me').viewportChecker({
        classToRemove: 'hide_me',
        classToAdd: 'visible_me animated fadeIn',
        offset: 100
    });
    jQuery('.bounce_me').addClass('hide_me').viewportChecker({
        classToRemove: 'hide_me',
        classToAdd: 'visible_me animated bounceInUp',
        offset: 150
    });


    $(window).scroll(function() {

        var sb_m = 0; /* отступ сверху и снизу */
        var mb = 800; /* высота подвала с запасом */
        var st = $(window).scrollTop() + 110;
        var sb = $("aside");
        var sbi = $("aside .fixed_block");
        var sb_ot = sb.offset().top;
        var sbi_ot = sbi.offset().top;
        var sb_h = sb.height();

        if (sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
            if (st > sb_ot) {
                var h = Math.round(st - sb_ot) + sb_m;
                sb.css({ "paddingTop": h });
            } else {
                sb.css({ "paddingTop": 0 });
            }
        }
    });



});
