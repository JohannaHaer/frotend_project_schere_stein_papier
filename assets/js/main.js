const computer = Math.floor(Math.random() * 3) +1
console.log(computer);


const schereBtn = document.querySelector("#schere")
const steinBtn = document.querySelector("#stein")
const papierBtn = document.querySelector("#papier")

const reset =  document.querySelector("#reset")


let start = 0

let rundenType = document.querySelector("input[type=radio]:checked")
