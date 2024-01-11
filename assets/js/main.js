const result = document.querySelector("#result")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const playerResult = document.querySelector("#playersResult")
const computerResult = document.querySelector("#computerResult")
const rundenanzeige = document.querySelector("#rundenanzeige")
let rundenType = document.querySelector("input[type=radio]:checked")

const schereBtn = document.querySelector("#schere")
const steinBtn = document.querySelector("#stein")
const papierBtn = document.querySelector("#papier")
const reset =  document.querySelector("#reset")

let start = 0
let counter = 0
let yourScore  = 0
let hisScore = 0

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
        
        if (computerChoice === playersChoice) {
            result.textContent = "Draw"
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
            rundenanzeige.innerHTML = `<h2>${counter} / ${rundenType}</h2>`
        } else if ((computerChoice === "schere" && playersChoice === "stein") || (computerChoice === "stein" && playersChoice === "papier") || computerChoice === "papier" && playersChoice === "schere") {
            start++
            result.textContent = "You win this round"
            yourScore++
            counter++
            playerScore.textContent =`${yourScore}`
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
            rundenanzeige.innerHTML = `<h2>${counter} / ${rundenType}</h2>`
        } else if ((computerChoice === "stein" && playersChoice === "schere") || (computerChoice === "papier" && playersChoice === "stein") || computerChoice === "schere" && playersChoice === "papier") {
            start++
            counter++
            result.textContent = "You lose this round"
            hisScore++
            computerScore.textContent =`${hisScore}`
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
            rundenanzeige.innerHTML = `<h2>${counter} / ${rundenType}</h2>`
        }
    }
}

schereBtn.addEventListener("click", () => game("schere"))
steinBtn.addEventListener("click", () => game("stein"))
papierBtn.addEventListener("click", () => game("papier"))

reset.addEventListener("click", () => location.reload())