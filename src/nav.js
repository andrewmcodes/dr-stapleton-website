function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "hidden") {
        x.classList.toggle("hidden");
    } else {
        console.log("nav");
        x.className = "hidden";
    }
}