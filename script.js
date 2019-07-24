function createGrid(numberOfCells) {
    for (let i = 0; i < numberOfCells; i++) {
        let gridMember = document.createElement('div');
        gridMember.setAttribute('class', 'gridMember');
        gridContainer.appendChild(gridMember)
    }
}

function addSketchAbility(targetGrid) {
    let gridBlockNodeList = targetGrid.querySelectorAll('div');
    let gridBlocksArray = Array.from(gridBlockNodeList);
    gridBlocksArray.forEach(block => {
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
    });
}

function makeNew() {
    let widthAndHeight = prompt('How many boxes per side?');
    widthAndHeight = +widthAndHeight;
    if (widthAndHeight === NaN || widthAndHeight <= 1) {
        alert('ERROR. Please enter a number greater than 1.');
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

const gridContainer = document.getElementById('grid-container');
createGrid(256);
addSketchAbility(gridContainer);

/* pseudocode
button.eventlistener(click, (clear and recreate grid))


*/