let progressSpans = document.querySelectorAll(".progress span");
let progressSection = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false;


window.onscroll = function () {
  this.scrollY >= 1000 ? upSpan.classList.add("show") : upSpan.classList.remove("show");
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY >= progressSection.offsetTop - 300) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

