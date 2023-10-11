import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imageNames = new Array(200).fill(0).map((_, i) => String(i).padStart(4, "0"));

function CanvasAnimation() {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageSeq = {
      frame: 1,
    };

    const scaleImage = (img, ctx) => {
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
    };

    // Initialize gsap and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    const images = [];

    const loadImage = (imageName) => {
      const img = new Image();
      img.src = `/media/canvas/${imageName}.jpg`;
      console.log("Loading image:", imageName); // Add a log statement to track image loading
      
      img.onload = () => {
        images.push(img);
        console.log("Loaded image:", imageName); // Log when an image is successfully loaded
    
        if (images.length === imageNames.length) {
          setImagesLoaded(true);
          console.log("All images loaded.");
        }
      };
    };
    
    // Load all images
    imageNames.forEach(loadImage);

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[imageSeq.frame];
      if (img) {
        scaleImage(img, context);
      }
    };

    gsap.to(imageSeq, {
      frame: images.length - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        trigger: canvas,
        start: "top top",
        end: "600% top",
        scroller: window,
      },
      onUpdate: render,
    });

    ScrollTrigger.create({
      trigger: canvas,
      pin: true,
      start: "top top",
      end: "600% top",
      scroller: window,
    });
  }, []);

  return (
    <div>
      {imagesLoaded ? <canvas ref={canvasRef}></canvas> : <p>Loading images...</p>}
    </div>
  );
}

export default CanvasAnimation;
