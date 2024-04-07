$(document).ready(function () {
    $(document).on('mousemove', function (event) {
        var astronaut = $('#astronaut');
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        // Update the position of the follower div
        astronaut.css({
            left: mouseX + 'px',
            top: mouseY + 'px'
        });
    });

});



const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const animation = anime.timeline({
    targets: '.text span',
    easing: 'easeInOutExpo',
    loop: true,
});

animation
    .add({
        rotate: function () {
            return anime.random(-360, 360);
        },
        translateX: function () {
            return anime.random(-500, 500);
        },
        translateY: function () {
            return anime.random(-100, 100);
        },
        duration: 7500,
        delay: anime.stagger(20),
    })
    .add({
        rotate: 0,
        translateX: 0,
        translateY: 0,
        duration: 5000,
        delay: anime.stagger(20),
    })