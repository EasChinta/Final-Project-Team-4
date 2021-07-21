var course = /** @class */ (function () {
    function course(name, price, img, url) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.url = url;
    }
    course.prototype.display = function () {
        return "\n    <div class=\"col col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center\">\n    <div class=\"card bg-transparent border-0\" style=\"width: 18rem; height: 25rem;\">\n    <img src=\"" + this.img + " \" class=\"card-img-top\" alt=\"courses\" style=\"width: 18rem; height: 15rem\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title d-flex justify-content-center\">" + this.name + " </h5>\n      <p class=\"card-text d-flex justify-content-center\">" + this.price + " \u20AC</p>\n      <a href=\"" + this.url + " \" class=\"btn btn-outline-success mybtn d-flex justify-content-center\">Register</a>\n    </div>\n  </div>\n  </div>\n  ";
    };
    return course;
}());
var frontend = new course("Frontend Development", 2990, "./img/frontend2.jpg", "https://codefactory.wien/de/registration-frontend-developer-de/");
var fullstack = new course("Full Stack Web Developer", 4490, "./img/fullstack.jpeg", "https://codefactory.wien/de/registration-full-stack-web-developer-de/");
var backend = new course("Backend Development", 2990, "./img/backend2.jpeg", "https://codefactory.wien/de/registration-backend-developer-de/");
var tester = new course("Automated Software Tester", 4490, "./img/testing.png", "https://codefactory.wien/de/anmeldung-software-testing-course-de/");
var js = new course("Basic JavaScript Course", 290, "./img/js2.jpg", "https://codefactory.wien/de/registration-basiskurs-javascript-de/");
var basic = new course("Basic HTML/CSS Course", 290, "./img/html-css.jpg", "https://codefactory.wien/de/registration-basiskurs-html-css-de/");
var python = new course("Python Programming", 450, "./img/python.jpg", "https://codefactory.wien/de/registration-python-programming-de/");
var arr = [frontend, fullstack, backend, tester, js, basic, python];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.getElementById("courses").innerHTML += val.display();
}
