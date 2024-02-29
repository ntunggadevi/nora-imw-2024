console.log('hello world');

$('body').css('background-color', 'red');

let text = 'hello';

for (let i = 0; i < 500; i++) {
    let block = `<div style="width:${i}px; height: 100vw; background-color: hsl(${i},100%,50%)"></div>`;
    $('.foreground').append(block);
}

$('div').each(function () {
    console.log(this);

    $(this).on('mouseenter', function () {
        $(this).addClass('no-width');
    })
})

$('body').on('keypress', function () {
    console.log('keypressed');
    $('div').removeClass('no-width');
})