let scroller = document.querySelector(".scroller");
let height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    console.log(height);
    const scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
});

let upSpan = document.querySelector(".up");

// window.onscroll = function () {
//     this.scrollY >= 1000 ? upSpan.classList.add("show") : upSpan.classList.remove("show");
// };

upSpan.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};