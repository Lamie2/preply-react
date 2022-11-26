import './Footer.scss'
import facebook from "../.../../../assets/images/Facebook.png"
import instagram from "../.../../../assets/images/Instagram.png"
import youtube from "../.../../../assets/images/YouTube.png"



export const Footer = () => {
  return(
    <footer>
    <div className="footer">
      <div className="top">
        <ul>
          <li>
            <p className="title">Sitemap</p>
          </li>
          <li><a href="">Who we are</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">How it works</a></li>
          <li><a href="">Preply Global</a></li>
          <li><a href="">Status</a></li>
        </ul>
        <ul>
          <li>
            <p className="title">Work at Preply</p>
          </li>
          <li><a href="">Student</a></li>
          <li><a href="">Tutors</a></li>
          <li><a href="">Companies</a></li>
        </ul>
        <ul>
          <li>
            <p className="title">Support</p>
          </li>
          <li><a href="">Language Research Center</a></li>
          <li><a href="">Media Kit</a></li>
          <li><a href="">Affiliate program</a></li>
          <li><a href="">Corporate language training</a></li>
          <li><a href=""> Corporate training blog</a></li>
        </ul>
        <ul>
          <li>
            <p className="title">Newsletter</p>
          </li>
          <li><a href="">Registration and send your feedback</a></li>
          <form method="post" className="form">
            <input className="text" type="text" id="email" name="email" value="Your Email"/>
            <input className="submit" type="submit" value="Subscribe"/>
          </form>
        </ul>
      </div>
      
    </div>

    <div className="bottom">
      <ul>
        <li><img src="./image/fi-bs-copyright.png" alt=""/></li>
        <li>2012-2022 Preply Inc.</li>
      </ul>
      <ul>
        <li>LegalCenter</li>
        <li>PrivacyPolicy</li>
        <li>CookiePolicy</li>
      </ul>
      <ul className="social-media">
        <li><img style={{"marginTop":"8px"}} src={facebook} alt=""/></li>
        <li><img src={instagram} alt=""/></li>
        <li><img src={youtube} alt=""/></li>
      </ul>
    </div>
  </footer>

  )
}