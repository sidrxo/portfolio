// get the menu element
const mainMenu = document.getElementById('mainMenu');

// get the initial position of the menu
const initialPosition = mainMenu.offsetTop;

// add a scroll event listener
window.addEventListener('scroll', () => {
  // check if the user has scrolled past the initial position of the menu
  if (window.pageYOffset >= initialPosition) {
    // add the "fixed" class to the menu to make it fixed at the top of the window
    mainMenu.classList.add('fixed');
    // remove the "initial" class to ensure the menu retains its original styling
    mainMenu.classList.remove('initial');
  } else {
    // remove the "fixed" class when the user scrolls back up to the initial position
    mainMenu.classList.remove('fixed');
    // add the "initial" class to ensure the menu retains its original styling
    mainMenu.classList.add('initial');
  }
});
