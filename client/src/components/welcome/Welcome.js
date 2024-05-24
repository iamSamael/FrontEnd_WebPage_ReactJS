import './welcome.css'
import clipboard from '../../resources/clipboard-man.jpg'
import safetyCap from '../../resources/man-with-cart.png'
import {Link} from 'react-router-dom'
function welcome () {
    return (
        <div className="welcome-main">

            <div className="welcome-left">

                <div className="shapes">
                    <div className="parallelogram"></div>
                    <div className="triangle"></div>
                </div>

                <div className="images">
                    <div className="image-1">
                        <img src={clipboard} alt="man with clipboard" width="300px" height="400px"/>
                    </div>
                    <div className="image-2">
                        <img src={safetyCap} alt="man with safety cap" width="300px" height="400px"/>
                    </div>
                </div>

            </div>

            <div className="welcome-right">
                <div className="transmax-text">
                    <p className="heading-logistics">
                        TransMax Logistics around <span style={{ color: '#fa7b3f' }}> the world </span>
                    </p>

                    <p className="paragraph-1">
                        TransMax is the world's driving worldwide coordinations. supplier-- we uphold industry and exchange the worldwide trade of merchandise through land transport.
                    </p>
                    <p className="paragraph-2">
                        Our worth added administrations guarantee the progression of products proceeds consistency and supply chains stay lean and streamlined for progress.
                        <br/>
                        <Link to="/moreAboutUsTransMax"><button className="more-about-us-button">MORE ABOUT US</button></Link>
                        <div className="parallelogram-in-para"></div>
                    </p>
                </div>

            </div>


        </div>
    )
}

export default welcome