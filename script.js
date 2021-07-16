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


let texts = ["Web Development." , "Software Development." , "Problem Solving." , "Cyber Security."];
let currText = "";

let index = 0;
let count = 0;
let letter = "";
let typerDiv = document.querySelector(".typer");
let reverse = false;

(async function typer(){
    if(count === texts.length){
        count = 0;
    }

    currText = texts[count];

    if(reverse === true){
        letter = currText.slice(0,--index);
    }else{
        letter = currText.slice(0,++index);
    }
    
    typerDiv.innerText = letter;
    
    if(letter.length === 0 && reverse === true){
        index = 0;
        count ++;
        reverse = false;
    }
    if(letter.length === currText.length){
        reverse = true;
        await new Promise(resolve => setTimeout(resolve, 1500));
    }

    if(reverse === false){
        setTimeout(typer , 200);
    }

    else{
        setTimeout(typer , 50);
    }
}())




