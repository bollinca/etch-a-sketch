function createGrid(widthAndHeight) {
    let numberOfCells = widthAndHeight * widthAndHeight;
    for (let i = 0; i < numberOfCells; i++) {
        let gridMember = document.createElement('div');
        gridMember.setAttribute('class', 'gridMember');
        gridContainer.appendChild(gridMember)
    }
    gridContainer.setAttribute('style', `grid-template-rows: repeat(${widthAndHeight}, 1fr); \
                                         grid-template-columns: repeat(${widthAndHeight}, 1fr);`)
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

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function validateInput(widthAndHeight) {
    if (!widthAndHeight) {
        widthAndHeight = prompt('How many boxes per side would you like?');
    }
    widthAndHeight = +widthAndHeight;
    if (widthAndHeight === NaN || widthAndHeight <= 0) {
        alert('Please enter a number greater than 0.');
        return 'exit';
    }
    if (widthAndHeight > 100) {
        alert('Number too large. Please use a number less than or equal to 100');
        return 'exit';
    } 
    return widthAndHeight;
}

function useResizeButton(widthAndHeight) {
    widthAndHeight = validateInput(widthAndHeight);
    if (widthAndHeight === 'exit') {
        return;
    }
    clearGrid();
    createGrid(widthAndHeight);
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

defaultButton.addEventListener('click', (e) => useResizeButton(16));
resizeButton.addEventListener('click', (e) => useResizeButton());
blackButton.addEventListener('click', (e) => selectColor('black'));
blueButton.addEventListener('click', (e) => selectColor('blue'));
redButton.addEventListener('click', (e) => selectColor('red'));
yellowButton.addEventListener('click', (e) => selectColor('yellow'));
greenButton.addEventListener('click', (e) => selectColor('green'));
whiteButton.addEventListener('click', (e) => selectColor('white'));

createGrid(16);
selectColor();