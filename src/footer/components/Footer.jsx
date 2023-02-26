import { useState , useEffect} from 'react'

import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'
import { NavLink } from 'react-router-dom';

import '../assets/footer.scss'

export const Footer = (props) => {





  return (
    <>
  <div class="social-buttons body-footer">
  <a href="#" class="social-button social-button--facebook" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="#" class="social-button social-button--linkedin" aria-label="LinkedIn">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="#" class="social-button social-button--snapchat" aria-label="Snapchat">
    <i class="fab fa-snapchat-ghost"></i>
  </a>
  <a href="#" class="social-button social-button--github" aria-label="GitHub">
    <i class="fab fa-github"></i>
  </a>
  <a href="#" class="social-button social-button--codepen" aria-label="CodePen">
    <i class="fab fa-codepen"></i>
  </a>
  <p className="text-muted mb-0 py-2">© 2023 DuathlonTafraout All rights reserved.</p>
</div>


 

</>

  )
}


