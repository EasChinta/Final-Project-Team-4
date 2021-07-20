// // Second Page Cards and Info //

// var secondPageCards = [
//   {
//     title: "Title",
//     cardText: "blablablablablabla",
//     lastUpdated: "some minutes ago",
//     image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
//   },
//   {
//     title: "Title",
//     cardText: "hi hihihihihi",
//     lastUpdated: "5 minutes ago",
//     image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
//   },
// ];

// var txt = " ";

// txt += `<div class="row">`;

// for (let val of secondPageCards) {
//   txt += `
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="${val.image}" class="img-fluid rounded-start" alt="...">
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">${val.title}</h5>
//                   <p class="card-text">${val.cardText}</p>
//                   <p class="card-text"><small class="text-muted">${val.lastUpdated}</small></p>
//                   <a href="#" class="btn btn-outline-success mybtn"
//                   >Read more</a
//                 >
//                 </div>
//               </div>
        

//     `;
// }

// txt += `</div>`;

// document.getElementById("pageTwo").innerHTML = txt;






// // Third page Cards and info //

// var thirdPageCards = [
//   {
//     title: "Title",
//     cardText: "change text here",
//   },
//   {
//     title: "Title",
//     cardText: "change text here",
//   },
//   {
//     title: "Title",
//     cardText: "change text here"
//   },
// ];

// var txt3 = " ";
// txt3 += '<div class="row">';

// for (let val of thirdPageCards) {
//     txt3 += `
//     <div class="card bg-transparent border-success mb-3" style="max-width: 18rem;">
//     <div class="card-header">${val.title}</div>
//     <div class="card-body text-success">
//       <h5 class="card-title">${val.cardText}</p>
//     </div>
//   </div>
//             `;
// }

// txt3 += "</div>";

// document.getElementById("pageThree").innerHTML = txt3;




// //Fourth page Cards and info //


// var fourthPageCards = [
//     {
//       title: "Title",
//       cardText: "change text here",
//       price: 4500,
//        image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
//     },
//     {
//       title: "Title",
//       cardText: "change text here",
//       price: 4500,
//        image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
//     },
//     {
//       title: "Title",
//       cardText: "change text here",
//       price: 4500,
//        image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
//     },
//   ];


//   var txt4 = " ";

//   txt4 += `<div class="row">`;
  
//   for (let val of fourthPageCards) {
//     txt4 += 

//   `
//   <div class="card bg-transparent" style="width: 18rem;">
//   <img src="${val.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${val.title}</h5>
//     <p class="card-text">${val.cardText} <br> ${val.price}</p>
//     <a href="#" class="btn btn-outline-success mybtn ">Select</a>
//   </div>
// </div>
//   `
// }

// txt4 += "</div>";

// document.getElementById("pageFour").innerHTML = txt4;


var prices = [
  {
      duration: "1 Month",
      price: 16.99,
      atr1: "Unlimited Bandwith",
      atr2: "Encrypted Connection",
      atr3: "No Traffic Logs",
      atr4: "Works on all devices",
      atr5: "",
      atr6: ""
  },{
    duration: "6 Month",
    price: 12.99,
    atr1: "Unlimited Bandwith",
    atr2: "Encrypted Connection",
    atr3: "No Traffic Logs",
    atr4: "Works on all devices",
    atr5: "Instant Setup",
    atr6: "5GB of Storage"
  },{
    duration: "1 Year",
    price: 9.99,
    atr1: "Unlimited Bandwith",
    atr2: "Encrypted Connection",
    atr3: "No Traffic Logs",
    atr4: "Works on all devices",
    atr5: "Instant Setup",
    atr6: "50GB of Storage"
  }
]

var pricing = "";

for(let val of prices){
  pricing +=

  `
  <div class="col-md-4 mb-2">
                <div class="card ">
                    <div class="card-body">
                        <h3 class="my-3 text-uppercase">${val.duration}</h3>
                        <span class="d-block text-primary">
                            <span class="align-top">$</span>
                            <span class="display-4 font-weight-bold">${val.price}</span>
                            <span class="text-muted">/month</span>
                        </span>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>${val.atr1}</li>
                            <li>${val.atr2}</li>
                            <li>${val.atr3}</li>
                            <li>${val.atr4}</li>
                            <li>${val.atr5}</li>
                            <li>${val.atr6}</li>
                        </ul>
                        <a href="https://codefactory.wien/de/home/" target="__blank"><button type="button" class="btn btn-lg btn-block btn-primary btn-circle">Select</button></a>
                    </div>
                </div>
            </div>
  `
}
document.getElementById("pricing").innerHTML = pricing;