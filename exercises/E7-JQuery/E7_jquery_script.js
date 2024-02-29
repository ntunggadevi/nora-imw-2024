// Nora Tunggadevi
// 3190797
// Prof. Peter Ha
// Interactive Media Web (GDES-3091-501)
// February 28,2024

//for testing if the JQuery Library is linked
$('body').css('background-color', 'midnightblue');

//.ready is an EVENT to execute the function if the Document Object Model(DOM) is ready
$(document).ready(function () {

    //to call the width and height of the circle from the CSS file
    var circleWidth = $("#circle").width();
    var circleHeight = $("#circle").height();

    //.mousemove is an EVENT that is triggered by the movement of the mouse cursor
    //lets the id "circle" to follow the movement of the cursor
    $(document).mousemove(function (e) {
        //.css MANIPULATES the css code of the id "circle"
        $("#circle").css({
            left: e.pageX - circleWidth / 2, //helps to centralize the circle on the cursor.
            top: e.pageY - circleHeight / 2 //helps to centralize the circle on the cursor
        });
    });

    //when p and/or circle is clicked the mousedown/mouseup functions would execute 
    $("#circle, p")
        //.on("mousedown") is triggered when the mouse buttons are clicked 
        .on("mousedown", function (e) {
            //.animate function is an EFFECT that would animate the property of the circle; in this case when the mouse button is clicked the size of the circle shrinks
            $("#circle").animate({
                height: 100,
                width: 100,
            });
        })
        //.on("mouseup") is triggered when the mouse buttons are released 
        .on("mouseup", function (e) {
            //.animate function is an EFFECT that would animate the property of the circle; in this case when the mouse button is release the size of the circle grows back to its original size
            $("#circle").animate({
                height: 200,
                width: 200,
            });
        })
})

//debugging assistance: OpenAI. (2024). ChatGPT (3.5) [Large language model]. https://chat.openai.com
//Sources used:
// - https://api.jquery.com/category/events/
// - https://api.jquery.com/category/manipulation/
// - https://api.jquery.com/category/effects/
// - https://stackoverflow.com/questions/3385936/jquery-follow-the-cursor-with-a-div

