import React, { useRef} from "react";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';






const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <div id="parallaxBkg" className="hero" style={{ zIndex: -1 }} >
      <Parallax ref={parallaxRef} pages={4} style={{ width: '100%', height: '100%', top: '0', left: '0' }} className='parallax'>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer " id="imgBackgroundBase"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer " id="imgBackgroundGlitter"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer " id="imgThirdRow"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.15}>
          <div className="animation_layer " id="imgSecondRow"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={-0.25}>
          <div className="animation_layer " id="imgFirstRow"></div>
        </ParallaxLayer>


      </Parallax>
    </div>


  );
};

export default Hero;
