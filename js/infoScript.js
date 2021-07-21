// Second Page Cards and Info //

var secondPageCards = [
  {
    title: "Education <br> Python",
    cardText:
      "Learn to think like an IT specialist an essential skill in our modern digital world using the popular Python programming language.",
    image: "./img/python.jpg",
  },
  {
    title: "Education <br> Automated software testing",
    cardText:
      "The CodeFactory Automated Software Tester course prepares you for your future job as a junior software tester, using state of the art tools to test the quality of software in an automated and efficient way.",
    image: "./img/testing.png",
  },
];

var txt = " ";

txt += `<div class="row">`;

for (let val of secondPageCards) {
  txt += `
            <div class="row g-0">
              <div class="col-lg-3 col-md-6 col-sm-12 my-3 mb-3">
                <img src="${val.image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${val.title}</h5>
                  <p class="card-text">${val.cardText}</p>
                  <a href="/course.html" class="btn btn-outline-success mybtn"
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
    title: "In 15 weeks to junior developer level",
    cardText:
      "Learn everything you need about Frontend and Backend development in just 15 weeks to get your new career started. Work hands-on and with practical examples from the first day!",
  },
  {
    title: "Hands-on learning",
    cardText:
      "The relatively short duration of just 15 weeks is made possible by a maximum of practical work. We believe that programming can only be learned through the act, which is why we program from day one in teams of two or larger group, solving practical problems.",
  },
  {
    title: "Gain experience in real world projects",
    cardText:
      "Many of our graduate projects are issued by real clients, ranging from NGOs to medium-sized companies. The start of your new career gets a huge boost with those references in your portfolio!",
  },
];

var txt3 = " ";
txt3 += '<div class="row">';

for (let val of thirdPageCards) {
  txt3 += `
  <div class="col-md-4 mb-2">
  <div class="card bg-transparent h-100" style="background: rgb(216,226,220);
  background: linear-gradient(90deg, rgba(216,226,220,1) 0%, rgba(245,181,135,1) 100%);">
      <div class="card-body">
    <div class="card-header">${val.title}</div>
    <div class="card-body text-success">
      <h5 class="card-title">${val.cardText}</p>
    </div>
  </div>
  </div>
  </div>
            `;
}

txt3 += "</div>";

document.getElementById("pageThree").innerHTML = txt3;

//News Page//

var newsPageCards = [
  {
    title: "You think you can't get into IT? | CodeFactory Vienna",
    cardText:
      "You think you can't get into IT? Listen to what our Full Stack Web Developer Graduates Christoph and Darko have to say about that. YOU CAN DO IT.",
    video: "https://www.youtube.com/embed/LK3cLNexNFk",
  },
  {
    title: "Tipps für zukünftige StudentInnen | CodeFactory Vienna",
    cardText:
      "Our Full Stack Web Developer Graduates Beeke and Sarah have some tips for future students.",
    video: "https://www.youtube.com/embed/FCtiIwN0lug",
  },
];

var newsTxt = " ";

newsTxt += `<div class="row justify-content-center">`;

for (let val of newsPageCards) {
  newsTxt += `
<div class="col-md-4 mb-2">
                <div class="card h-100 bg-transparent">
                    <div class="card-body">

          <iframe width="100%" height="215" src="${val.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h5 class="card-title">${val.title}</h5>
        <p class="card-text">${val.cardText} <br></p>
        <a href="/news.html" class="btn btn-outline-success mybtn ">Read More</a>
        </div>
        </div>
        </div>

`;
}

newsTxt += "</div>";

document.getElementById("newsPage").innerHTML = newsTxt;

//Fourth page Cards and info //

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

var txt4 = " ";

txt4 += `<div class="row justify-content-center">`;

for (let val of teachers) {
  txt4 += `
  <div class="col-md-4 mb-2">
  <div class="card bg-transparent border-0 h-100">
      <div class="card-body">
  <img src="${val.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.name}</h5>
    <p class="card-text">${val.status} <br> </p>
    <div>
    <a href="/aboutus.html" class="btn btn-outline-success mybtn ">Read More</a></div>
  </div>
</div>
</div>
</div>
  `;
}

txt4 += "</div>";

document.getElementById("pageFour").innerHTML = txt4;

//Pricing Plan

var prices = [
  {
    duration: "3 Months",
    price: 4490,
    atr1: "Full Stack Web Developer",
    atr2: "FRONT-END",
    atr3: "BACK-END",
    atr4: "",
    atr5: "",
    atr6: ""
  },
  {
    duration: "3 Months",
    price: 4490,
    atr1: "Automatedd Software Tester",
    atr2: "Be the nightmare of Web Developers",
    atr3: "",
    atr4: "",
    atr5: "",
    atr6: ""
  },
  {
    duration: "1 Month",
    price: 450,
    atr1: "Python Programming",
    atr2: "Learn the most used programming language in the world",
    atr3: "",
    atr4: "",
    atr5: "",
    atr6: ""
  },
];

var pricing = "";

for (let val of prices) {
  pricing += `
  <div class="col-md-4 mb-2">
                <div class="card h-100" style="background: rgb(216,226,220);
                background: linear-gradient(90deg, rgba(216,226,220,1) 0%, rgba(245,181,135,1) 100%);">
                    <div class="card-body">
                        <h3 class="my-3 text-uppercase">${val.duration}</h3>
                        <span class="d-block text-primary">
                            <span class="align-top">€</span>
                            <span class="display-4 font-weight-bold">${val.price}</span>
                        </span>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>${val.atr1}</li>
                            <li>${val.atr2}</li>
                            <li>${val.atr3}</li>
                            <li>${val.atr4}</li>
                            <li>${val.atr5}</li>
                            <li>${val.atr6}</li>
                        </ul>
                        <a href="https://codefactory.wien/de/home/" target="__blank"><button type="button" class="btn btn-lg btn-outline-success mybtn">Select</button></a>
                    </div>
                </div>
            </div>
  `;
}
document.getElementById("pricing").innerHTML = pricing;



