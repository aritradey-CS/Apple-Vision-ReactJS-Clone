import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CanvasAnimation() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null); // Create a ref for the canvas context

  useEffect(() => {
    // Initialize gsap and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", handleResize);

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    }

    function files(index) {
      const data = `
      ./media/img/canvas/0000.jpg
      ./media/img/canvas/0001.jpg
      
./media/img/canvas/0002.jpg
./media/img/canvas/0003.jpg
./media/img/canvas/0004.jpg
./media/img/canvas/0005.jpg
./media/img/canvas/0006.jpg
./media/img/canvas/0007.jpg
./media/img/canvas/0008.jpg
./media/img/canvas/0009.jpg
./media/img/canvas/0010.jpg
./media/img/canvas/0011.jpg
./media/img/canvas/0012.jpg
./media/img/canvas/0013.jpg
./media/img/canvas/0014.jpg
./media/img/canvas/0015.jpg
./media/img/canvas/0016.jpg
./media/img/canvas/0017.jpg
./media/img/canvas/0018.jpg
./media/img/canvas/0019.jpg
./media/img/canvas/0020.jpg
./media/img/canvas/0021.jpg
./media/img/canvas/0022.jpg
./media/img/canvas/0023.jpg
./media/img/canvas/0024.jpg
./media/img/canvas/0025.jpg
./media/img/canvas/0026.jpg
./media/img/canvas/0027.jpg
./media/img/canvas/0028.jpg
./media/img/canvas/0029.jpg
./media/img/canvas/0030.jpg
./media/img/canvas/0031.jpg
./media/img/canvas/0032.jpg
./media/img/canvas/0033.jpg
./media/img/canvas/0034.jpg
./media/img/canvas/0035.jpg
./media/img/canvas/0036.jpg
./media/img/canvas/0037.jpg
./media/img/canvas/0038.jpg
./media/img/canvas/0039.jpg
./media/img/canvas/0040.jpg
./media/img/canvas/0041.jpg
./media/img/canvas/0042.jpg
./media/img/canvas/0043.jpg
./media/img/canvas/0044.jpg
./media/img/canvas/0045.jpg
./media/img/canvas/0046.jpg
./media/img/canvas/0047.jpg
./media/img/canvas/0048.jpg
./media/img/canvas/0049.jpg
./media/img/canvas/0050.jpg
./media/img/canvas/0051.jpg
./media/img/canvas/0052.jpg
./media/img/canvas/0053.jpg
./media/img/canvas/0054.jpg
./media/img/canvas/0055.jpg
./media/img/canvas/0056.jpg
./media/img/canvas/0057.jpg
./media/img/canvas/0058.jpg
./media/img/canvas/0059.jpg
./media/img/canvas/0060.jpg
./media/img/canvas/0061.jpg
./media/img/canvas/0062.jpg
./media/img/canvas/0063.jpg
./media/img/canvas/0064.jpg
./media/img/canvas/0065.jpg
./media/img/canvas/0066.jpg
./media/img/canvas/0067.jpg
./media/img/canvas/0068.jpg
./media/img/canvas/0069.jpg
./media/img/canvas/0070.jpg
./media/img/canvas/0071.jpg
./media/img/canvas/0072.jpg
./media/img/canvas/0073.jpg
./media/img/canvas/0074.jpg
./media/img/canvas/0075.jpg
./media/img/canvas/0076.jpg
./media/img/canvas/0077.jpg
./media/img/canvas/0078.jpg
./media/img/canvas/0079.jpg
./media/img/canvas/0080.jpg
./media/img/canvas/0081.jpg
./media/img/canvas/0082.jpg
./media/img/canvas/0083.jpg
./media/img/canvas/0084.jpg
./media/img/canvas/0085.jpg
./media/img/canvas/0086.jpg
./media/img/canvas/0087.jpg
./media/img/canvas/0088.jpg
./media/img/canvas/0089.jpg
./media/img/canvas/0090.jpg
./media/img/canvas/0091.jpg
./media/img/canvas/0092.jpg
./media/img/canvas/0093.jpg
./media/img/canvas/0094.jpg
./media/img/canvas/0095.jpg
./media/img/canvas/0096.jpg
./media/img/canvas/0097.jpg
./media/img/canvas/0098.jpg
./media/img/canvas/0099.jpg
./media/img/canvas/0100.jpg
./media/img/canvas/0101.jpg
./media/img/canvas/0102.jpg
./media/img/canvas/0103.jpg
./media/img/canvas/0104.jpg
./media/img/canvas/0105.jpg
./media/img/canvas/0106.jpg
./media/img/canvas/0107.jpg
./media/img/canvas/0108.jpg
./media/img/canvas/0109.jpg
./media/img/canvas/0110.jpg
./media/img/canvas/0111.jpg
./media/img/canvas/0112.jpg
./media/img/canvas/0113.jpg
./media/img/canvas/0114.jpg
./media/img/canvas/0115.jpg
./media/img/canvas/0116.jpg
./media/img/canvas/0117.jpg
./media/img/canvas/0118.jpg
./media/img/canvas/0119.jpg
./media/img/canvas/0120.jpg
./media/img/canvas/0121.jpg
./media/img/canvas/0122.jpg
./media/img/canvas/0123.jpg
./media/img/canvas/0124.jpg
./media/img/canvas/0125.jpg
./media/img/canvas/0126.jpg
./media/img/canvas/0127.jpg
./media/img/canvas/0128.jpg
./media/img/canvas/0129.jpg
./media/img/canvas/0130.jpg
./media/img/canvas/0131.jpg
./media/img/canvas/0132.jpg
./media/img/canvas/0133.jpg
./media/img/canvas/0134.jpg
./media/img/canvas/0135.jpg
./media/img/canvas/0136.jpg
./media/img/canvas/0137.jpg
./media/img/canvas/0138.jpg
./media/img/canvas/0139.jpg
./media/img/canvas/0140.jpg
./media/img/canvas/0141.jpg
./media/img/canvas/0142.jpg
./media/img/canvas/0143.jpg
./media/img/canvas/0144.jpg
./media/img/canvas/0145.jpg
./media/img/canvas/0146.jpg
./media/img/canvas/0147.jpg
./media/img/canvas/0148.jpg
./media/img/canvas/0149.jpg
./media/img/canvas/0150.jpg
./media/img/canvas/0151.jpg
./media/img/canvas/0152.jpg
./media/img/canvas/0153.jpg
./media/img/canvas/0154.jpg
./media/img/canvas/0155.jpg
./media/img/canvas/0156.jpg
./media/img/canvas/0157.jpg
./media/img/canvas/0158.jpg
./media/img/canvas/0159.jpg
./media/img/canvas/0160.jpg
./media/img/canvas/0161.jpg
./media/img/canvas/0162.jpg
./media/img/canvas/0163.jpg
./media/img/canvas/0164.jpg
./media/img/canvas/0165.jpg
./media/img/canvas/0166.jpg
./media/img/canvas/0167.jpg
./media/img/canvas/0168.jpg
./media/img/canvas/0169.jpg
./media/img/canvas/0170.jpg
./media/img/canvas/0171.jpg
./media/img/canvas/0172.jpg
./media/img/canvas/0173.jpg
./media/img/canvas/0174.jpg
./media/img/canvas/0175.jpg
./media/img/canvas/0176.jpg
./media/img/canvas/0177.jpg
./media/img/canvas/0178.jpg
./media/img/canvas/0179.jpg
./media/img/canvas/0180.jpg
./media/img/canvas/0181.jpg
./media/img/canvas/0182.jpg
./media/img/canvas/0183.jpg
./media/img/canvas/0184.jpg
./media/img/canvas/0185.jpg
./media/img/canvas/0186.jpg
./media/img/canvas/0187.jpg
./media/img/canvas/0188.jpg
./media/img/canvas/0189.jpg
./media/img/canvas/0190.jpg
./media/img/canvas/0191.jpg
./media/img/canvas/0192.jpg
./media/img/canvas/0193.jpg
./media/img/canvas/0194.jpg
./media/img/canvas/0195.jpg
./media/img/canvas/0196.jpg
./media/img/canvas/0197.jpg
./media/img/canvas/0198.jpg
./media/img/canvas/0199.jpg
      `;
      return data.split("\n")[index].trim();
    }

    const frameCount = 199;

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

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

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], contextRef.current);
    }

    function scaleImage(img, ctx) {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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

    // Scroll-triggered pinning
    ScrollTrigger.create({
      trigger: canvas,
      pin: true,
      start: "top top",
      end: "600% top",
      scroller: window,
    });

    // Set the canvas context in the ref
    contextRef.current = canvas.getContext("2d");
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasAnimation;
