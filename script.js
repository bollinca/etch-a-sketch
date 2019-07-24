function createGrid(numberOfCells) {
    for (let i = 0; i < numberOfCells; i++) {
        let gridMember = document.createElement('div');
        gridMember.setAttribute('class', 'gridMember');
        gridContainer.appendChild(gridMember)
    }
}

function addSketchAbility() {
    let gridBlockNodeList = gridContainer.querySelectorAll('div');
    let gridBlocksArray = Array.from(gridBlockNodeList);
    gridBlocksArray.forEach(block => {
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
    });
}

function makeNew() {
    let widthAndHeight = prompt('How many boxes per side would you like?');
    widthAndHeight = +widthAndHeight;
    if (widthAndHeight === NaN || widthAndHeight <= 0) {
        alert('ERROR. Please enter a number greater than 0.');
    } else if (widthAndHeight > 100) {
        alert('Whoaa buddy, let\'s keep it <= 100');
        alert('Bug not yet fixed. If that number was massive, the program will now run for a while and freeze up your browser :(')
    }
    let totalCells = widthAndHeight * widthAndHeight;
    createGrid(totalCells);
    gridContainer.setAttribute('style', `grid-template-rows: repeat(${widthAndHeight}, 1fr); \
                                         grid-template-columns: repeat(${widthAndHeight}, 1fr);`)
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function useResizeButton() {
    clearGrid();
    makeNew();
    addSketchAbility();
}

const resizeButton = document.getElementById('resize')
const clearButton = document.getElementById('clear');
const gridContainer = document.getElementById('grid-container');
createGrid(256);
addSketchAbility(gridContainer);

clearButton.addEventListener('click', () => {
    clearGrid();
    createGrid(256);
    addSketchAbility();
});
resizeButton.addEventListener('click', useResizeButton);


/* pseudocode
button.eventlistener(click, (clear and recreate grid))


*/