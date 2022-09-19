const menuBtn = document.querySelector('#menuBtn');

let toggle = true;

menuBtn.addEventListener('click', () => {
  // toggle
  toggle = !toggle;
  if (toggle) {
    menuBtn.src = '../images/icon-hamburger.svg';
  } else {
    menuBtn.src = '../images/icon-close.svg';
  }
});
