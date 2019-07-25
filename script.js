function createGrid(widthAndHeight) {
    let numberOfCells = widthAndHeight * widthAndHeight;
    for (let i = 0; i < numberOfCells; i++) {
        let gridMember = document.createElement('div');
        gridMember.setAttribute('class', 'gridMember');
        gridContainer.appendChild(gridMember)
    }
}

function selectColor(color) {
    if (!color) {
        color = 'black';
    }
    let gridBlockNodeList = gridContainer.querySelectorAll('div');
    let gridBlocksArray = Array.from(gridBlockNodeList);
    gridBlocksArray.forEach(block => {
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = color);
    });
}

function makeNew(widthAndHeight) {
    if (!widthAndHeight) {
        widthAndHeight = prompt('How many boxes per side would you like?');
    }
    widthAndHeight = +widthAndHeight;
    if (widthAndHeight === NaN || widthAndHeight <= 0) {
        alert('ERROR. Please enter a number greater than 0.');
    } else if (widthAndHeight > 100) {
        alert('Whoaa buddy, let\'s keep it <= 100');
        alert('Bug not yet fixed. If that number was massive, the program will now run for a while and freeze up your browser :(')
    }
    createGrid(widthAndHeight);
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
    selectColor();
}

function useDefaultButton() {
    clearGrid();
    makeNew(16);
    selectColor();
}

const resizeButton = document.getElementById('resize')
const defaultButton = document.getElementById('default');
const gridContainer = document.getElementById('grid-container');
const blackButton = document.getElementById('black');
const blueButton = document.getElementById('blue');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const whiteButton = document.getElementById('white');

createGrid(16);
selectColor();

defaultButton.addEventListener('click', useDefaultButton);
resizeButton.addEventListener('click', useResizeButton);
blackButton.addEventListener('click', (e) => selectColor('black'));
blueButton.addEventListener('click', (e) => selectColor('blue'));
redButton.addEventListener('click', (e) => selectColor('red'));
yellowButton.addEventListener('click', (e) => selectColor('yellow'));
greenButton.addEventListener('click', (e) => selectColor('green'));
whiteButton.addEventListener('click', (e) => selectColor('white'));