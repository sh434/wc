import React from 'react'
import { Link } from "react-router-dom";


import InputCustom from '../globalComponents/molecules/InputCustom';
import ButtonDarkBlue from '../globalComponents/molecules/ButtonDarkBlue';
import SocialMediaIcons from '../globalComponents/footer2/SocialMediaIcons';
import URL from '../../assets/constants/url';
import { COMPANY_LOGO } from '../../assets/urls';


const FooterMob = () => {
  return (
    <footer className="row m-0">
      <header className="col-md-4">
        <img className="footer-logo" alt="" src={COMPANY_LOGO} />

        <ul class="contactWithUs">
          <h3 className='contact_us'>
            Contact Us
          </h3>
          <li>
            <div>
              <a className="dailDeco" href="tel:+919089222000">
                <span>+919089222000</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                className="dailDeco"
                href="mailto:customercare@wealth-clinic.com"
              >
                <span>customercare@wealth-clinic.com</span>
              </a>
            </div>
          </li>
        </ul>
        <div style={{ marginTop: '-26px', textAlign: 'center' }}> <SocialMediaIcons /></div>
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <i className="fa fa-search" />
              <input
                type="text"
                className="form-control"
                placeholder="subscribe to our newsletter"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

      </header>
      <aside className="menuBg">
        <div className="container">
          <div className="row wc-container">
            {/* First Column */}
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <ul className="category">
                    <li>
                      <h4 className="heading-footer">COMPANY</h4>
                    </li>
                    <li>
                      <Link to={URL.ABOUT}>About Us</Link>
                    </li>
                    <li>Exclusive Projects</li>
                    <li>360° Tour</li>
                    <li>
                      <Link to={URL.TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to={URL.BLOGS}>Blogs</Link>
                    </li>
                    <li>
                      <Link to={URL.CAREER}>Careers</Link>
                    </li>
                    <li>
                      <Link to={URL.CONTACT_US}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={URL.AWARD}>Awards</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="category">
                    <li>
                      <h4 className="heading-footer">LATEST</h4>
                    </li>
                    <li>Latest Properties</li>
                    <li>New Launches</li>
                    <li>
                      <Link to={URL.EMI_CALCULATOR}>EMI Calculator</Link>
                    </li>
                    <li>Happy Customers</li>
                    <li>Media</li>
                    <li>
                      <Link to={URL.PRIVACY_POLICY}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={URL.DISCLAIMER}>Disclaimer</Link>
                    </li>
                    <li>Gallery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <ul className="category">
                    <li>
                      <h4 className="heading-footer">REAL ESTATE IN INDIA</h4>
                    </li>
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
                <div className="col-md-6">
                  <ul className="category">
                    <li>
                      <h4 className="heading-footer">POPULAR SEARCHES</h4>
                    </li>
                    <li>Residential in Ghaziabad</li>
                    <li>Residential in Noida</li>
                    <li>Residential in Greater Noida</li>
                    <li>Commercial in Gurugram</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </footer>
  )
}

export default FooterMob