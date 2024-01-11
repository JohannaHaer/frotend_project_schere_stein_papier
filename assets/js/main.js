

const result = document.querySelector("#result")
let playerScore = document.querySelector("#playerScore")
let computerScore = document.querySelector("#computerScore")
let yourScore  = 0
let hisScore = 0

const playerResult = document.querySelector("#playersResult")
const computerResult = document.querySelector("#computerResult")

const rundenanzeige = document.querySelector("#rundenanzeige")
// const schereBtn = document.querySelector("#schere")
// const steinBtn = document.querySelector("#stein")
// const papierBtn = document.querySelector("#papier")

const reset =  document.querySelector("#reset")

let start = 0
let counter = 1

let rundenType = document.querySelector("input[type=radio]:checked")

const game = (playersChoice) => {
    rundenType = document.querySelector("input[type=radio]:checked").value

    const computer = () => {
        const computer = Math.floor(Math.random() * 3) +1
        if(computer === 1) {
            return "schere"
        } else if (computer === 2) {
            return "stein"
        } else {
            return "papier"
        }
    }

    let computerChoice = computer()
    if (start < rundenType) {
        
        rundenanzeige.innerHTML = `<h2>${counter++} / ${rundenType}</h2>`

        if (computerChoice === playersChoice) {
            start++
            result.textContent = "Draw"
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
        } else if ((computerChoice === "schere" && playersChoice === "stein") || (computerChoice === "stein" && playersChoice === "papier") || computerChoice === "papier" && playersChoice === "schere") {
            start++
            result.textContent = "You win this round"
            yourScore++
            playerScore.textContent =`${yourScore}`
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
        } else if ((computerChoice === "stein" && playersChoice === "schere") || (computerChoice === "papier" && playersChoice === "stein") || computerChoice === "schere" && playersChoice === "papier") {
            start++
            result.textContent = "You lose this round"
            hisScore++
            computerScore.textContent =`${hisScore}`
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
        }
    }

}

const schereBtn = () => game("schere")
const steinBtn = () => game("stein")
const papierBtn = () => game("papier")