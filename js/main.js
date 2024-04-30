//first slider 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
 

  breakpoints: {
 
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
  
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
   
    },
    1025: {
      slidesPerView: 4.3,
          spaceBetween: 20,
    }
  },
});

//second slider
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    992: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//third slider
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    992: {
      slidesPerView: 2.1,
      spaceBetween: 30,
  
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//hamburger js//
var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById("nav");
var blue = document.getElementById("blue");

icon.addEventListener("click", function () {
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  nav.classList.toggle("show");
  blue.classList.toggle("slide");
});

jQuery(document).ready(function () {
  jQuery(".hamburger-icon").click(function () {
    console.log("erjon");
    jQuery("body").toggleClass("overflow-hidden");
  });
});

//Contact form validation
function validate() {
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  let errors = [];

  if (name.length < 5) {
    errors.push("Please Enter a valid Name");
  }
  if (subject.length < 10) {
    errors.push("Please Enter a Correct Subject");
  }
  if (isNaN(phone) || phone.length != 10) {
    errors.push("Please Enter a valid Phone Number");
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    errors.push("Please Enter a valid Email");
  }
  if (message.length <= 40) {
    errors.push("Please Enter More Than 40 Characters");
  }

  if (errors.length > 0) {
    error_message.innerHTML = errors.join("<br>");
    return false;
  } else {
    alert("Form Submitted Successfully!");
    return true;
  }
}

//counter numbers
const counters = document.querySelectorAll('.number');
const speed = 500;
const formatter = new Intl.NumberFormat();

counters.forEach(counter => {
  const animate = () => {
    let value = +counter.dataset.num;
    let data = +counter.dataset.state;
    let time = value / speed;

    if (data < value) {
      counter.dataset.state = Math.ceil(data + time);
      setTimeout(animate, 1);
    }
    counter.innerText = formatter.format(counter.dataset.state);
  }
  animate();
});


//jquery click navbar z-index
$(document).ready(function(){
  $(".hamburger-icon").click(function(){
 $("nav").toggleClass("add-z-index");
  });
});