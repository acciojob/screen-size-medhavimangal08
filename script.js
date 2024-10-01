let heading = document.querySelector("h1");
window.addEventListener('resize', function() {
    heading.innerText = "Width: " + window.innerWidth + " and Height: " + window.innerHeight;
});