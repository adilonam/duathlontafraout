
import { useEffect, useState } from 'react';
import '../assets/home.scss'  
 
import { NavLink } from 'react-router-dom';
import { CountDown } from './CountDown';

export const Home = (props)=> {
 
 
useEffect(() => {
 


}, [])



  

  




  return (
    <>
<CountDown></CountDown>
 
    
{/* <section className="u-align-left u-clearfix u-image u-section-1 u-section-present-1" src="" id="carousel_04c3">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-align-left u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-white u-group-1" style={{marginTop:"17em"}}>
          <div className="u-container-layout u-valign-middle u-container-layout-1">
            <h2 className="u-text u-title u-text-1" style={{fontSize:60}}>Duathlon Tafraout</h2>
            <p className="u-large-text u-text u-text-variant u-text-2"><span className='fw-bold'>Le 6-7 mai 2023 à Tafraout .</span> L'évènement "Duathlon Tafraout ⴷⵢⴰⵜⵍⵡⵏ ⵜⴰⴼⵔⴰⵡⵜ" offre l’opportunité de courir et faire du vélo entre les montagnes de l'Anti-Atlas du sud </p>
           

            <NavLink
              to={props.urls[2]}
              className="u-active-white u-align-left u-border-2 u-border-active-palette-4-base u-border-hover-palette-4-base u-border-palette-4-base u-btn u-btn-round u-button-style u-hover-white u-palette-4-base u-radius-50 u-text-active-black u-text-body-alt-color u-text-hover-black u-btn-2"
             
             >
                S'inscrire
            </NavLink>
          
       
          </div>
        </div>
      </div>
    </section> */}
    <section className="u-clearfix u-palette-4-base u-section-2" id="carousel_a285">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div className="u-expanded-width u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div className="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-1">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <img alt="" className="u-expanded-width u-image u-image-default u-image-1" data-image-width="1380" data-image-height="920" src="/images/duathlon-13.jpg"/>
                <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-1">Duathlon Full</h3>
                <div className="u-text u-text-default u-text-2">
                    <ul>
<li>Individuel : 10 km course, 72 km vélo, 5 km course</li>
<li>Relais : 10 km course, 72 km vélo, 5 km course</li>

                    </ul>
                
                </div>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item u-white u-list-item-2">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                <img alt="" className="u-expanded-width u-image u-image-default u-image-2" data-image-width="1380" data-image-height="920" src="/images/duathlon-14.jpg"/>
                <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-3">Duathlon Sprint</h3>
                <div className="u-text u-text-default u-text-4">   <ul>
<li>Individuel : 5 km course, 24 km vélo, 2.5 km course</li>
<li>Relais : 5 km course, 24 km vélo, 2.5 km course</li>

                    </ul>
                </div>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <img alt="" className="u-expanded-width u-image u-image-default u-image-3" data-image-width="1380" data-image-height="920" src="/images/duathlon-15.jpg"/>
                <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-5">Duathlon Enfants</h3>
                <div className="u-text u-text-default u-text-6">
                <ul>
<li>Duathlon : 1.5 km course, 4  km vélo, 800 m course</li>


                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
    <section className="u-align-left-sm u-align-left-xs u-clearfix u-palette-4-base u-section-3" id="carousel_c5e8">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h2 className="u-text u-text-1">Duathlon Tafraout</h2>
        <div className="u-shape u-shape-svg u-text-palette-4-light-2 u-shape-1">
          <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-ab91"></use></svg>
          <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-ab91"><path d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110
	C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2
	l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5
	c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z
	 M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6
	C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0
	C80.2,0,80.1,0,80,0z"></path></svg>
        </div>
        <img className="u-align-left u-image u-image-default u-image-1" data-image-width="1380" data-image-height="920" src="/images/duathlon-16.jpg"/>
        <div className="u-align-left u-container-align-left u-container-style u-group u-shape-rectangle u-white u-group-1">
          <div className="u-container-layout u-valign-middle u-container-layout-1">
            <h3 className="u-align-left u-text u-text-palette-4-base u-text-2">Tarif d'inscription :</h3>
 
 
              <ul className="u-align-left u-text fs-5">
                <li>Duathlon Full (600 dh)</li>
                  <li>Relais Full 2 personnes (2900 dh)</li>
                  <li>  Relais Full 3 personnes (1200 dh)</li>
                <li>Duathlon Sprint (350 dh)</li> 
                <li>Relais Sprint 2 personnes (550 dh)</li> 
                <li>Relais Sprint 3 personnes (750 dh)</li>
                <li>Duathlon Enfants (150 dh)</li>
                </ul> 
            <NavLink
              to={props.urls[2]}
              className="u-active-white u-align-left u-border-2 u-border-active-palette-4-base u-border-hover-palette-4-base u-border-palette-4-base u-btn u-btn-round u-button-style u-hover-white u-palette-4-base u-radius-50 u-text-active-black u-text-body-alt-color u-text-hover-black u-btn-2"
             
             >
                S'inscrire
            </NavLink>
        
          </div>
        </div>
      </div>
    </section>
  
  
  
    <section className="u-clearfix u-grey-5 u-section-6" id="carousel_9a91">
      <div className="u-expanded-width u-palette-4-base u-shape u-shape-rectangle u-shape-1"></div>
      <div className="u-shape u-shape-rectangle u-white u-shape-2"></div>
      <img className="u-image u-image-1" src="/images/duathlon-17.jpg" data-image-width="1000" data-image-height="958"/>
      <div className="u-container-style u-group u-shape-rectangle u-white u-group-1">
        <div className="u-container-layout u-container-layout-1">
          <h2 className="u-text u-text-1"> Mission, Vision, et Valeurs </h2>
          <p className="u-text u-text-2" style={{lineHeight:"1.3em"}}>Pour relever un grand défi de course, l'évènement "Duathlon Tafraout ⴷⵢⴰⵜⵍⵡⵏ ⵜⴰⴼⵔⴰⵡⵜ" offre l’opportunité de courir et faire du vélo entre les montagnes de l'Anti-Atlas du sud, tout en choisissant entre la course full ou relais full de (10 km course, 72 km vélo, 5 km course ) et la course sprint  ou relais sprint de (5 km course, 24 km vélo, 2.5 km course), ainsi la course destinée aux enfants de (1.5 km course, 4  km vélo, 800 m course). <br></br> <br></br>
    Cet événement cible tout type d’âge, et aura lieu exactement à TAFRAOUT à 166 km d'Agadir et l'une des destinations les plus relaxantes du Maroc. Sa beauté naturelle la rend une ville isolée et paisible.<br></br> <br></br>
     L'expérience duathlon tafraout offre à ses athlètes  et audiences une nuée d’animations, une aventure authentique,  et un éventail d’activités incroyablement large.
          </p>
          <NavLink
              to={props.urls[2]}
              className="u-active-white u-align-left u-border-2 u-border-active-palette-4-base u-border-hover-palette-4-base u-border-palette-4-base u-btn u-btn-round u-button-style u-hover-white u-palette-4-base u-radius-50 u-text-active-black u-text-body-alt-color u-text-hover-black u-btn-2"
             
             >
                S'inscrire
            </NavLink>
        </div>
      </div>
    </section>
   
    <section className="u-clearfix u-container-align-center-lg u-container-align-center-md u-container-align-center-xl u-grey-5 u-section-9" id="carousel_e10c">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div className="u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div className="u-container-align-center u-container-style u-list-item u-palette-4-base u-repeater-item u-list-item-1">
              <div className="u-container-layout u-similar-container u-container-layout-1">
                <h5 className="u-align-center u-custom-item u-text u-text-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">Nombre de participants</h5>
                <p className="u-align-center u-custom-item u-text u-text-2"><br/>  <span className='fs-3 fw-bold'> + 500 </span>
                </p>
              </div>
            </div>
            <div className="u-container-align-center u-container-style u-list-item u-palette-4-base u-repeater-item u-list-item-2">
              <div className="u-container-layout u-similar-container u-container-layout-2">
                <h5 className="u-align-center u-custom-item u-text u-text-3" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">Date/Lieu :</h5>
                <p className="u-align-center u-custom-item u-text u-text-4">
                  <br />
                  <span style={{"fontWeight": "700"}} className="mt-5"> Le 6-7 mai 2023 </span><br></br>
                  <span style={{"fontWeight": "700"}} className="mt-5">📍 Tafraout </span>
                
                </p>
              </div>
            </div>
            <div style={{width:"20em"}} className="u-container-align-center u-container-style u-list-item u-palette-4-base u-repeater-item u-list-item-3">
              <div className="u-container-layout u-similar-container u-container-layout-3">
                <h5 className="u-align-center u-custom-item u-text u-text-5" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">Contact :</h5>
                <p className="u-align-center u-custom-item u-text u-text-6">
               
                  <br/>
                  <span style={{"fontWeight": "700"}} className="">contact-duathlontafraout@gmail.com</span>
                  <br/>
            
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    
    
 


        </>

  )
}


