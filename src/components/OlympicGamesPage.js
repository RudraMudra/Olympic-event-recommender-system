import React from 'react';
import './OlympicGamesPage.css';

const OlympicGamesPage = () => {
  return (
    <div>
      <div className="image-container">
        <img media="(min-width: 1260px)" src="https://img.olympicchannel.com/images/image/private/t_16-9_1920/f_auto/primary/ufiinqivfn8ig30anqpe" alt="Paris 2024 Olympic Games" />
        <img src='https://img.olympicchannel.com/images/image/private/t_s_w440/f_auto/primary/gpo3co3bpkqsikyznrns' alt="Paris 2024 Olympic Games Logo" className="centered-image" />
      </div>
      <section className='jjnZhs'>
        <h1 className='nNges'>Paris <br />2024</h1>
        <div className='dsJPHt'>
          <span>Date</span>
          26 July - 11 August
        </div>
        <div className='dsJPHt'>
          <span>Countdown</span>
          386 days
        </div>
        <div className='dsJPHt'>
          <span>Country</span>
          France
        </div>
        <div className='bqGWrY'>
          <a className='primary' href='https://www.paris2024.org' target='_blank'>
            Official Website
            <svg height="13" role='img' viewBox='0 0 15 13' width="15" xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 5.26557H11.8817L7.57006 1.11011L8.7219 0L15 6.05066L8.7219 12.1013L7.57006 10.9912L11.8817 6.83574H0V5.26557Z' fill='#000000'>
              </path>
            </svg>
          </a>
        </div>
      </section>

      <section>
        <div>
          <h2 className='heading_paris'>BONJOUR PARIS 2024</h2>
          <p className='new_para'>Get closer to the roar, thrill and <br /> buzz of the next Olympic Games.</p>
        </div>
      </section>


    </div>
  );
};

export default OlympicGamesPage;