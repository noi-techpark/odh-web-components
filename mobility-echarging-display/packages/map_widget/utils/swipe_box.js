var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

export function initialize_swipe(gesturedZone, modifiedElement) {
  gesturedZone.addEventListener(
    'touchstart',
    function(e) {
      e.preventDefault();
      touchstartX = e.changedTouches[0].screenX;
      touchstartY = e.changedTouches[0].screenY;
    },
    false
  );

  gesturedZone.addEventListener(
    'touchend',
    function(e) {
      e.preventDefault();
      touchendX = e.changedTouches[0].screenX;
      touchendY = e.changedTouches[0].screenY;
      handleGesure(modifiedElement);
    },
    false
  );
}

function handleGesure(modifiedElement) {
  if (touchendY >= touchstartY) {
    // console.log('Swiped up');
    modifiedElement.classList.remove('open');
  }
  if (touchendY <= touchstartY) {
    // console.log(swiped + 'down!');
    modifiedElement.classList.add('open');
  }
  if (touchendX <= touchstartX) {
    // console.log('Swiped left');
  }
  if (touchendX >= touchstartX) {
    // console.log('Swiped right');
  }
  if (touchendY == touchstartY) {
    // console.log('tap!');
  }
}
