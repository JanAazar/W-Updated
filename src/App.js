import './App.css';
import Marquee from 'react-fast-marquee';
import image_a from './assets/A.jpg';
import image_b from './assets/B.jpeg';
import image_c from './assets/C.jpg';
import image_d from './assets/D.jpeg';
import image_e from './assets/E.jpg';
import image_f from './assets/F.JPG';
import image_g from './assets/G.jpg';
import image_h from './assets/H.jpg';
import image_i from './assets/I.jpg';
import image_k from './assets/K.jpg';
import logo from './assets/logo.jpeg';
import star from './assets/star.png';
import ghost from './assets/ghost.png';
import camera from './assets/camera.png';
import feature_1 from './assets/center-1.png';
import feature_2 from './assets/center-2.png';
import feature_3 from './assets/center-3.png';
import { useRef} from 'react';


function App() {

  const message_1_spaces = window.innerHeight <= 750 ? "lets make " : "lets make";
  //const message_1_spaces = window.matchMedia("(orientation: landscape)").matches ? "lets make" : "lets make\n ";
  
  const bottomRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  

  return (
  <div className="Screen">

  <div class = 'Box_0'> 
  </div>
  <div className='Top_Box'>
  <button class="top_button" onClick={scrollToBottom}>join the W-list</button>
  </div>

  <div class = 'Box_1'>
  <div className='Box_1_inner'>
  <Marquee direction={window.innerWidth <= 786 ? "right" : "up"} speed={100} className='Marquee-Style'>
    <div>
      <img src={image_a} className='image_wrapper' alt='image_1' />
    </div>
    <div>
      <img src={image_b}  className='image_wrapper' alt='image_2' />
    </div>
    <div>
      <img src={image_c}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_d}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_e}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_f}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_g}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_h}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_i}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_k}  className='image_wrapper' alt='image_3' />
    </div>
  </Marquee>
  </div>
  </div>

  <div class = 'Box_2'>

    <img src={logo} className='logo_wrapper' alt='image_1'/>

    <div class="message_1" style={{ whiteSpace: 'pre-wrap' }}>
    {message_1_spaces} <span style={{fontStyle:'italic'}}>✨groupchats✨</span> fun again.
    </div>

    <div class="Box_2_boxes">
    <div class="Box_2_box_card">
      <img src={camera} className='Symbol' alt='image_1'/>
    <div class="Box_2_box_card_text"> 
      <span style={{fontWeight:500}}>live request: </span>
      <br />
      request the gc to send a live-picture in 2 minutes
    </div>
    </div>
    <div class="Box_2_box_card">
      <img src={ghost} className='Symbol' alt='image_1'/>
    <div class="Box_2_box_card_text">
      
      <span style={{fontWeight:500}}>no ghosting: </span>
      <br />
      share what you're doing to see they are doing
    </div>
    </div>
    <div class="Box_2_box_card">
      <img src={star} className='Symbol' alt='image_1'/>
    <div class="Box_2_box_card_text">
      
      <span style={{fontWeight:500}}>gc moments: </span>
      <br />
      star texts and live- pictures shared in the gc
    </div>
    </div>
    </div>


    <div class="Box_2_inner_3">
    
    <input class="Input_1" placeholder = "choose a username" />
    <input class="Input_2" placeholder= "your email address" />
    <button class="submit_button">join the W-list</button>
    </div>

  </div>

  

    <div className='VerticalDivider' style = {{marginLeft:'29vw'}}>
    </div>
    <div className='VerticalDivider' style = {{marginLeft:'6vw'}}>
    </div>

    <div className='Box_2_image_holder'>
    <img src={feature_1} className='Box_2_image' alt='image_1'/>
    <img src={feature_3} className='Box_2_image' alt='image_1'/>
    <img src={feature_2} className='Box_2_image' alt='image_1'/>
  </div>

    <div className="Box_2_inner_4">
    <br />
    <div class="message_1">
    making social media social again
    </div>
  <div class = "Box_2_inner_4_inner" ref={bottomRef} >
    
    <input class="Input_1" placeholder = "choose a username" />
    
    <input class="Input_2" placeholder= "your email address" />
    
    <button class="submit_button">join the W-list</button>
  </div>
  </div>

  <div class = 'Box_4_inner'>
  <Marquee direction={window.innerWidth <= 786 ? "right" : "up"} speed={80} className='Marquee-Style_2'>
    <div>
      <img src={image_a} className='image_wrapper' alt='image_1' />
    </div>
    <div>
      <img src={image_b}  className='image_wrapper' alt='image_2' />
    </div>
    <div>
      <img src={image_c}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_d}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_e}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_f}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_g}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_h}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_i}  className='image_wrapper' alt='image_3' />
    </div>
    <div>
      <img src={image_k}  className='image_wrapper' alt='image_3' />
    </div>
  </Marquee>
  </div>

  

  </div>

  
  
   
  );
}

export default App;