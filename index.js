var knapp = document.querySelector("button");
var heading = document.querySelector("h1");


knapp.addEventListener("click", function() {
    heading.innerHTML = "Goodbye World";
});