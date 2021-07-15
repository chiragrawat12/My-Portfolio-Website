let sections = document.querySelectorAll(".section");
let navBarDivsA = document.querySelectorAll(".nav-bar div > a");

navBarDivsA[0].addEventListener("click" , function(e) {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});


window.addEventListener("scroll" , function(e) {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight

        if(this.pageYOffset >= sectionTop - sectionHeight/3){
            current = section.getAttribute("id");
        }
    });

    navBarDivsA.forEach(anchor => {
        anchor.classList.remove("nav-bar-selected");
        if(anchor.classList.contains(current)){
            anchor.classList.add("nav-bar-selected");
        }
    });
});


let texts = ["Web Development" , "Software Development" , "Tester"];
let currText = "";

let index = 0;
let count = 0;
let letter = "";
let typerDiv = document.querySelector(".typer");

(function typer(){
    if(count === texts.length){
        count = 0;
    }

    currText = texts[count];
    letter = currText.slice(0,++index);
    
    typerDiv.innerText = letter;
    
    if(currText.length === letter.length){
        index = 0;
        count ++;
    }
    setTimeout(typer , 400);
}())
