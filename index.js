let sum = 0
let cardArr = []
let card = 0
let cardMsg = ""
let msg = ""
let isAlive = false
let hasBlackJack = false

function renderGame() {
    
    cardMsg =  "Cards: "
    for(let i = 0;i<cardArr.length;i++)
    {
        cardMsg +=  cardArr[i] +  " " 
    }
      
    
    if(sum < 21)
    {
        msg = "Do you want to draw a new card?"
    }

    else if (sum == 21)
    {
        msg = "You've got BlackJack!!"
        hasBlackJack = true
        document.querySelector("#result").textContent = "Result: Won"
    }  

    else
    {
        msg = "You're out of the game!"
        document.querySelector("#result").textContent = "Result: Lost"
        isAlive = false
    }

    document.querySelector("#message").textContent = msg
    document.querySelector("#cardElement").textContent = cardMsg
    document.querySelector("#sumElement").textContent = "Sum: " + sum
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    sum = 0
    card = 0
    cardMsg = ""
    cardArr = []
    document.querySelector("#result").textContent = ""
    document.querySelector("#nameElem").textContent = ""
    let playerName = prompt("Enter your name","Guest")
    if(playerName != null)
    {
        document.querySelector("#nameElem").textContent = " Player: " + playerName
    }
    msg = "Do you want to draw a new card?"
    newCard()
}

function newCard() {
    if(isAlive && !hasBlackJack)
    {
        let card = randomNo()
        sum = sum + card
        cardArr.push(card)
        renderGame()
    }
    
}

function randomNo(){
    let num = Math.floor(Math.random()*13) + 1
    if(num === 1) {   // FOR ACE RETURN 11
        return 11
    }
    else if(num <= 10)
        return num
    else        // FOR QUEEN, KING, JACK IE GREATER THAN 10, RETURN 10
        return 10
    
}