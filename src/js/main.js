$("#btn-backtotop").click(function () {
    $('body,html').animate({
        scrollTop: 0
    },700)
})
$('#btn-sub-popup').click(function(){
    $('#bg-form-air').addClass('d-none').removeClass('d-block');
    $('#submit-success').addClass('d-block').removeClass('d-none');
})
$('#btn-ok').click(function(){
    $('#bg-form-air').addClass('d-block').removeClass('d-none');
    $('#submit-success').addClass('d-none').removeClass('d-block');
})
