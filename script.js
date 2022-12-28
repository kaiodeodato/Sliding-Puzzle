var rows = 4;
var columns = 4;

var turns = 0;

var currTile 
var otherTile

let first = [0]
let order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

order.sort((a,b)=>{return 0.5 - Math.random()})

let array3 = order.concat(first)


jogo()

function jogo(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){

            let tile = document.createElement('img');
            tile.src = 'images/' + array3.shift() +'.jpg'
            tile.id = `${r}-${c}`

            tile.addEventListener('dragstart',dragStart);
            tile.addEventListener('dragenter',dragEnter);
            tile.addEventListener('dragover',dragOver);
            tile.addEventListener('dragleave',dragLeave);
            tile.addEventListener('dragend',dragEnd);
            tile.addEventListener('drop',Drop);

            let board = document.getElementById('board');
            board.appendChild(tile)
        }
    }
}

function dragStart(){
   currTile = this;
}
function dragEnter(e){
    e.preventDefault();
    
}
function dragOver(e){
    e.preventDefault();
    
}
function dragLeave(){
    
}
function Drop(){
    otherTile = this     
}
function dragEnd(){

    if(!otherTile.src.includes("images/0.jpg")){
        return;
    }

    let coordCurr = currTile.id.split('-')


    let r = parseInt(coordCurr[0]);
    let c = parseInt(coordCurr[1]);


    let coordOther = otherTile.id.split('-')
    let r2 = parseInt(coordOther[0]);
    let c2 = parseInt(coordOther[1]);

    let moveLeft = r == r2 && c2 == c - 1;
    let moveRight = r == r2 && c2 == c + 1;

    let moveUp = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let allowed = moveLeft || moveRight || moveUp || moveDown

    if(allowed){

    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg 

    turns += 1;
    let score = document.getElementById('turns');
    score.innerHTML = turns

    }
}
