
let rollBtn = document.querySelector('#rollBtn')
let diceRolls = document.querySelector('#diceRolls')
let totalScore = document.querySelector('#totalScore')
let showAllRolls = document.querySelector('#totalScore')
let displayRollBtn = document.querySelector('#showAllRolls')
let showDice = document.querySelector('#showDice')
let dieRolls = []

rollBtn.addEventListener("click", function() {
    let dieRollRequest = document.querySelector('#numberOfRolls').value

    for (let i = 0; i < dieRollRequest; i++) {

        let diceMath = Math.floor((Math.random() * 6) + 1)
        dieRolls.push(diceMath)
        console.log(dieRolls[i])

    let sum = 0
        
    for (let i = 0; i < dieRolls.length; i++)
        
        sum += dieRolls[i]
        totalScore.innerHTML = sum

    }
})

displayRollBtn.addEventListener("click", function() {
    let displayAllDie = dieRolls[dieRolls.length]

    for (let i = 0; i < displayAllDie; i++) {
        
        let dieRollRequest = '<li id="showDice">' + dieRolls + '</li>';
        dieRolls.innerHTML += dieRollRequest;

        console.log(dieRollRequest)

    }
})
