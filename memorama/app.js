document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'vegeta1',
        img: 'images/vegeta1.jpg'
      },
      {
        name: 'vegeta2',
        img: 'images/vegeta2.jpg'
      },
      {
        name: 'vegeta3',
        img: 'images/vegeta3.jpeg'
      },
      {
        name: 'vegeta4',
        img: 'images/vegeta4.jpg'
      },
      {
        name: 'vegeta5',
        img: 'images/vegeta5.jpg'
      },
      {
        name: 'vegeta6',
        img: 'images/vegeta6.jpg'
      },
      {
        name: 'vegeta1',
        img: 'images/vegeta1.jpg'
      },
      {
        name: 'vegeta2',
        img: 'images/vegeta2.jpg'
      },
      {
        name: 'vegeta3',
        img: 'images/vegeta3.jpeg'
      },
      {
        name: 'vegeta4',
        img: 'images/vegeta4.jpg'
      },
      {
        name: 'vegeta5',
        img: 'images/vegeta5.jpg'
      },
      {
        name: 'vegeta6',
        img: 'images/vegeta6.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.juego')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const Opc1 = cardsChosenId[0]
      const Opc2 = cardsChosenId[1]
      
     
      if (cardsChosen[0] === cardsChosen[1]) {
        cards[Opc1].removeEventListener('click', flipCard)
        cards[Opc2].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[Opc1].setAttribute('src', 'images/blank.jpg')
        cards[Opc2].setAttribute('src', 'images/blank.jpg')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        alert('FELICIDADES, HAS AYUDADO A VEGETA A SALIR A DELANTE CON SU CIBER, SIN EMBARGO, POR ALGUNOS PROBLEMAS, VINO LO PEOR. A VEGETA LE HAN CLAUSURADO SU CIBER')
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })