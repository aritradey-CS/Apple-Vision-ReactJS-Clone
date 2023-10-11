import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define a function to import images dynamically
const importImages = () => {
  const images = [];
  for (let i = 0; i < 200; i++) {
    const image = require(`./media/img/canvas/${String(i).padStart(4, "0")}.jpg`);
    images.push(image);
  }
  return images;
};

function CanvasAnimation() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = importImages();

  // Define the render function
  function render() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!canvas) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const img = images[imageSeq.frame];
    if (img) {
      scaleImage(img, context);
    }
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  useEffect(() => {
    // Initialize gsap and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    // Define the imageSeq object
    const imageSeq = {
      frame: 1,
    };

    // ... rest of your code ...

  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasAnimation;
