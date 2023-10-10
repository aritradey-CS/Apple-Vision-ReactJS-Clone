import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CanvasAnimation() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null); // Create a ref for the canvas context
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    // Initialize gsap and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", handleResize);

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    }

    // Define an array of image file paths
    const imagePaths = Array.from({ length: 200 }, (_, i) =>
      `./media/img/canvas/${String(i).padStart(4, "0")}.jpg`
    );

    const frameCount = imagePaths.length;

    const images = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = imagePaths[i];
      img.onload = () => {
        setImagesLoaded((prevImagesLoaded) => prevImagesLoaded + 1);
      };
      images.push(img);
    }

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[imageSeq.frame];
      if (img && imagesLoaded === frameCount) {
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

    const imageSeq = {
      frame: 1,
    };

    gsap.to(imageSeq, {
      frame: frameCount - 1,
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

    // Scroll-triggered pinning
    ScrollTrigger.create({
      trigger: canvas,
      pin: true,
      start: "top top",
      end: "600% top",
      scroller: window,
    });

    // Set the canvas context in the ref
    contextRef.current = context;
  }, [imagesLoaded]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasAnimation;
