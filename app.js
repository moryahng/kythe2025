var heroheight = document.getElementById('herobanner').clientHeight;
document.getElementById("aboutus").style.marginTop = heroheight + "px";

window.addEventListener('resize', function(event) {
    var heroheight = document.getElementById('herobanner').clientHeight;
    document.getElementById("aboutus").style.marginTop = heroheight + "px";
}, true);

function scrollToBuyACask() {
    const isMobile = window.innerWidth <= 900;
    const targetId = isMobile ? 'anchor_buyacask_mobile' : 'anchor_buyacask_desktop';
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

//
//window.onscroll = function (event) {
//    var scroll = window.pageYOffset;
//    if (scroll > heroheight) {
//       document.getElementById("navbar_white").style.display = "none";
//        document.getElementById("navbar").style.display = "block";
//    }
//else{
//    document.getElementById("navbar_white").style.display = "block";
//    document.getElementById("navbar").style.display = "none";  
//}}
