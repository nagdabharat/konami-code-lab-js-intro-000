const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

init();

function init() {
  document.body.addEventListener('keydown',(event) => {
    let i = 0;
    const key = event.key;
    if(key === codes[i]) {
      index++;
    } else {
      index = 0;
    }
    if(i == codes.length) {
      alert("Hurray!");
    }
  })
}
