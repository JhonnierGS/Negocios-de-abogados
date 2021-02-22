
window.addEventListener("scroll", function(){
    let header = document.getElementById('nav');
    let bars = document.getElementById('bars')
    header.classList.toggle("sticky", window.scrollY > 10);
    bars.classList.toggle("stickyBars", window.scrollY > 10);
})