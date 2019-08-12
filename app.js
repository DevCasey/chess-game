const getMainId = document.getElementById('board');
//


let createBoard = (gridAmount) => {
    for(let i = 0; i < 9; i++) {
        const row = document.createElement('div');
        row.classList.add('outterDiv');
        getMainId.appendChild(row);
        for(let j = 0; j < 9; j++) {
            const col = document.createElement('div');
            col.classList.add('column');
            col.style.width = `${520/gridAmount}px`;
            col.style.height = `${520/gridAmount}px`;
            row.appendChild(col);
        }
    }
}
window.onload = createBoard(8);
