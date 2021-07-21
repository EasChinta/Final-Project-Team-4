var teachers = [
  {
    name: "Christoph Pirringer",
    status: "Founder & CEO",
    img: "../img/img-teach/Christoph.png",
  },
  {
    name: "Lisa Duschek",
    status: "Founder & CEO",
    img: "../img/img-teach/Lisa.png",
  },
  {
    name: "Giath Serri",
    status: "Trainer",
    img: "../img/img-teach/Serri.png",
  },
  {
    name: "Irati Larreina",
    status: "Trainer",
    img: "../img/img-teach/Irati.png",
  },
  {
    name: "Acilio Carraro",
    status: "Trainer",
    img: "../img/img-teach/Acilio.png",
  },
  {
    name: "Smilja Simikic",
    status: "Secretary",
    img: "../img/img-teach/Smilija.jpg",
  }
];

for (let val of teachers) {
  document.getElementsByClassName("teachers")[0].innerHTML += `
  <div class="col-md-4 mb-2">
  <div class="card h-100 bg-transparent border-0">
      <div class="card-body">
    <a href="#">
  <img src="${val.img} " class="card-img-top" alt="teachers">
  <div class="overlay overlayblur">
        <div class="overlay-description">See more about ${val.name}</div>
      </div>
  <div class="card-body">
    <p class="card-text d-flex justify-content-center">${val.name} </p>
    <p class="card-text text-muted d-flex justify-content-center">${val.status} </p>
  </div>
</div>
</a>
</div>
</div>
</div>
</div>`;
}
