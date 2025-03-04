
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelector('.reset-pieces');

function changeImageSet() {
    console.log('this is our test');

    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
}

function allowDrag(event) {
    console.log('started dragging an image');

    event.dataTransfer.setData('draggedEl', this.id);
}

function allowDragOver(event) {
    event.preventDefault();
    console.log('dragging over a drop zone ');
}

function allowDrop(event) {
    event.preventDefault();

    if (this.children.length > 0) {
        console.log("Drop zone already occupied!");
        return; // Stop execution
    }

    let droppedElId = event.dataTransfer.getData('draggedEl');

    let droppedEl = document.querySelector(`#${droppedElId}`);

    this.appendChild(droppedEl);
}

theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));
pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
});

