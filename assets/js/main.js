const result = document.querySelector("#result")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const playerResult = document.querySelector("#playersResult")
const computerResult = document.querySelector("#computerResult")
const rundenanzeige = document.querySelector("#rundenanzeige")
const radioBtn = document.querySelector("#radioBtn")
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
            return "✂️"
        } else if (computer === 2) {
            return "🪨"
        } else {
            return "🧻"
        }
    }
    let computerChoice = computer()

    if (start < rundenType) {
        radioBtn.style.display = 'none'
        if (computerChoice === playersChoice) {
            result.textContent = "Draw"
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
            rundenanzeige.innerHTML = `<h2>${counter} / ${rundenType}</h2>`
        } else if ((computerChoice === "" && playersChoice === "🪨") || (computerChoice === "🪨" && playersChoice === "🧻") || computerChoice === "🧻" && playersChoice === "✂️") {
            start++
            result.textContent = "You win this round"
            yourScore++
            counter++
            playerScore.textContent =`${yourScore} `
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
            rundenanzeige.innerHTML = `<h2>${counter} / ${rundenType}</h2>`
            if ((rundenType == 5 && yourScore == 3) || (rundenType == 7 && yourScore == 4) || (rundenType == 9 && yourScore == 5) || (rundenType == 11 && yourScore == 6)){
                const popUpPlayer = document.createElement("div")
                popUpPlayer.classList.add("popUpPlayer")
                popUpPlayer.textContent = "You win!!"
                popUpPlayer.appendChild(reset)
                document.body.appendChild(popUpPlayer)
            }
        } else if ((computerChoice === "🪨" && playersChoice === "✂️") || (computerChoice === "🧻" && playersChoice === "🪨") || computerChoice === "✂️" && playersChoice === "🧻") {
            start++
            counter++
            result.textContent = "You lose this round"
            hisScore++
            computerScore.textContent =` ${hisScore}`
            playerResult.textContent = `${playersChoice}`
            computerResult.textContent = `${computerChoice}`
            rundenanzeige.innerHTML = `<h2>${counter} / ${rundenType}</h2>`
            if ((rundenType == 5 && hisScore == 3) || (rundenType == 7 && hisScore == 4) || (rundenType == 9 && hisScore == 5) || (rundenType == 11 && hisScore == 6)){
                const popUpComputer = document.createElement("div")
                popUpComputer.classList.add("popUpComputer")
                popUpComputer.textContent = "Computer wins!!"
                popUpComputer.appendChild(reset)
                document.body.appendChild(popUpComputer)
                
            }
        }
    }
}

schereBtn.addEventListener("click", () => game("✂️"))
steinBtn.addEventListener("click", () => game("🪨"))
papierBtn.addEventListener("click", () => game("🧻"))

reset.addEventListener("click", () => location.reload())