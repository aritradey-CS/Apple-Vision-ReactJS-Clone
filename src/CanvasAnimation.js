import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useEffect(() => {
    // Initialize gsap and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    const images = importImages();

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
  }, [imageSeq]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasAnimation;
