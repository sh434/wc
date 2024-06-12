import React from 'react'
import { Link } from "react-router-dom";


import InputCustom from '../globalComponents/molecules/InputCustom';
import ButtonDarkBlue from '../globalComponents/molecules/ButtonDarkBlue';
import SocialMediaIcons from '../globalComponents/footer2/SocialMediaIcons';
import URL from '../../assets/constants/url';
import { COMPANY_LOGO } from '../../assets/urls';


const FooterMob = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <img className="footer-logo" alt="" src={COMPANY_LOGO} />

        <ul className="contactWithUs">
          <h3 className='contact_us'>Contact Us</h3>
          <li>
            <a className="dailDeco" href="tel:+919089222000">
              <span>+919089222000</span>
            </a>
          </li>
          <li>
            <a className="dailDeco" href="mailto:customercare@wealth-clinic.com">
              <span>customercare@wealth-clinic.com</span>
            </a>
          </li>
        </ul>
        <div className="social-media-icons">
          <SocialMediaIcons />
        </div>
        <div className="newsletter">
          <input type="text" className="form-control" placeholder="Subscribe to our newsletter" />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h4 className="heading-footer">COMPANY</h4>
          <ul className="category">
            <li><Link to={URL.ABOUT}>About Us</Link></li>
            <li>Exclusive Projects</li>
            <li>360° Tour</li>
            <li><Link to={URL.TERMS_AND_CONDITIONS}>Terms & Conditions</Link></li>
            <li><Link to={URL.BLOGS}>Blogs</Link></li>
            <li><Link to={URL.CAREER}>Careers</Link></li>
            <li><Link to={URL.CONTACT_US}>Contact Us</Link></li>
            <li><Link to={URL.AWARD}>Awards</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="heading-footer">LATEST</h4>
          <ul className="category">
            <li>Latest Properties</li>
            <li>New Launches</li>
            <li><Link to={URL.EMI_CALCULATOR}>EMI Calculator</Link></li>
            <li>Happy Customers</li>
            <li>Media</li>
            <li><Link to={URL.PRIVACY_POLICY}>Privacy Policy</Link></li>
            <li><Link to={URL.DISCLAIMER}>Disclaimer</Link></li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="heading-footer">REAL ESTATE IN INDIA</h4>
          <ul className="category">
            <li>Projects in Moradabad</li>
            <li>Projects in Lucknow</li>
            <li>Projects in Gurugram</li>
            <li>Projects in Pune</li>
            <li>Projects in Ghaziabad</li>
            <li>Projects in Greater Noida</li>
            <li>Projects in Rishikesh</li>
            <li>Projects in Delhi</li>
            <li>Projects in Noida</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="heading-footer">POPULAR SEARCHES</h4>
          <ul className="category">
            <li>Residential in Ghaziabad</li>
            <li>Residential in Noida</li>
            <li>Residential in Greater Noida</li>
            <li>Commercial in Gurugram</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterMob