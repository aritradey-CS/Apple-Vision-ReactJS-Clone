// Page.js
import React from 'react';
import Navigation from './Navigation';
import '../App.css'
function Page() {
  return (
    <div id="main">
      <div id="page">
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/large_2x.mp4"
          muted
        ></video>
        <Navigation />
        <div id="page-bottom">
          <h3>Introduction</h3>
          <img
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
