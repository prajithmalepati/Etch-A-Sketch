const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const slider = document.getElementById('slider');
const sliderValueDisplay = document.getElementById('sliderValue'); 

function makeGrid(size){
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for(let i =0;i<size*size;i++){
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare)
  }
}

slider.addEventListener('input', () => {changeSlider()});

function changeSlider(){
  sliderValueDisplay.textContent = `Value: ${slider.value}`
  container.innerHTML = '';
  makeGrid(slider.value);
}

