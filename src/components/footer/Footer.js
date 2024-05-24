import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faVimeo, faTwitter, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons'

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
                    <input type="text" placeholder="enter email"/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="footer-content">
                <div className="div1">
                    <p>About us</p>
                    <p className="dotted-line">........</p>
                    <p>Lorem ipsum dolor sit amet, consectitor adipiscing elit</p>
                </div>
                <div className="div2">
                    <p>Latest News</p>
                    <p className="dotted-line">........</p>
                    <dl>
                        <dd> sed ut perspiciatis unde omnis iste natus error voluptetam</dd>
                        <dd>sed ut perspiciatis unde omnis iste natus error voluptetam</dd>
                    </dl>
                </div>
                <div className="div3">
                    <p>Customer Service</p>
                    <p className="dotted-line">........</p>
                    <dl>
                        <dd>Support forums</dd>
                        <dd>Communication</dd>
                        <dd>FAQs</dd>
                        <dd>Privacy Policy</dd>
                        <dd>Rules and Conditions</dd>
                        <dd>Contact us</dd>
                    </dl>
                </div>
                <div className="div4">
                    <p>Customer Service</p>
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
                    Copyright &copy; all rights reserved. Site By XiteB &reg;

                </div>
                <div className="footer-footer-right">
                    <p className="font-icons">
                        <p><FontAwesomeIcon icon={faFacebook}/></p>
                        <p><FontAwesomeIcon icon={faVimeo}/></p>
                        <p><FontAwesomeIcon icon={faTwitter}/></p>
                        <p><FontAwesomeIcon icon={faBehance}/></p>
                        <p><FontAwesomeIcon icon={faDribbble}/></p>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default footer