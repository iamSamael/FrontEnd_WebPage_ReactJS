import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faVimeo, faTwitter, faBehance, faDribbble, } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import image1 from '../../resources/footer/image1.jpg'
import image2 from '../../resources/footer/image2.jpg'
import image3 from '../../resources/footer/image3.jpg'
import image4 from '../../resources/footer/image4.jpg'
import image5 from '../../resources/footer/image5.jpg'
import image6 from '../../resources/footer/image6.jpg'

//<FontAwesomeIcon icon="fa-solid fa-hand-point-right" />
function footer () {
    return(
        <div className="footer-container">
            <div className="footer-heading">
                <div className="footer-text">
                    <h1>Weekly Newsletter</h1>
                    <h4>there are many variations of passages of lorem ipsum available</h4>
                </div>
                <div className="footer-input">
                    <input type="text" placeholder="enter your email"/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="footer-content">
                <div className="div1">
                    <p className="div1-text">About us</p>
                    <p className="dotted-line">........</p>
                    <div className="div1-text">
                        <p>Lorem ipsum dolor sit amet, consectitor adipiscing elit</p>
                        <p><FontAwesomeIcon icon={faPhone}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+94) 11 434 7575</p>
                        <p><FontAwesomeIcon icon={faLocationDot}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;42 Lily Ave, Colombo 00600</p>
                    </div>

                </div>
                <div className="div2">
                    <p className="div2-text">Latest News</p>
                    <p className="dotted-line">........</p>
                    <div className="div2-text">
                        <dl>
                            <dd> sed ut perspiciatis unde omnis iste natus error voluptetam</dd>
                            <dd>sed ut perspiciatis unde omnis iste natus error voluptetam</dd>
                        </dl>
                    </div>

                </div>
                <div className="div3">
                    <p className="div3-text">Customer Service</p>
                    <p className="dotted-line">........</p>
                    <div className="div3-text">
                        <dl>
                            <dd>Support forums</dd>
                            <dd>Communication</dd>
                            <dd>FAQs</dd>
                            <dd>Privacy Policy</dd>
                            <dd>Rules and Conditions</dd>
                            <dd>Contact us</dd>
                        </dl>
                    </div>

                </div>
                <div className="div4">
                    <p className="div3-text">Customer Service</p>
                    <p className="dotted-line">........</p>
                    <div className="footer-image-grid">
                        <img src={image1} alt="image 01" width="100px" height="100px"/>
                        <img src={image2} alt="image 01" width="100px" height="100px"/>
                        <img src={image3} alt="image 01" width="100px" height="100px"/>
                        <img src={image4} alt="image 01" width="100px" height="100px"/>
                        <img src={image5} alt="image 01" width="100px" height="100px"/>
                        <img src={image6} alt="image 01" width="100px" height="100px"/>
                    </div>
                </div>
            </div>

            <div className="footer-footer">
                <div className="footer-footer-left">
                    <p>Copyright &copy; all rights reserved. Site By XiteB &reg;</p>

                </div>
                <div className="footer-footer-right">
                    <p className="font-icons">
                        <p className="icon-list"><FontAwesomeIcon icon={faFacebook}/></p>
                        <p className="icon-list"><FontAwesomeIcon icon={faVimeo}/></p>
                        <p className="icon-list"><FontAwesomeIcon icon={faTwitter}/></p>
                        <p className="icon-list"><FontAwesomeIcon icon={faBehance}/></p>
                        <p className="icon-list"><FontAwesomeIcon icon={faDribbble}/></p>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default footer