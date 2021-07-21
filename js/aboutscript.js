var teachers = [
  {
    name: "Christoph Pirringer",
    status: "Founder & CEO",
    img: "../img/img-teach/Christoph.png",
    details:"Christoph Pirringer, born in Burgenland, studied Petroleum Engineering in Leoben and has been working regularly for years in the field of training and sales for IT and electronics companies, where he also discovered his enthusiasm for programming. In addition to his job as a Web Developer, you can also meet him as a volunteer paramedic in the ambulance. christoph.pirringer@codefactory.wien"
  },
  {
    name: "Lisa Duschek",
    status: "Founder & CEO",
    img: "../img/img-teach/Lisa.png",
    details:"Lisa Duschek, born in Burgenland, is currently studying law, physical geography and geo-information at the University of Vienna. In 2015, she trained as a web developer in Portland, Oregon. She was with Christoph Pirringer in the “Epicodus” Bootcamp and thinks no one should have to travel that far to receive a high quality and time efficient training. lisa.duschek@codefactory.wien"
  },
  {
    name: "Giath Serri",
    status: "Trainer",
    img: "../img/img-teach/Serri.png",
    details:"Born in May 1990. Having earned a diploma from the Damascus Technical Institute of Computer Engineering, Ghiath has worked in IT, as a Computer Technician in Damascus, Syria as well as in Vienna. Ghiath has decided to complement his work field through Web Development and attended the Full Stack Web Development Course at CodeFactory. Additionally, Ghiath has experience in the programminging languages C++ and C#. He sees programming as an art, in which he can apply himself fully. Follow"
  },
  {
    name: "Irati Larreina",
    status: "Trainer",
    img: "../img/img-teach/Irati.png",
    details:"Irati Larreina, born and raised in the Basque Country (Spain). She studied Physics in Leioa and completed her Licenciatura and Master degrees in the University of La Laguna (Tenerife). Doing her studies in Astrophysics she discovered her love for Programming, specialising in Python and exploring data science and machine learning. After being an astronomy camp trainer for several years and a statistics & programming assistant teacher at the University of Vienna, she could finally combine her two passions at CodeFactory: programming and education."
  },
  {
    name: "Acilio Carraro",
    status: "Trainer",
    img: "../img/img-teach/Acilio.png",
    details:"Holding a software development degree from Brazil, a Master’s degree in product management from Spain, after 12 years in the field of communication/training and people/product management, decided to go back to the technological roots and joined the Full Stack Web Development course at Code Factory. „IT / Programming has always been a part of me, now it‘s time to pass this knowledge on, in order to help other people to change their lives, as it has changed mine."
  },
  {
    name: "Smilja Simikic",
    status: "Secretary",
    img: "../img/img-teach/Smilija.jpg",
    details:"After successfully finishing her studies, Smilja worked as a hotel manager in a 4-star hotel in Salzburg where she gathered valuable experiences. Smilja joined the CodeFactory team in 2017, where she is responsible for the administration and organisation. “It is important to me, that each student feels welcomed and supported in CodeFactory”"
  }
];
let i = 0;
for (let val of teachers) {
  document.getElementsByClassName("teachers")[0].innerHTML += `
  <div class="col-md-4 mb-2">
  <div class="card h-100 bg-transparent border-0">
      <div class="card-body">
    <a href="#" data-toggle="modal" data-target="#exampleModalLong${i}">
        
        

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
</div>
<!-- Modal -->
        <div class="modal fade" id="exampleModalLong${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle${i}" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <img src="${val.img}" style="width:300px" class="modal-title" id="exampleModalLongTitle${i}"></img>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
               ${val.details}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
`;
i++;
}
