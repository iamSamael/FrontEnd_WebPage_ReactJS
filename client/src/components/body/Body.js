import image from '../../resources/container.jpg'
import './body.css'
import Tilt from 'react-vanilla-tilt'

function Body () {
    return(
        <div className="container">

            <div className="left">
                <div className="span-left">
                    <p className="logistic">LOGISTIC</p>
                    <p className="shipping">Best Shipping</p>
                    <p className="partner">Partner</p>
                    <p className="body-para">
                        Amet, tempus egastas facilisis volutpat viverra molestie labortis posuere maecanas. molestie labortis posuere maecanas. Eget sapien, gravida nequi
                    </p>
                    <button className="discover-more-button">Discover More</button>
                </div>
            </div>

            <div className="right">
                <img src={image} alt="container" width="1200px" height="700px"/>
            </div>
        </div>
    )
}

export default Body