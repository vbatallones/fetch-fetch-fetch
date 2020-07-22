const container = document.querySelector('.container');
const body = document.querySelector('body');

fetch('https://pokeapi.co/api/v2/pokemon/charmander')
.then(response => {
   
   return response.json();
})
.then(data => {
    
    let pokeName = data.name;
    let weight = data.weight;
    let height = data.height;
    let moves = data.moves
    let charMoves = moves[2].move.name;
    let type = data.types[0].type.name;
    let sprites = data.sprites;
    let profilePic = sprites.front_default;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem'
    
    const image = document.createElement('img');
    image.src = profilePic;
    image.classList.add('card-img-top');
    image.alt = pokeName;

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body');
    
    let firstChar = pokeName.charAt(0).toUpperCase();
    let otherLetters = pokeName.slice(1)
    let finalName = firstChar + otherLetters;
    
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = finalName
    
  

    const cardWeight = document.createElement('p');
    const cardHeight = document.createElement('p');
    const cardMove = document.createElement('p');
    const cardType = document.createElement('p');
    cardWeight.classList.add('card-text')
    cardHeight.classList.add('card-text')
    cardMove.classList.add('card-text')
    cardType.classList.add('card-text')
    cardWeight.textContent = "Weight: " + weight;
    cardHeight.textContent = "Height: "+ height;
    cardMove.textContent = "Move: " + charMoves;
    cardType.textContent = "Type: " + type;
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);
    
    card.appendChild(image);
    card.appendChild(cardBody);
    
    body.appendChild(card)

})



{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}