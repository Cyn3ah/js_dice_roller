
let rollBtn = document.querySelector('#rollBtn')
let totalScore = document.querySelector('#totalScore')
// let showAllRolls = document.querySelector('#showDice')
let displayRollBtn = document.querySelector('#showAllRolls')
// let displayAllDie = document.querySelector('#showDice')
let dieRolls = []

rollBtn.addEventListener("click", function() {
    let dieRollRequest = document.querySelector('#numberOfRolls').value

    if (dieRollRequest >= 21) {			
        alert("we only have 20 dice")		
    }		
        
    else if (dieRollRequest <= 0) {			
        alert("you need at least one die to Roll 'em!")
    }

    else for (let i = 0; i < dieRollRequest; i++) {

        let diceMath = Math.floor((Math.random() * 6) + 1)
        dieRolls.push(diceMath)
        console.log(dieRolls[i])
    }

    let sum = 0
      
    for (let i = 0; i < dieRolls.length; i++) {
        
        sum += dieRolls[i]
        totalScore.innerHTML = sum

    }
})

displayRollBtn.addEventListener("click", function() {
    let displayAllDie = document.querySelector('#showDice')

    for (let i = 0; i < dieRolls.length; i++) {
        
        displayAllDie.innerHTML += '<li id="liDie">' + dieRolls[i] + '</li>' 

        // dieRolls += dieRollRequest

        console.log(displayAllDie)
    }

    //loop thru array and print individual li on page

})
