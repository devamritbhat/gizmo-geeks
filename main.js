window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (scrolled > 99.48) scrolled = 100;
  document.getElementById("scroll-indicator").style.width = scrolled + "%";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
        if (entry.target.classList.contains("typewriter")){
          typeWriter();
        } else {
            entry.target.classList.add('show');
        }
    } else {
        entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var i = 0;
var txt = 'Made with ❤️ by Devamrit <33';

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".typewriter > span").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
  }
}

function websiteVisits(response) {
  document.querySelector("#views").textContent = response.value + " views";
}
