// Second Page Cards and Info //

var secondPageCards = [
  {
    title: "Title",
    cardText: "blablablablablabla",
    lastUpdated: "some minutes ago",
    image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
  },
  {
    title: "Title",
    cardText: "hi hihihihihi",
    lastUpdated: "5 minutes ago",
    image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
  },
];

var txt = " ";

txt += `<div class="row">`;

for (let val of secondPageCards) {
  txt += `
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${val.image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${val.title}</h5>
                  <p class="card-text">${val.cardText}</p>
                  <p class="card-text"><small class="text-muted">${val.lastUpdated}</small></p>
                  <a href="#" class="btn btn-outline-success mybtn"
                  >Read more</a
                >
                </div>
              </div>
        

    `;
}

txt += `</div>`;

document.getElementById("pageTwo").innerHTML = txt;






// Third page Cards and info //

var thirdPageCards = [
  {
    title: "Title",
    cardText: "change text here",
  },
  {
    title: "Title",
    cardText: "change text here",
  },
  {
    title: "Title",
    cardText: "change text here"
  },
];

var txt3 = " ";
txt3 += '<div class="row">';

for (let val of thirdPageCards) {
    txt3 += `
    <div class="card bg-transparent border-success mb-3" style="max-width: 18rem;">
    <div class="card-header">${val.title}</div>
    <div class="card-body text-success">
      <h5 class="card-title">${val.cardText}</p>
    </div>
  </div>
            `;
}

txt3 += "</div>";

document.getElementById("pageThree").innerHTML = txt3;




//Fourth page Cards and info //


var fourthPageCards = [
    {
      title: "Title",
      cardText: "change text here",
      price: 4500,
       image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
    },
    {
      title: "Title",
      cardText: "change text here",
      price: 4500,
       image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
    },
    {
      title: "Title",
      cardText: "change text here",
      price: 4500,
       image: "https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185085__340.jpg"
    },
  ];


  var txt4 = " ";

  txt4 += `<div class="row">`;
  
  for (let val of fourthPageCards) {
    txt4 += 

  `
  <div class="card bg-transparent" style="width: 18rem;">
  <img src="${val.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.title}</h5>
    <p class="card-text">${val.cardText} <br> ${val.price}</p>
    <a href="#" class="btn btn-outline-success mybtn ">Select</a>
  </div>
</div>
  `
}

txt4 += "</div>";

document.getElementById("pageFour").innerHTML = txt4;