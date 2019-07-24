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

const gridContainer = document.getElementById('grid-container');
createGrid(256);
const gridBlockNodeList = gridContainer.querySelectorAll('div');
const gridBlocksArray = Array.from(gridBlockNodeList);
gridBlocksArray.forEach(block => {
    block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
});