var toggleSideBar = function(show) {
    let navbar = document.getElementById("nav");
    if(show) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}
var navToggle = function() {
    let width = document.body.clientWidth;
    setTimeout(function() {
        if(width > 920) {
            toggleSideBar(true);
        } else {
            toggleSideBar(false);
        }
    },100)
}