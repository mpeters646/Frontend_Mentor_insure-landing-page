const menuBtn = document.querySelector('#menuBtn');

let toggle = true;

function openNav() {
  document.getElementById('navOverlay').style.display = 'block';
}

closeNav = () => {
  document.getElementById('navOverlay').style.display = 'none';
};

menuBtn.addEventListener('click', () => {
  // toggle
  toggle = !toggle;
  if (toggle) {
    menuBtn.src = '../images/icon-hamburger.svg';
    closeNav();
  } else {
    menuBtn.src = '../images/icon-close.svg';
    openNav();
  }
});
