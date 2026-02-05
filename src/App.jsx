import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}


// Media
import multiversum from './assets/background/multiversum.mp4';
import universe from './assets/background/universe.mp4';
import arrow from './assets/background/arrow.gif';
import construction from './assets/background/construction.png';

// React hook
import {useRef, useEffect, useState} from 'react';

// React library
import {Parallax, ParallaxLayer} from "@react-spring/parallax";


function App() {

  // null, weil <video> noch nicht im DOM
  const firstVideoReference = useRef(null);
  const secondVideoReference = useRef(null);
  
  
   function firstVideoLoad() {
      if (firstVideoReference.current) {
          firstVideoReference.current.playbackRate = 0.8;
          firstVideoReference.current.play();
    }
  }

 function secondVideoLoad() {
      if (secondVideoReference.current) {
          secondVideoReference.current.playbackRate = 1;
          secondVideoReference.current.play();
    }
  }

// Kurs 100% abgeschlossen

  const [complete, setComplete] = useState(0);
  const target1 = 100;

  useEffect(function() {
  let interval;

  if (complete < target1) {
    interval = setInterval(function() {
      setComplete(function(previous) {
        return Math.min(previous + 1, target1);
      });
    }, 85);
  }

  return function() {
    clearInterval(interval);
  };

}, [complete]);


// Kurs 60% abgeschlossen

  const [semiComplete, setSemiComplete] = useState(0);
  const target2 = 60;

  useEffect(function() {
  let interval;

  if (semiComplete < target2) {
    interval = setInterval(function() {
      setSemiComplete(function(previous) {
        return Math.min(previous + 1, target2);
      });
    }, 80);
  }

  return function() {
    clearInterval(interval);
  };

}, [semiComplete]);






  return (

    <Parallax  pages={2}>


        <ParallaxLayer offset={0} speed={0} factor={2}>

            <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #000000, #0b0b0b, #232323)'}}/>

        </ParallaxLayer>



        <ParallaxLayer offset={0} speed={1} factor={1}>

            <video src={multiversum} ref={firstVideoReference} onLoadedMetadata={firstVideoLoad} autoPlay loop muted 

              style = {{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%), ' +
                'linear-gradient(to bottom, transparent 0%, black 0%, black 30%, transparent 100%)',

                maskImage:
                'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%), ' +
                'linear-gradient(to bottom, transparent 0%, black 0%, black 30%, transparent 100%)',

                WebkitMaskComposite: 'destination-in',
                maskComposite: 'intersect' }}/>

        </ParallaxLayer>



        <ParallaxLayer offset={0.85} speed={0.5} factor={1}>

            <img src={arrow}
              
              style = {{
                position: 'absolute',
                top: '30px',
                left: '51%',
                transform: 'translateX(-50%)',
                width: '70px', 
                height: 'auto' }}/>

        </ParallaxLayer>



        <ParallaxLayer offset={0.9} speed={0.5} factor={1}>

            <img src={construction}
              
                style = {{
                  position: 'absolute',
                  filter: 'contrast(35%)',
                  top: '40%', 
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '50%',
                  height: 'auto',
                  zIndex: 10 }}/>

        </ParallaxLayer>



        <ParallaxLayer offset={1} speed={1} factor={1}>
              
              <video src={universe} ref={secondVideoReference} onLoadedMetadata={secondVideoLoad} autoPlay loop muted
              
                  style = {{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100vh',
                  objectFit: 'cover',
                  WebkitMaskImage:
                  /*'linear-gradient(to right, transparent 0%, white 10%, black 90%, transparent 100%), ' + */
                  'linear-gradient(to bottom, transparent, black 80%)',

                  maskImage:
                  /* 'linear-gradient(to right, transparent 0%, white 10%, black 90%, transparent 100%), ' + */
                  'linear-gradient(to bottom, transparent, black 80%)',

                 /* WebkitMaskComposite: 'destination-in',
                  maskComposite: 'intersect'*/ }}/>


              <div
                  style = {{
                  position: 'absolute',
                  top: '25%',
                  left: '20%',
                  transform: 'translateX(-60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  zIndex: 20}}>


                  {/*GitHub*/}

                      <div
                          style = {{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px' }}>

                              <div
                                  style = {{
                                  width: '400px',
                                  height: '30px',
                                  background: '#fbfcfb',
                                  filter: 'contrast(60%)',
                                  borderRadius: '30px',
                                  overflow: 'hidden' }}>

                                    <div
                                        style = {{
                                        height: '100%',
                                        width: `${complete}%`,
                                        background: 'linear-gradient(to right, #FFDA00, #F05E00)',
                                        borderRadius: '20px',
                                        display: 'grid',
                                        placeItems: 'center',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        transition: 'width 0.3s ease'}}>
                                        GitHub {complete}%

                                    </div>

                              </div>

                            <a href="https://www.dropbox.com/scl/fi/8kuvmi75sbk7tu2lm4bjc/GitHub.pdf?rlkey=qqaaybmrymlh88s4ztwgkeqzj&st=y9ccji4s&dl=0" target="_blank" style={{color: '#fbfcfb', filter: 'contrast(60%)', textDecoration: 'underline'}}>Zertifikat</a>

                        </div>



                    {/*Visual Design*/}

                        <div
                            style = {{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'}}>

                                  <div
                                      style =  {{
                                      width: '400px',
                                      height: '30px',
                                      background: '#fbfcfb',
                                      filter: 'contrast(60%)',
                                      borderRadius: '30px',
                                      overflow: 'hidden'}}>
      
                                          <div
                                                style = {{
                                                height: '100%',
                                                width: `${complete}%`,
                                                background: 'linear-gradient(to right, #FFDA00, #F05E00)',
                                                borderRadius: '20px',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                transition: 'width 0.3s ease'}}>
                                                Visual Design {complete}%
                                          
                                          </div>

                                    </div>

                            <a href="https://www.dropbox.com/scl/fi/wldnxcpw2gl49fv0ey1kr/Visual-Design.pdf?rlkey=bm7j899uil7xovldi8h3jz73y&st=ptxn28ou&dl=0" target="_blank" style={{color: '#fbfcfb', filter: 'contrast(60%)', textDecoration: 'underline'}}>Zertifikat</a>

                        </div>


                    {/*Color Design*/}

                        <div
                            style = {{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'}}>

                                  <div
                                      style =  {{
                                      width: '400px',
                                      height: '30px',
                                      background: '#fbfcfb',
                                      filter: 'contrast(60%)',
                                      borderRadius: '30px',
                                      overflow: 'hidden'}}>

                                            <div
                                                style = {{
                                                height: '100%',
                                                width: `${complete}%`,
                                                background: 'linear-gradient(to right, #FFDA00, #F05E00)',
                                                borderRadius: '20px',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                transition: 'width 0.3s ease'}}>
                                                Color Design {complete}%
                                          
                                          </div>

                                    </div>

                            <a href="https://www.dropbox.com/scl/fi/dna8kz8229l9q1y0rubmi/Color-Design.pdf?rlkey=ked1c5iwlibiozgjxbctpktwb&st=qqjjhggs&dl=0" target="_blank" style={{color: '#fbfcfb', filter: 'contrast(60%)', textDecoration: 'underline'}}>Zertifikat</a>

                        </div>


                      {/*Navigation Design*/}

                        <div
                            style = {{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'}}>

                                  <div
                                      style =  {{
                                      width: '400px',
                                      height: '30px',
                                      background: '#fbfcfb',
                                      filter: 'contrast(60%)',
                                      borderRadius: '30px',
                                      overflow: 'hidden'}}>

                                            <div
                                                style = {{
                                                height: '100%',
                                                width: `${complete}%`,
                                                background: 'linear-gradient(to right, #FFDA00, #F05E00)',
                                                borderRadius: '20px',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                transition: 'width 0.3s ease'}}>
                                                Navigation Design {complete}%
                                          
                                          </div>

                                    </div>

                            <a href="https://www.dropbox.com/scl/fi/l9d6fhc03yxvyhh7bhbaf/Navigation-Design.pdf?rlkey=m8q1cfdfrusbsdku0jwwx0jsn&st=92ruake7&dl=0" target="_blank" style={{color: '#fbfcfb', filter: 'contrast(60%)', textDecoration: 'underline'}}>Zertifikat</a>

                        </div>


                    {/*HTML*/}

                        <div
                            style = {{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'}}>
    
                                  <div
                                      style =  {{
                                      width: '400px',
                                      height: '30px',
                                      background: '#fbfcfb',
                                      filter: 'contrast(60%)',
                                      borderRadius: '30px',
                                      overflow: 'hidden'}}>

                                            <div
                                                style = {{
                                                height: '100%',
                                                width: `${complete}%`,
                                                background: 'linear-gradient(to right, #FFDA00, #F05E00)',
                                                borderRadius: '20px',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                transition: 'width 0.3s ease'}}>
                                                HTML {complete}%
                                          
                                          </div>

                                    </div>

                            <a href="https://www.dropbox.com/scl/fi/wi66jg0c8e7e71jvz6nhz/HTML.pdf?rlkey=y5i8yrh4l0t71iwiamxvoqir3&st=ohza7gpk&dl=0" target="_blank" style={{color: '#fbfcfb', filter: 'contrast(60%)', textDecoration: 'underline'}}>Zertifikat</a>

                        </div>


                      {/*CSS*/}

                        <div
                            style = {{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'}}>

                                  <div
                                      style =  {{
                                      width: '400px',
                                      height: '30px',
                                      background: '#fbfcfb',
                                      filter: 'contrast(60%)',
                                      borderRadius: '30px',
                                      overflow: 'hidden'}}> 

                                            <div
                                                style = {{
                                                height: '100%',
                                                width: `${semiComplete}%`,
                                                background: 'linear-gradient(to right, #FFDA00, #F05E00)',
                                                borderRadius: '20px',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                transition: 'width 0.3s ease'}}>
                                                CSS {semiComplete}%
                                          
                                          </div>

                                    </div>

                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" style={{color: '#fbfcfb', filter: 'contrast(60%)', textDecoration: 'underline'}}></a>

                        </div>


                      {/*JavaScript*/}

                        <div
                            style = {{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'}}>

                                  <div
                                      style =  {{
                                      width: '400px',
                                      height: '30px',
                                      background: '#fbfcfb',
                                      filter: 'contrast(60%)',
                                      borderRadius: '30px',
                                      overflow: 'hidden'}}>

                                           <div
                                                style = {{
                                                height: '100%',
                                                width: `${semiComplete}%`,
                                                background: 'linear-gradient(to right, #FFDA00, #F05E00)',
                                                borderRadius: '20px',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                transition: 'width 0.3s ease'}}>
                                                JavaScript {semiComplete}%
                                          
                                          </div>

                                    </div>

                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" style={{color: '#fbfcfb', filter: 'contrast(60%)', textDecoration: 'underline'}}></a>

                        </div>


                          <div
                              style = {{
                              marginTop: '15px',
                              color: '#F05E00',
                              fontWeight: 'bold',
                              fontSize: '18px',
                              lineHeight: '1.4',
                              filter: 'contrast(60%)'}}>

                            <p>Next:</p>
                            <p><a href="https://www.codecademy.com/learn/react-101" target="_blank" style={{color: '#F05E00', textDecoration: 'underline'}}>React</a></p>
                            <p><a href="https://www.codecademy.com/learn/learn-node-js" target="_blank" style={{color: '#F05E00', textDecoration: 'underline'}}>Node.js</a></p>
                            <p><a href="https://www.codecademy.com/learn/learn-express" target="_blank" style={{color: '#F05E00', textDecoration: 'underline'}}>Express</a></p>
                            <p><a href="https://www.codecademy.com/learn/learn-javascript-unit-testing" target="_blank" style={{color: '#F05E00', textDecoration: 'underline'}}>JavaScript Unit Testing</a></p>
                            <p><a href="https://www.codecademy.com/learn/learn-c-plus-plus" target="_blank" style={{color: '#F05E00', textDecoration: 'underline'}}>C++</a></p>
                            
                          </div>

                </div>




          </ParallaxLayer>


    </Parallax>




  )
}

export default App;
