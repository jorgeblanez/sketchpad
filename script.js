//draws a grid of divs of any size. The program will only allow a grid of
//MIN 2x2, and MAX 100x100

function drawGrid(gridSize){
    
    destroyGrid();
    for(let i=0;i<gridSize;i++){
        let lineDiv = document.createElement("div");
        lineDiv.classList.add("lineDiv");
        gridContainer.appendChild(lineDiv);
    
        for (let j=0;j<gridSize;j++){
            let gridSquare = document.createElement("div");
            gridSquare.style.backgroundColor="rgb(250, 250, 250)";
            gridSquare.style.flexGrow="1" ;
            gridSquare.classList.add("gridSquare");
            lineDiv.appendChild(gridSquare);
        }
    }
    gridListener();
    
}

//destroys the current grid to make space for a new one
function destroyGrid(){
    let lineDiv = document.querySelectorAll(".lineDiv")
    for (line of lineDiv){
        line.remove();
    }
}

function paintGrid(event){
    let rgb = Number((event.target.style.backgroundColor.split(/,| /)[2]));
    rgb -= 25;
    event.target.style.backgroundColor ="rgb("+rgb+","+rgb+","+rgb+")";
}

function gridListener(){
    gridElement = document.querySelectorAll(".gridSquare");
    for (element of gridElement){
        gridColor = element.addEventListener("mouseover",paintGrid);
    }
}

function getGridSize(){
    let gridSize = +prompt("Choose Grid Size. Grid must be min 2x2, and max 100x100");
    console.log(typeof NaN);
    if(gridSize<2 || gridSize>100){
        alert("Number out of Range. Please input a number between 2 and 100");
        getGridSize();
        return
    }
    else if(isNaN(gridSize)){
        alert("Not a number! Please input a number between 2 and 100");
        getGridSize();
        return
    }

    drawGrid(gridSize);
    
}

let gridElement = document.querySelectorAll(".gridSquare");

const gridContainer = document.getElementById("grid");
const drawButton = document.querySelector("#draw");
drawButton.addEventListener("click", function(){getGridSize()});

