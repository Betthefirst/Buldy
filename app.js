var swiper = new Swiper('.swiper', {
    
    slidesPerView: 'auto',
    watchOverflow: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    navigation: {
        nextEl: '.swiper-button-next-clic',
        prevEl: '.swiper-button-prev-clic',
        
    }

});

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger').addEventListener('click', function(){
     document.querySelector('.karkas').classList.toggle('open')
    })
})

swiper.update();