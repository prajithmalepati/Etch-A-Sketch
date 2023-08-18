const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const slider = document.getElementById('slider');
const sliderValueDisplay = document.getElementById('sliderValue'); 
let isDrawing = false;

function makeGrid(size){
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for(let i =0;i<size*size;i++){
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare)

    gridSquare.addEventListener('click',()=>{
      isDrawing=!isDrawing;
      draw(gridSquare);
    })
    gridSquare.addEventListener('mouseover',()=>{
      if(isDrawing){
        draw(gridSquare);
      }
    })
  }
}

slider.addEventListener('input', () => {changeSlider()});

function changeSlider(){
  sliderValueDisplay.textContent = `${slider.value} x ${slider.value}`
  container.innerHTML = '';
  makeGrid(slider.value);
}

makeGrid(16)

resetBtn.addEventListener('click',gridReset);

function gridReset(){
  container.innerHTML='';
  isDrawing = false;
  makeGrid(slider.value);
}

function draw(square){
  square.style.backgroundColor= 'black';
}
