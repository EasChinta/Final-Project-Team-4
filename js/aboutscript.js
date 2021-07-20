

var teachers = [{
    name:"Christoph Pirringer",
    status: "Founder & CEO",
    img: "../img/img-teach/Christoph.png"
},{
    name:"Lisa Duschek",
    status: "Founder & CEO",
    img: "../img/img-teach/Lisa.png"
},{
    name: "Giath Serri",
    status:"Trainer",
    img:"../img/img-teach/Serri.png"
},{
    name:"Irati Larreina",
    status:"Trainer",
    img:"../img/img-teach/Irati.png"
},{
    name:"Acilio Carraro",
    status:"Trainer",
    img:"../img/img-teach/Acilio.png"
},{
    name:"Smilja Simikic",
    status:"Secretary",
    img:"../img/img-teach/Smilija.jpg"
}]

for (let val of teachers){
    document.getElementsByClassName("teachers")[0].innerHTML +=`<div class="col col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
    <div class="container p-5">
    
    <div class="card" style="width: 18rem;">
  <img src="${val.img} " class="card-img-top" alt="teachers">
  <div class="card-body">
    <p class="card-text d-flex justify-content-center">${val.name} </p>
    <p class="card-text text-muted d-flex justify-content-center">${val.status} </p>
  </div>
</div>
</div>`
}