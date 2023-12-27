/*
function testElement() {
  const button = document.querySelector('.js-button');


  if (button.classList.contains('js-button')) {
    console.log('The button has the "js-button" class!');
  } else {
    console.log('The button does not have the "js-button" class!');
  }
}
*/


function toggleElement(className) {
  let button = document.querySelector(className);

  if (button.classList.contains('is-toggled')) {

    button.classList.remove('is-toggled');
  } else {
    turnOffPreviousButton();
    
    button.classList.add('is-toggled');
  }

}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

/*
function gameElement() {
  let button = document.querySelector('.js-game');

  if (button.classList.contains('is-toggled')) {
     button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
}


function musicElement() {
  let button = document.querySelector('.js-music');

  if (button.classList.contains('is-toggled')) {
     button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
}



function techElement() {
  let button = document.querySelector('.js-tech');

  if (button.classList.contains('is-toggled')) {
     button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
}
*/