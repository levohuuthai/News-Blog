const headerEle = document.querySelector('header')
const goto = document.querySelector('.gotoTop')



window.addEventListener('scroll', function(e) {
    //$('.gotoTop').css("visibility", "visible");
    $('.gotoTop').addClass("moveTop");
    //goto.classList.add = 'moveTop'
    //alert('haha')
}, true);

$('.goToTop').click(function (e) {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
})