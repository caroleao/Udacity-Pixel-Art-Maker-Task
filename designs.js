// Select color input
var gridColor = document.getElementById('colorPicker'); 
// Select size input
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
const buttonSubmit = document.getElementById('submitBtn');
const grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
    buttonSubmit.addEventListener('click', function(event){
        console.log(" Submit button pressed"); // check listener from console
        grid.innerHTML = ""; // removes the old grid
        event.preventDefault(); //stores the user changes
        makeGrid();
    })

    grid.addEventListener('click', function(event){  
        if(event.target.nodeName === 'TD'){  // to just coloured the cells seleted
            event.target.style.backgroundColor = gridColor.value;
        }
    });

/* function to make grid */
function makeGrid(){
    for (let j=0; j< height.value; j++){ //add row
        const row = grid.insertRow (0);
        for(let i=0; i<width.value; i++){  //add column
            row.insertCell (0);
        }
    }
}  