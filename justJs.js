//this file is not connected to webpage just for future js reference

let question=document.getElementsByClassName("question");
let answer=document.getElementsByClassName("answer");
let btn=document.getElementsByClassName("btn");


    for(let i=0; i<btn.length; i++){
        quesiton[i].addEventListener('click',() =>{
            question[i].classList.toggle("clicked-question");
            answer[i].classList.toggle("hidden");
            
            for(let j=0; j<btn.length; j++){
                if(j == i)
                continue;
                question[j].classList.remove("clicked-question");
                answer[j].classList.add("hidden");
            }

        });

        btn[i].addEventListener('click',() =>{
            question[i].classList.toggle("clicked-question");
            answer[i].classList.toggle("hidden");

            for(let j=0; j<btn.length; j++){
                if(j == i)
                continue;
                question[j].classList.remove("clicked-question");
                answer[j].classList.add("hidden");
            }

        });
    }