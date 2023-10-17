let cardsarray =[
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    },
    {
        name:'horse',
        icon:'<i class="fa-solid fa-horse"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'dove',
        icon:'<i class="fa-solid fa-dove"></i>'
    },
    {
        name:'feather',
        icon:'<i class="fa-solid fa-feather-pointed"></i>'
    },
    {
        name:'paw',
        icon:'<i class="fa-solid fa-paw"></i>'
    },
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    },
    {
        name:'horse',
        icon:'<i class="fa-solid fa-horse"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'dove',
        icon:'<i class="fa-solid fa-dove"></i>'
    },
    {
        name:'feather',
        icon:'<i class="fa-solid fa-feather-pointed"></i>'
    },
    {
        name:'paw',
        icon:'<i class="fa-solid fa-paw"></i>'
    }
]

let flipcards = [];
let matchedpairs = 0;

const gameboard = document.getElementById('gameboard');

shufflecards();
displaycards();

function shufflecards()
{
   for(i=cardsarray.length -1;0<=i;i--)
   {
    const randindex = Math.floor(Math.random()*(i+1));
    [cardsarray[i],cardsarray[randindex]]=[cardsarray[randindex],cardsarray[i]]
   }
}

function displaycards()
{
    cardsarray.forEach((curr,index,arr)=>{
        const card = document.createElement('div')
        gameboard.append(card);
        card.setAttribute('id',index)
        card.classList.add('cardback')
        card.classList.add('active')
        card.addEventListener('click',flippedcards)
    })
}

function flippedcards()
{
    if(flipcards.length<2 && this.classList.contains('active')){
        let cardid = this.getAttribute('id');
        flipcards.push(this)
        this.classList.remove('cardback')
        console.log(flipcards);
        this.innerHTML = cardsarray[cardid].icon;
    }
    if(flipcards.length == 2)
    {
        setTimeout(checkmatch,1000);
    }
}

function checkmatch()
{
    const cardid1 = flipcards[0].getAttribute('id');
    const cardid2 = flipcards[1].getAttribute('id');

    if(cardsarray[cardid1].name === cardsarray[cardid2].name)
    {
        flipcards[0].style.border = 'none';
        flipcards[0].innerHTML = ' ';
        flipcards[0].style.background ='antiquewhite';
        flipcards[0].classList.remove('active');
        flipcards[1].classList.remove('active');
        flipcards[1].style.border = 'none';
        flipcards[1].innerHTML = ' ';
        flipcards[1].style.background ='antiquewhite';
        matchedpairs++;
        checkgameover();
    }
    else
    {
        flipcards[0].innerHTML = ' ';
        flipcards[1].innerHTML = ' ';
        flipcards[0].classList.add('cardback');
        flipcards[1].classList.add('cardback');
    }
    flipcards=[];
}

function checkgameover()
{
    if(matchedpairs === cardsarray.length/2)
    {
        while(gameboard.firstChild)
        {
            gameboard.removeChild(gameboard.firstChild);
        }
        gameboard.innerHTML = 'You Won';
        gameboard.classList.remove('game');
        gameboard.classList.add('won');
    }
}