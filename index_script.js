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

    $(document).on('mousemove', function (event) {
        var caption = $('.hide');
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        // Update the position of the follower div
        caption.css({
            left: mouseX + 40 + 'px',
            top: mouseY + -100 + 'px'
        });
    });

    //How to change text on hover on certain planets: https://www.quora.com/How-do-I-change-paragraph-text-on-mouse-hover-using-jquery

    //Assignment1
    $('#a1,#a1Documentation, #a2,#a2Documentation, #a3,#a3Documentation,#e2, #e3, #e4, #e5, #e6, #e7, #e8, #a4Documentation').hide();

    $('#assignment1').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Assignment 1: Storybook");
        $('#a1').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#a1').trigger('pause').hide()
        });

    $('#moon').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Storybook Documentation");
        $('#a1Documentation').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#a1Documentation').trigger('pause').hide()
        });

    //Assignment2
    $('#assignment2').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Assignment 2: Poster");
        $('#a2').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#a2').trigger('pause').hide()
        });

    $('#moon2').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Poster Documentation");
        $('#a2Documentation').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#a2Documentation').trigger('pause').hide()
        });

    //Assignment3
    $('#assignment3').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Assignment 3: Interaction (Resize)");
        $('#a3').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#a3').trigger('pause').hide()
        });

    $('#moon3').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Interaction (Resize) Documentation");
        $('#a3Documentation').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#a3Documentation').trigger('pause').hide()
        });

    //assignment 4

    $('.a4Documentation').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Index Documentation & Reflection");
        $('#a4').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#a4').trigger('pause').hide()
        });

    //Exercise2
    $('#exercise2').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Excercise 2: Grid Painting");
        $('#e2').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#e2').trigger('pause').hide()
        });

    //Exercise 3        
    $('#exercise3').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Excercise 3: Typography");
        $('#e3').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#e3').trigger('pause').hide()
        });

    //Exercise 4
    $('#exercise4').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Excercise 4: Flexbox");
        $('#e4').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#e4').trigger('pause').hide()
        });
    //Exercise 5
    $('#exercise5').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Excercise 5: Responsiveness");
        $('#e5').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#e5').trigger('pause').hide()
        });
    //Exercise6
    $('#exercise6').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Excercise 6: Javascript");
        $('#e6').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#e6').trigger('pause').hide()
        });

    //Exercise7
    $('#exercise7').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Excercise 7: JQuery");
        $('#e7').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#e7').trigger('pause').hide()
        });

    //Exercise8
    $('#exercise8').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Excercise 8: JSON");
        $('#e8').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#e8').trigger('pause').hide()
        });

    //Reading1
    $('#reading1').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Reading 1: A Handmade Web");
        $('#r1').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#r1').trigger('pause').hide()
        });

    //Reading2
    $('#reading2').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Reading 2: What Screen Wants");
        $('#r2').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#r2').trigger('pause').hide()
        });

    //Reading3
    $('#reading3').hover(function () {
        // store $(this).text() in a variable      
        $(".hide").text("Reading 3: My website is a shifting house next to a river of knowledge");
        $('#r3').show().trigger('play');
    },
        function () {
            // assign it back here 
            $(".hide").text("Welcome to the N.O.R.A. Universe. Let's explore!");
            $('#r3').trigger('pause').hide()
        });

    var windowWidth = $(window).width();

    // random value: https://www.w3schools.com/jsref/jsref_random.asp
    var x = Math.floor((Math.random() * windowWidth / 3) + 1);
    var y = Math.floor((Math.random() * windowWidth / 3) + 1);
    var z = Math.floor((Math.random() * windowWidth / 3) + 1);
    $(".planet").css("margin-left", x + "px");
    $(".planet2").css("margin-left", y + "px");
    $(".planet3").css("margin-left", z + "px");
    // $("#a4Documentation").css("margin-left", x + "px");

    $(".moon").css("margin-left", x + 40 + "px");
    $(".moon2").css("margin-left", y - 40 + "px");
    $(".moon3").css("margin-left", z + 40 + "px");



    $('#pause').click(function () {

        var audio = document.getElementById("spaceMusic");
        var currentSrc = $(this).attr('src');

        if (currentSrc == 'images/pause.png') {
            $(this).attr('src', 'images/play.png');
            audio.pause();
        } else {
            $(this).attr('src', 'images/pause.png');
            audio.play();
        }
    });

});


