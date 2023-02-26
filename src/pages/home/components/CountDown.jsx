import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/countdown.scss'  





export const CountDown = (props)=>{
  

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`5/6/${year}`) - +new Date();
      
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      
        return timeLeft;
      }
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
 

        return () => clearTimeout(timer);
      });


 

    return(
    
    <section className="u-align-center u-clearfix u-image u-shading u-section-1 u-section-countdown-1" data-image-width="1920" data-image-height="1080" id="carousel_8143">
   


    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      {/* <img src="/new_logo.png" alt="" className="u-image u-image-default u-image-1" data-image-width="300" data-image-height="202"/> */}
      <h2 className="u-text u-text-default u-text-1" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-direction="Up"> Duathlon Tafraout arrive bientôt !</h2>
      <p className="u-text u-text-default u-text-2" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-direction="Up">Le 6-7 mai 2023 à Tafraout.L'évènement "Duathlon Tafraout ⴷⵢⴰⵜⵍⵡⵏ ⵜⴰⴼⵔⴰⵡⵜ" <br/>offre l’opportunité de courir et faire du vélo entre les montagnes de l'Anti-Atlas du sud</p>
      <div className="u-countdown u-countdown-1" data-target-date="Sat, 01 Jan 2022 14:43:00 GMT" data-type="to-date" data-for="per-visitor" data-time-left="266h" data-timer-id="5ce0" data-target-number="100" data-direction="down" data-start-time="Wed, 22 Dec 2021 14:21:42 GMT" data-frequency="1s" data-after-count="none" data-redirect-url="https://">
        <div className=" u-spacing-30 row">
        
        
       
          <div className="  u-countdown-item u-radius-22 u-spacing-10 u-white u-countdown-item-2 ms-3 mt-2 col-md col-5">
            <div className="u-countdown-counter u-countdown-counter-2"><div className="u-countdown-number u-text-grey-75 px-5">{timeLeft.days}</div></div>
            <div className="u-countdown-label u-countdown-label-2">Jours</div>
          </div>


        
        
          <div className=" ms-3 u-countdown-item u-radius-22 u-spacing-10 u-white u-countdown-item-3 mt-2  col-md col-5">
            <div className="u-countdown-counter u-countdown-counter-3"><div className="u-countdown-number u-text-grey-75 px-5">{timeLeft.hours}</div></div>
            <div className="u-countdown-label u-countdown-label-3">Heures</div>
          </div>
         
          
          <div className="ms-3 u-countdown-item  u-radius-22 u-spacing-10 u-white u-countdown-item-4 mt-2  col-md col-5">
            <div className="u-countdown-counter u-countdown-counter-4"><div className="u-countdown-number u-text-grey-75 px-5">{timeLeft.minutes}</div></div>
            <div className="u-countdown-label u-countdown-label-4">Minutes</div>
          </div>

        

          <div className="ms-3 u-countdown-item  u-radius-22 u-spacing-10 u-white u-countdown-item-5 mt-2  col-md col-5">
            <div className="u-countdown-counter u-countdown-counter-5">
            
                <div className="u-countdown-number u-text-grey-75 px-5">{timeLeft.seconds}</div></div>
            <div className="u-countdown-label u-countdown-label-5">Secondes</div>
          </div>
          
       
        </div>
        <div className="u-countdown-message u-hidden">
          <p>Sorry, the time is up.</p>
        </div>
      </div>

      <Link
                to="/inscrire"
                className=" d-inline-block u-active-white u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-btn-round u-button-style u-hover-white u-none u-radius-8 u-btn-2"
              >  S'INSCRIRE
              </Link>
    
    
    </div>
  </section>)
}