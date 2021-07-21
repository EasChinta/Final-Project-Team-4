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
    details:
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
                <h5 class="modal-title" id="exampleModalLongTitle${i}">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
               
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
`;
i++;
}
