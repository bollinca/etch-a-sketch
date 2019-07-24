function createGrid(numberOfCells) {
    for (let i = 0; i < numberOfCells; i++) {
        let gridMember = document.createElement('div');

        gridMember.setAttribute('style', 'height: 15px;\
                                         width: 15px; \
                                         border: 1px solid black;\
                                         display: inline-block;');
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

function makeNew(number) {
    let widthAndHeight = prompt("How many boxes per side?");
    number = widthAndHeight * widthAndHeight;
    createGrid(number);
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

const gridContainer = document.getElementById('grid-container');
createGrid(256);
addSketchAbility(gridContainer);

