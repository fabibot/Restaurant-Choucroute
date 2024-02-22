import _ from 'lodash';
import './style.css';
// import Icon from './images.jpeg';
// import './script.exec.js';
import 'script-loader!./pageIntro.js';

const homeButton = document.querySelector("#home");
homeButton.addEventListener('click', () => {
  displayHome();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener('click', () => {
  displayMenu();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener('click', () => {
  displayAbout();
});
