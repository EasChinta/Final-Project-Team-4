//News Page//

var newsLinkPage = [
    {
      title: "You think you can't get into IT? | CodeFactory Vienna",
      cardText: "You think you can't get into IT? Listen to what our Full Stack Web Developer Graduates Christoph and Darko have to say about that. YOU CAN DO IT.",
      video: "https://www.youtube.com/embed/LK3cLNexNFk"
    },
    {
      title: "Tipps für zukünftige StudentInnen | CodeFactory Vienna",
      cardText: "Our Full Stack Web Developer Graduates Beeke and Sarah have some tips for future students.",
      video: "https://www.youtube.com/embed/FCtiIwN0lug"
    },
    {
      title: "You want a well paying career? Become a Software Tester| CodeFactory Vienna",
      cardText: "You want a well-paying career? Find out what an Automated Software Tester is and how YOU can become one!",
      video: "https://www.youtube.com/embed/7qAC2f2lWfQ"
    },
    {
      title: "Advice for our future Students | CodeFactory Vienna",
      cardText: "Watch our Full Stack Web Development alumni talk about CodeFactory Vienna.",
      video: "https://www.youtube.com/embed/Ku_X_n1-gYw"
    },
    {
      title: "Interview: Python Graduate | CodeFactory Vienna",
      cardText: "Python is one of the most versatile and powerful programming languages out there.",
      video: "https://www.youtube.com/embed/GECVasl3kVY"
    },
    {
      title: "Code Review Advice | CodeFactory Vienna",
      cardText: "Our Full Stack Web Developer graduate Boris talks about code reviews and gives advice for future students!",
      video: "https://www.youtube.com/embed/-XR93HWAR0g"
    }
  ];
  
  
 
  
  for (let val of newsLinkPage) {
    document.getElementsByClassName("newsLink")[0].innerHTML +=
  `<div class="col-lg-4 col-md-6 col-sm-12 my-3 mb-3">
  <div class="card bg-transparent border-0" style="width: 18rem; height: 28rem;">
  <iframe width="290" height="215" src="${val.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5 class="card-title">${val.title}</h5>
    <p class="card-text">${val.cardText} <br></p>
    <a href="/news.html" class="btn btn-outline-success mybtn ">Read More</a>
  </div>
  </div>
  `
  }


  var testimonals = [
    {
      name: "Benjamin",
      age: 21,
      img:"../img/benjamin.jpg",
      details:"I found out about CodeFactory through a friend of a friend who knew I was interested in coding and recommended it. I looked up the homepage and checked it out on YouTube – how long it will take, what it is about, the prices and so on. I decided to put my trust in CodeFactory. I had tried studying at University, but I didn’t enjoy it. I was not interested in all the additional courses that we had to do other than coding. FHs are similar. At such institutions it just takes longer and you’re rarely looked at as an individual. At CodeFactory – it’s much more targeted – it is just coding – that’s why I chose it. I expected it to be more school-like, in the sense that the teacher shows something and the students try to repeat it. It is a much more free environment – but one has to do a lot of self-study. So the school has a unique style of relaying the material. In contrast with universities, there is always someone around to ask for help and advice – both the instructors and your peers – it’s more personal, in a smaller group and not in a lecture hall with 300 other anonymous students. It also encourages self-enterprise – because there are many ways of doing something and not only a “single correct way” like at a university. The feeling is more relaxed and familiar. I am doing the Full Stack course (15 weeks) and I am now in week 4. In comparison with Front-End or Back-end courses only, it IS 2x the time and 2x the price BUT I think it is important to get the full education so that you have access to all opportunities. It is just too limiting to do just the Front End or just the Back End. It is also much faster than a regular degree programme – it is definitely for people who want to enter the labor market faster. It is challenging, but also interesting – I want to go more into coding afterwards and look for a good job. Traditionally, companies look for a University or FH diploma, but today’s general lack of labor force transformed expectations and nowadays they really look at what you are capable of."
  
    },{
      name:"Judith",
      age: 40,
      img:"../img/judith.jpg",
      details:"I learnt about CodeFactory when I saw Lisa (one of the co-founders) at a Back-End talk in, I think, May 2018. Several things attracted me to CodeFactory – the courses are in English, it’s only 15 weeks long and, most importantly, you can do it! The alternatives I looked up were expensive MA degrees which included all sorts of other things about leadership and management styles – things I have 15 years of experience with – so I did not want to pay for that. I studied business and economics and I wanted to go into computer science. Most business professionals of my generation lack specifically this background . At the time I was studying, the computer science we were taught was how to make databases in Excel and little else. It had nothing to do with coding. Now things have changed. I chose CodeFactory because it is much more focused – it is not burdened by unnecessary expensive courses on unnecessary side topics. It targets specifically what I am missing in my education. After all, in a modern managerial environment I should be able to talk to programmers."
      
    }
  ]

  let i = 0;
  for (let val of testimonals){
    document.getElementsByClassName("testimonials")[0].innerHTML +=
    `<div class="col-md-6 mb-2">
    <div class="card h-100 bg-transparent border-0">
        <div class="card-body">
      <a href="#" data-toggle="modal" data-target="#exampleModalLong${i}">
          
          
  
    <img src="${val.img} " class="card-img-top" alt="teachers">
    <div class="overlay overlayblur">
          <div class="overlay-description">${val.name}'s Experience in CodeFactory</div>
        </div>
    <div class="card-body">
      <p class="card-text d-flex justify-content-center">${val.name} </p>
      <p class="card-text text-muted d-flex justify-content-center">${val.age} years old </p>
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
                  <img src="${val.img}" style="width:100%" class="modal-title" id="exampleModalLongTitle${i}"></img>
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