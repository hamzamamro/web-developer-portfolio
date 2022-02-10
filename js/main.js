var navBtn = $('#nav-btn');
var navUlShow = $('.nav .active');
var navUl = $('.nav ul');
var navUlLi = $('.nav ul li');

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

navUlLi.on('click', function(){
    if(navUl.hasClass('active')){
        navUl.css({
            visibility: 'hidden'
        });

        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });

        navUl.removeClass('active');

        navUl.css({
            visibility: 'visible'
        });
    } 
});





