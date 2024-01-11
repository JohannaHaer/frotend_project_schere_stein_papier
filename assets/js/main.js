const computer = Math.floor(Math.random() * 3) +1
console.log(computer);
let schere, stein, papier


let roundName = document.getElementsByName("runden")

const schereBtn = document.querySelector("#schere")
const steinBtn = document.querySelector("#stein")
const papierBtn = document.querySelector("#papier")

const reset =  document.querySelector("#reset")


const game = (runden) => {
    for(let i = 0; i<roundName.length; i++){
        if(roundName[i].checked){
    
            console.log(runden);
        }
    }console.log(roundName.value);
}

