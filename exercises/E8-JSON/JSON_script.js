// Nora Tunggadevi
// 3190797
// Prof. Peter Ha
// Interactive Media Web (GDES-3091-501)
// March 6,2024

//in class notes
// let cat = [{
//     "name": "Mr. Floofy",
//     "age": 3,
//     "healthy": true,
//     "faveFood": "fish sticks",
//     "photo": "mrFloofy.jpeg",
// },
// {
//     "name": "Meowzers",
//     "age": 2,
//     "healthy": false,
//     "faveFood": "beef steak",
//     "photo": "meowzers.jpg",
// },
// ]

//1
// $('.cat-name').append(cat.name);

// $('body').append(`<p>${cat.age}</p>`);

// $('body').append(`<p>${cat.faveFood}</p>`);

// console.log(cat.name);



//2
// for (let i = 0; i < cat.length; i++) {
//     $('body').append(`
//         <div>
//         <img src=images/${cat[i].photo}>
//         <h2>${cat[i].name}</h2>
//         <p>${cat[i].age}</p>
//         <br>
//         <br>
//         </div>`
//     );
// }

//3

// fetch("cat.json")

//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         //display to document

//         for (let i = 0; i < data.cat.length; i++) {
//             $('body').append(`
//                 <div>
//                 <img src=images/${data.cat[i].photo}>
//                 <h2>${data.cat[i].name}</h2>
//                 <p>${data.cat[i].age}</p>
//                 <br>
//                 <br>
//                 </div>`
//             );
//         }
//     })
//     .catch(function (error) {
//         $('body').append('<h1>Error</h1>');
//     })

//4

// fetch("https://ghibliapi.vercel.app/species")

//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         //display to document
//         data.forEach(dataPoint => {
//             $('body').append(`
//                 <div>
//                 <h2>${dataPoint.name}</h2>
//                 <p>${dataPoint.eye_colors}</p>
//                 </div>`
//             );

//         });
//     }
//     )
//     .catch(function (error) {
//         $('body').append('<h1>Error</h1>');
//     })
//end of in class notes

//start of exercise

let duckAPI = "https://random-d.uk/api/v2/random";

//gets the data from the JSON file
fetch(duckAPI)

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //display to document -- <img src="${data.url}"> is to get the url of the random duck pictures
        $('body').append(`
        <section class="message">

        <section class="messageItem">

            <div class="header headerText">
                <img src=images/duck.jpg class="profilePic">
                <h1 class="spacer profileFont">Duck Dealer</h1>
            </div>
        </section>

        <section class="messageItem">
            <div class="text spacer">
                <p>send me a duck pic! ;)</p>

            </div>
            <br>

            <div class="duck">
            
            <img src="${data.url}">
            <br>
            </div>

        </section>

        <section class="messageItem">
            <div class="blue">
                <br>
                <div class="type">
                    <h1>Send me another one!
                    </h1>

                </div>
                <a href="">
                    <div class="send"></div>
                </a>
            </div>
        </section>
    </section>
    </section>          
        `);
    })
    .catch(function (error) {
        //if an error occured a message will appear telling the user to download a chrome extension to fix the CORS error which doesn't allow the duck pictures to load
        $('.duck').append('<div class="center spacer"><img src="https://random-d.uk/api/http/409.jpg" id=largerImg><h1>Duck! An error!</h1> <p>Due to CORS error this site will not work properly. Please install <a href="https://chromewebstore.google.com/detail/digfbfaphojjndkpccljibejjbppifbc?hl=en-US">the moesif CORS extension</a> and also make sure it is turned on for the site to work properly.</p></div>'); //how to fix CORS error: https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
    })


