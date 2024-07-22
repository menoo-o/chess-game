const pieces = document.querySelectorAll('.chess-piece'); // Select all chess pieces
const squares = document.querySelectorAll('.square');
const infoDisplay = document.querySelector('#info');

// Add event listeners to each chess piece
pieces.forEach(piece => {
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id); // Store the id of the piece being dragged
        console.log('Started dragging', e.target);
    });

    piece.addEventListener('drag', (e) => {
        console.log(e.target.id, "is being dragged");
    });
});

// Add event listeners to each square
squares.forEach(square => {
    square.addEventListener('dragenter', (e) => {
        e.preventDefault();
        square.classList.add('drag-over');
    });

    square.addEventListener('dragover', (e) => {
        e.preventDefault();
        square.classList.add('drag-over');
    });

    square.addEventListener('dragleave', (e) => {
        square.classList.remove('drag-over');
    });

    square.addEventListener('drop', (e) => {
        e.preventDefault();
        square.classList.remove('drag-over');
        const pieceId = e.dataTransfer.getData('text/plain'); // Get the id of the piece being dragged
        const piece = document.getElementById(pieceId); // Get the piece element by id
        square.appendChild(piece); // Append the piece to the square
        console.log('Dropped on', square);
    });
});
