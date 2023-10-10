import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

function useLocomotiveScroll() {
  useEffect(() => {
    // Function to initialize Locomotive Scroll
    const loco = () => {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });

      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      ScrollTrigger.refresh();

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#page-bottom",
            start: "5% top",
            end: "bottom top",
            scroller: "#main",
          },
        })
        .to("#page-bottom", {
          opacity: 0,
          duration: 1, // Adjust the duration as needed for the desired fade effect
        });
    };

    // Call the loco() function to initialize Locomotive Scroll
    loco();
  }, []);

  // This hook doesn't return anything, as it's mainly used for its side effects
}

export default useLocomotiveScroll;
