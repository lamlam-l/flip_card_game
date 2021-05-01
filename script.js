function generateRandomList() {
    function randomBetween(begin, end) {
        return begin + (Math.floor(Math.random()*(end+1)))
    }
    var list = []
    for (var i = 0; i < numberOfCard; i++) {
        list.push(i)
        list.push(i)
    }
    var randomNumber;
    for (var i = 1; i <= numberOfCard*2; i++) {
        randomNumber = randomBetween(0, 12-i)
        cardIdList.push(list[randomNumber])
        list.splice(randomNumber, 1)
    }
}

function renderItem() {
    function createACard(stt, cardId) {
        var card = document.createElement("div")
        // card.classList.add(stt, cardId)
        card.addEventListener("click", function(){
            flip(stt, cardId)
        }, true)
        var frontFace = document.createElement("div")
        frontFace.className = "front-face"
        var backFace = document.createElement("div")
        backFace.className = "back-face"
        var frontImage = document.createElement("img")
        frontImage.src = "./img/upFace" + (cardId + 1) + ".jpg"
        var backImage = document.createElement("img")
        backImage.src = "./img/backFace.jpg"
        frontFace.appendChild(frontImage)
        backFace.appendChild(backImage)
        card.appendChild(frontFace)
        card.appendChild(backFace)
        card.flipStatus = "down"
        cardList.push(card)
        return card
    }
    var container = document.querySelector("#flip-card-game .container")
    for(i = 0; i < numberOfCard*2; i++) {
        container.appendChild(createACard(i, cardIdList[i]))        
    }
}

function flipUp(stt) {
    cardList[stt].style.transform = "rotateY(180deg)"
    cardList[stt].flipStatus = "up"
}

function flipDown(stt) {
    cardList[stt].style.transform = "rotateY(0deg)"
    cardList[stt].flipStatus = "down"
}

var numberOfCard = 6
var cardIdList = []
var cardList = []
generateRandomList()
renderItem()
var numberOfCardFliped = 0
var clickCount = 1
var cardOne, cardTwo
var sttOne, sttTwo

function flip(stt, cardId) {
    if (cardList[stt].flipStatus == "down") {
        if (clickCount == 1) {
            cardOne = cardId
            sttOne = stt
            flipUp(sttOne)
            clickCount++;
        } else {
            cardTwo = cardId;
            sttTwo = stt
            flipUp(sttTwo)
            if (cardOne == cardTwo) {

            } else {
                setTimeout(function(params) {
                    flipDown(sttOne)
                    flipDown(sttTwo)
                }, 800)
            }
            clickCount = 1
        }
    }
}