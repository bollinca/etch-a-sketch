const gridContainer = document.querySelector('.grid-container');

let gridBlock = document.createElement('div')

function createGrid(numberOfCells) {
    for (let i = 0; i < numberOfCells; i++) {
        let gridMember = document.createElement('div');

        gridMember.setAttribute('style', 'height: 15px;\
                                         width: 15px; \
                                         border: 1px solid black;\
                                         display: inline-block;');
        gridContainer.appendChild(gridMember)
    }
}

/*create 16*16 grid (256 containers)

create all 256 using a loop;
append full grid to container
layout using CSS;
*/