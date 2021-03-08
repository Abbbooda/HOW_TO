$(function(){
    $('.accor-head').on('click',function(){
        $(this).toggleClass('active')
    })

    $('.accor-head').on('click',function(){
        $('.accor-body').slideToggle(1200)
    })
});