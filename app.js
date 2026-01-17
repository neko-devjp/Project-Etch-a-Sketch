const container = document.querySelector('.container');

// for (let i = 0; i < 256; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   container.append(square);

//   square.addEventListener('mouseenter', () => {
//     square.classList.add('colored');
//   });
// }

function createGrid(size) {
  const cellSize = 52;
  container.innerHTML = '';
  container.style.width = `${cellSize * size}px`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    square.addEventListener('mouseenter', () => {
      square.classList.add('colored');
    });
  }
}
createGrid(16);

const changeSizeBtn = document.querySelector('.change-size-btn');
changeSizeBtn.addEventListener('click', () => {
  const input = prompt('一辺を何マスにするか入力してください');
  if (input === null) {
    return;
  }
  const size = Number(input);
  if (isNaN(size)) {
    alert('数字を入力してください');
    return;
  }

  if (size <= 0 || 100 < size) {
    alert('1〜100 の間で入力してください');
    return;
  }
  createGrid(size);
});
