// Scroll up

document.getElementById("button__up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)";
    }
}

buttonUp = document.getElementById("button__up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if(scroll > 600){
        buttonUp.style.transform = "scale(1)";
    }
    else if(scroll < 600){
        buttonUp.style.transform = "scale(0)";
    }

}


