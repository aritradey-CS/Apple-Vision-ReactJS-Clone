// Page3.js
import React from 'react';
import './Page3.css'
import appleImage from '../media/img/Apple vision image.png';

function Page3() {
  return (
    <div id="page3">
      <div id="page3-upper">
          <img
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/intro/logo__4zgkuyebgtem_large.png"
            alt=""
          />
          <div id="page3-upper-inner">
            <h3>Watch The Film</h3>
            <h3>Watch The Event</h3>
            <div id="page3-upper-inner-down">
              <h3>Available early next year in the U.S</h3>
            </div>
          </div>
        </div>
        <img src={appleImage} alt="Apple" />;
        <button>+ Take a closer look at Vision Pro</button>
    </div>
  );
}

export default Page3;
