// Your code goes here

//#1: mouseover
document.querySelector(".logo-heading").setAttribute("id","h1");
h1.addEventListener("mouseover", e => {
    document.getElementById("h1").style.color = "pink";
});


//#2: keydown
const body = document.querySelector("body");
body.addEventListener("keydown", e => {
    if(e.key === "Escape")
    {
        body.style.backgroundColor = "turquoise";
        document.getElementById("h1").style.color = "white";
    }
});
body.addEventListener("keydown", e => {
    if(e.key === "Enter")
    {
        body.style.backgroundColor = "grey";
        document.getElementById("h1").style.color = "white";
    }
});


//#3: wheel
const img = document.querySelectorAll("img");
img[0].setAttribute("id","img1");
img[0].addEventListener("wheel", e => {
    img[0].style.borderRadius = "50%";
    img[0].style.border = "10px solid pink";
});


//#4: click
img[1].setAttribute("id","img2");
img[1].addEventListener("click", e => {
    img[1].style.border = "10px dotted black";
    img[1].style.cssFloat = "right";
    document.querySelector(".home").style.fontFamily = "Verdana, Geneva, sans-serif";
    document.querySelector(".home").style.color = "pink";
});

//#5 mousedown
img[2].setAttribute("id", "img3");
img[2].addEventListener("mousedown", e => {
    img[2].style.width = "20%";
});

//#6 mouseover
img[2].addEventListener("mouseover", e => {
    img[2].style.width = "47%";
});

//

//navigation prevent default
const nav = document.querySelectorAll("a");

for(let i=0; i<nav.length; i++)
{
    nav[i].addEventListener('click', e => {
        e.preventDefault();
    });
}