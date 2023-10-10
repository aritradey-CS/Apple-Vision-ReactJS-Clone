
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
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
            srcset=""
          />
        </div>
      </div>
      <div id="page1">
        <h1>Welcome to the era of spatial computing</h1>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div id="page2">
        <h1>
          Apple Vision Pro seamlessly blends <br />
          digital content with your physical space.
        </h1>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
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
        <img src="./source/img/Apple vision image.png" alt="" srcset="" />
        <button>+ Take a closer look at Vision Pro</button>
      </div>
      <div id="page4">
        <div id="center-page4">
          <h5>Apps</h5>
          <h1>
            Free your desktop. <br />
            And your apps will follow.
          </h1>
        </div>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/visionos/large.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>

      <div id="page5">
        <div className="left5">
          <h1>
            Your apps live in <br />
            your space.
          </h1>
        </div>
        <div className="right5">
          <h3>
            With Apple Vision Pro, you have an infinite canvas that transforms
            how you use the apps you love. Arrange apps anywhere and scale them
            to the perfect size, making the workspace of your dreams a reality —
            all while staying present in the world around you. Browse the web in
            Safari, create a to-do list in Notes, chat in Messages, and
            seamlessly move between them with a glance.
          </h3>
          <button>+ Learn more about apps</button>
        </div>
      </div>

      <div id="page6">
        <h3>Design</h3>
        <h1>Designed by Apple.</h1>
        <p>
          Apple Vision Pro is the result of decades of experience designing
          high‑performance, mobile, and wearable devices — culminating in the
          most ambitious product Apple has ever created. Apple Vision Pro
          integrates incredibly advanced technology into an elegant, compact
          form, resulting in an amazing experience every time you put it on.
        </p>
      </div>
      <div id="page7">
        <canvas></canvas>
      </div>
      <div id="page8">
        <h1>
          <span>Enclosure.</span>
          A singular piece of three-dimensionally formed laminated glass flows
          into an aluminum alloy frame that curves to wrap around your face.
        </h1>
      </div>
      <div id="page9">
        <h1>
          <span>Light Seal.</span>
          The Light Seal gently flexes to conform to your face, delivering a
          precise fit while blocking out stray light.
        </h1>
      </div>
      <div id="page10">
        <h1>
          <span> Head Band. </span>
          The Head Band provides cushioning, breathability, and stretch. The Fit
          Dial lets you adjust Apple Vision Pro precisely to your head.
        </h1>
      </div>
      <div id="page11">
        <h1>
          <span>Power.</span>
          The external battery supports up to 2&nbsp;hours of use, and all‑day
          use when plugged in.
        </h1>
      </div>
      <div id="page12">
        <h1>
          <span>Sound.</span>
          Speakers positioned close to your ears deliver rich Spatial Audio
          while keeping you aware of your surroundings.
        </h1>
      </div>
      <div id="page13">
        <h1>
          <span> EyeSight. </span> An outward display reveals your eyes while
          wearing Apple Vision Pro, letting others know when you are using apps
          or fully immersed.
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
            autoplay
            loop
            muted
          ></video>
        </div>
      </div>
      <div id="page16">
        <p>
          A singular piece of
          <span className="highlight-page16"
            >three-dimensionally formed laminated glass</span
          >
          acts as an optical surface for the cameras and sensors that view the
          world. It flows seamlessly into a
          <span className="highlight">custom aluminum alloy frame</span> that gently
          curves to wrap around your face while serving as an attachment point
          for the <span className="highlight">Light Seal.</span>
        </p>
        <img
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg"
          alt=""
          srcset=""
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
          <span className="highlight-page17"
            >Pushing boundaries from the inside out.</span
          >Spatial experiences on Apple Vision Pro are only possible through
          groundbreaking Apple technology. Displays the size of a postage stamp
          that deliver more pixels than a 4K TV to each eye. Incredible advances
          in Spatial Audio. A revolutionary dual‑chip design featuring custom
          Apple silicon. A sophisticated array of cameras and sensors. All the
          elements work together to create an unprecedented experience you have
          to see to believe.
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
            <span className="highlight-page19"
              >custom micro‑OLED display system</span
            >
            features 23 million pixels, delivering stunning resolution and
            colors. And a specially designed three‑element lens creates the
            feeling of a display that’s everywhere you look.
          </p>
        </div>
      </div>
      <div id="page20">
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/spatial-audio/large.mp4"
          autoplay
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
            <span className="highlight-page20">Spatial Audio</span> makes sounds
            feel like they’re coming from your surroundings. Audio ray tracing
            analyzes your room’s acoustic properties to adapt and match sound to
            your space. And if you want to use headphones with Apple Vision Pro,
            the new AirPods Pro (2nd generation) offer the perfect experience,
            featuring Lossless Audio with ultra-low latency enabled by the H2
            chip in both devices.
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
            system provides ultraprecise input without your needing to hold any
            controllers, so you can accurately select elements just by looking
            at them.
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
            can see the world around you clearly. The system also helps deliver
            <span className="highlight-page22">precise head and hand tracking</span>
            and <span className="highlight-page22">real‑time 3D mapping</span>, all
            while understanding your hand gestures from a wide range of
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
            Vision Pro. The powerful <span className="highlight-page23">M2</span> chip simultaneously runs visionOS,
            executes advanced computer vision algorithms, and delivers stunning
            graphics, all with incredible efficiency. And the brand-new <span className="highlight-page23">R1</span> chip
            is specifically dedicated to process input from the cameras,
            sensors, and microphones, streaming images to the displays within 12
            milliseconds — for a virtually lag-free, real-time view of the
            world.
          </p>
          <button>+ Learn more about technology</button>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
      integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
      integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="./script.js"></script>
  </>
  );
}

export default App;
