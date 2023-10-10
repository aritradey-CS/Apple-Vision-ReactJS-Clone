import "./App.css";
import useLocomotiveScroll from './useLocomotiveScroll';

import Page from "./components/Page"; // Import the Page component
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3"; // Import other page components as needed
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";
import Page12 from "./components/Page12";

function App() {
  useLocomotiveScroll();
  return (
    <>
      <div id="main">
        <Page />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <div id="page13">
          <h1>
            <span> EyeSight. </span> An outward display reveals your eyes while
            wearing Apple Vision Pro, letting others know when you are using
            apps or fully immersed.
          </h1>
        </div>
        <div id="page14">
          <div id="left14"></div>
          <div id="right14"></div>
        </div>
        <div id="page15">
          <div className="center-page15">
            <video
              src="https://www.apple.com//105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/glass/large_2x.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <div id="page16">
          <p>
            A singular piece of
            <span className="highlight-page16">
              three-dimensionally formed laminated glass
            </span>
            acts as an optical surface for the cameras and sensors that view the
            world. It flows seamlessly into a
            <span className="highlight">custom aluminum alloy frame</span> that
            gently curves to wrap around your face while serving as an
            attachment point for the{" "}
            <span className="highlight">Light Seal.</span>
          </p>
          <img
  src="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg"
  alt=""
  srcSet="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_small.jpg 320w, https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_medium.jpg 768w, https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg 1024w"
/>

          <button>+ Learn more about design</button>
        </div>
        <div id="page17">
          <h4>Technology</h4>
          <h1>
            Innovation you can <br />
            see, hear, and feel.
          </h1>
          <p>
            <span className="highlight-page17">
              Pushing boundaries from the inside out.
            </span>
            Spatial experiences on Apple Vision Pro are only possible through
            groundbreaking Apple technology. Displays the size of a postage
            stamp that deliver more pixels than a 4K TV to each eye. Incredible
            advances in Spatial Audio. A revolutionary dual‑chip design
            featuring custom Apple silicon. A sophisticated array of cameras and
            sensors. All the elements work together to create an unprecedented
            experience you have to see to believe.
          </p>
        </div>
        <div id="page18">
          <canvas></canvas>
        </div>
        <div id="page19">
          <div id="center-page19">
            <h1>More pixels than a 4K TV. For each eye.</h1>
            <p>
              The
              <span className="highlight-page19">
                custom micro‑OLED display system
              </span>
              features 23 million pixels, delivering stunning resolution and
              colors. And a specially designed three‑element lens creates the
              feeling of a display that’s everywhere you look.
            </p>
          </div>
        </div>
        <div id="page20">
          <video
            src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/spatial-audio/large.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div id="center-page20">
            <h1>
              Our most advanced <br />
              Spatial Audio system ever.
            </h1>
            <p>
              Dual-driver audio pods positioned next to each ear deliver
              personalized sound while letting you hear what’s around you.
              <span className="highlight-page20">Spatial Audio</span> makes
              sounds feel like they’re coming from your surroundings. Audio ray
              tracing analyzes your room’s acoustic properties to adapt and
              match sound to your space. And if you want to use headphones with
              Apple Vision Pro, the new AirPods Pro (2nd generation) offer the
              perfect experience, featuring Lossless Audio with ultra-low
              latency enabled by the H2 chip in both devices.
            </p>
          </div>
        </div>
        <div id="page21">
          <img
            id="troff"
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_off__fx6m2dj3mlqq_large.jpg"
            alt=""
          />
          <img
            id="tron"
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_on__ln11reqs6mi6_large.jpg"
            alt=""
          />

          <div id="center-page21">
            <h1>Responsive, precision eye tracking.</h1>
            <p>
              A high-performance eye tracking system of
              <span className="highlight-page21">LEDs</span> and
              <span className="highlight-page21">infrared cameras</span>
              projects invisible light patterns onto each eye. This advanced
              system provides ultraprecise input without your needing to hold
              any controllers, so you can accurately select elements just by
              looking at them.
            </p>
          </div>
        </div>
        <div id="page22">
          <img
            id="snroff"
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_off__cfzcmow4c3f6_large.jpg"
            alt=""
          />
          <img
            id="snron"
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large.jpg"
            alt=""
          />
          <div id="center-page22">
            <h1>A sophisticated sensor array.</h1>
            <p>
              A pair of
              <span className="highlight-page22">high-resolution cameras</span>
              transmit over one billion pixels per second to the displays so you
              can see the world around you clearly. The system also helps
              deliver
              <span className="highlight-page22">
                precise head and hand tracking
              </span>
              and <span className="highlight-page22">real‑time 3D mapping</span>
              , all while understanding your hand gestures from a wide range of
              positions.
            </p>
          </div>
        </div>
        <div id="page23">
          <img
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_chips__s805s5o3gkii_medium.jpg"
            alt=""
          />
          <div id="center-page23">
            <h1>Revolutionary dual‑chip performance.</h1>
            <p>
              A unique dual‑chip design enables the spatial experiences on Apple
              Vision Pro. The powerful{" "}
              <span className="highlight-page23">M2</span> chip simultaneously
              runs visionOS, executes advanced computer vision algorithms, and
              delivers stunning graphics, all with incredible efficiency. And
              the brand-new <span className="highlight-page23">R1</span> chip is
              specifically dedicated to process input from the cameras, sensors,
              and microphones, streaming images to the displays within 12
              milliseconds — for a virtually lag-free, real-time view of the
              world.
            </p>
            <button>+ Learn more about technology</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
