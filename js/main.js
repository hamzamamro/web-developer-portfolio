var navBtn = $('#nav-btn');
var navUlShow = $('.nav .active');
var navUl = $('.nav ul');


navBtn.on('click', function(){
    
    navUl.toggleClass('active');

    if(navUl.hasClass('active')){
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });

    } else{
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }
});


console.log(navUlShow)




