let size = 16;

const gridContainer = document.querySelector(".gridContainer");

const formGrid = () => {
    gridContainer.textContent = '';
    for (let i = 0; i < size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        gridContainer.appendChild(grid);
        for (let j = 0; j < size; j++) {
            const gridHorizontal = document.createElement("div");
            gridHorizontal.classList.add("gridH");
            grid.appendChild(gridHorizontal);
        }
    }
}

formGrid();

const btn = document.querySelector("#size");
btn.addEventListener("click", () => {
    size = parseInt(prompt("Enter size: (100 max)"));
    if (!isNaN(size) && size <= 100) {
        formGrid();
    } else {
        alert("Enter a valid number (100 max)")
    }
})

const clearbtn = document.querySelector("#clear");
clearbtn.addEventListener("click", ()=>{
    gridContainer.textContent = '';
    formGrid();
});


const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

gridContainer.addEventListener("mouseover", (e) => {
    const hoverGrid = e.target.closest('.gridH');
    if (hoverGrid) {
        const color = window.getComputedStyle(hoverGrid).backgroundColor;
        if(color === 'rgb(255, 255, 255)'|| color === 'transparent' ){
        hoverGrid.style.background = randomColor();
        }else{
            let currentOpacity = parseFloat(getComputedStyle(hoverGrid).opacity); 
            currentOpacity > 0? currentOpacity -= 0.1: currentOpacity;
            hoverGrid.style.opacity = currentOpacity;
        }

    };
})

