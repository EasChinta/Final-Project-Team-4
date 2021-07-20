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
    }
  ];
  
  
  
  var newsTxtLink = " ";
  
  newsTxtLink += `<div class="row">`;
  
  for (let val of newsLinkPage) {
    newsTxtLink += 
  
  `
  <div class="col-lg-3 col-md-6 col-sm-12 my-3 mb-3">
  <div class="card bg-transparent border-0" style="width: 18rem;">
  <iframe width="290" height="215" src="${val.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5 class="card-title">${val.title}</h5>
    <p class="card-text">${val.cardText} <br></p>
    <a href="/news.html" class="btn btn-outline-success mybtn ">Read More</a>
  </div>
  </div>
  </div>
  `
  }
  
  newsTxtLink += "</div>";
  
  document.getElementById("newsPage").innerHTML = newsTxtLink;