import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './css/Header.css';
import './css/AboutUs.css';
import './css/WhatYouCanDo.css';
import './css/Investors.css';
import './css/Footer.css';
import SampleChart from '../assets/sample-chart.svg';
import Man1 from '../assets/man1.png';
import Girl1 from '../assets/girl1.png';
import Woman1 from '../assets/woman1.png';
import Woman2 from '../assets/woman2.png';
import Woman3 from '../assets/woman3.png';
import { MdSkateboarding } from 'react-icons/md';
import { ImArrowUp } from 'react-icons/im';



const LandingPage = () => {
  return (
    <>

      <Navbar />
      <header>
        <div className='header-section'>
          <div className='overlay'>
            <div className='header-content-text container--narrow'>
              <h1>Make a valuable insight from your stock prediction </h1>
              <p>Sightfull is an investment platform where investors can have useful insights to enable stock tradres make better deisions thgat will increase profits and reduce losses.</p>
              <button className='header-section-button'>Go to Dashboard</button>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className='whatwedo'>
          <h1 className='whatwedo-title'>What we do?</h1>
          <div className='whatwedo-section'>
            <div className='whatwedo-text'>
              <h1>We help you <span>monitor</span> your risk and visualize insight.</h1>
              <p>Sightfull is an investment platform where investors can have useful insights to enable stock tradres make better deisions thgat will increase profits and reduce losses.</p>
            </div>
            <div>
              <img src={ SampleChart } alt="a sample of a chart" className='whatwedo-img' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='whatyoucando'>
          <h1 className='whatyoucando-title'>What can you do?</h1>
          <p className='whatyoucando-text'>We give you full insight about  your stock</p>
          <div className='cards'>
            <div className="card">
              <div className="card-img">
                {/* <img src="" alt="" /> */}
                <MdSkateboarding className='icon'/>
              </div>
              <p className="card-title">Create an account</p>
              <p className='card-content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim</p>
            </div>

            <div className="card mg-top">
              <div className="card-img">
                {/* <img src="" alt="" /> */}
                <MdSkateboarding className='icon'/>
              </div>
              <p className="card-title">Create an account</p>
              <p className='card-content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim</p>
            </div>

            <div className="card mg-top">
              <div className="card-img">
                {/* <img src="" alt="" /> */}
                <MdSkateboarding className='icon'/>
              </div>
              <p className="card-title">Create an account</p>
              <p className='card-content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='investors'>
          <div className='investors-section'>
            <h1 className='investors-title'>Lovely sound of investors</h1>
            <div className='investor-images'>
              <img src={Man1} alt="" className='man1'/>
              <img src={Woman1} alt="" className='woman1'/>
              <img src={Girl1} alt="" className='girl1'/>
              <img src={Woman2} alt="" className='woman2'/>
              <img src={Woman3} alt="" className='woman3'/>
            </div>

            <p className='investors-text1'>Amazing Platform</p>
            <p className='investors-text2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <h4>John Doe</h4>

          </div>
        </div>
      </section>

      <footer>
        <div className='footer-section'>
          <h1 className='footer-title'>Have any questions?</h1>
          <p className='footer-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          
          <form className='details'>
            <div>
              <input type="text" id="fullname" name="fullname" placeholder="Fullname" />
            </div>
            <div>
              <textarea name="Message" id="message" cols="30" rows="3" placeholder='Message'></textarea>
            </div>
            
            <button className='sendusamessage'>Send us a message</button>
          </form>
        
        </div>

        <div className='gototop-border'></div>
        <ImArrowUp className='gototop-icon'/>
        <p className='gototop-text'>Go to Top</p>

        

      </footer>

      <div className='sightfull-text'>
        <h1>Sightfull</h1>
        <p>2022 All right reserved</p>
      </div>

    </>
  )
}

export default LandingPage;