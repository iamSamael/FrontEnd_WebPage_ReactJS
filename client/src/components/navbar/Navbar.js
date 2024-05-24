import './navbar.css'
import logo from '../../resources/cargo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Navbar () {
    return(
        <div className="navbar">
            <section className="header_logo">
                <img src={logo} width='60px' height='60px' alt="logo iamge"/>
            </section>
            <section className="header_buttons">
                <section className="section_links">
                    <Link to="/">
                        <button className="home-btn"><p>HOME  <FontAwesomeIcon icon={faCaretDown} /></p> </button>
                    </Link>

                    <button><p>PAGES <FontAwesomeIcon icon={faCaretDown} /></p> </button>

                    <Link to="/tracking">
                    <button><p>TRACKING </p></button>
                    </Link>

                    <Link to="/services">
                        <button><p>SERVICES <FontAwesomeIcon icon={faCaretDown} /></p> </button>
                    </Link>

                    <Link to="/blog">
                        <button><p>BLOG <FontAwesomeIcon icon={faCaretDown} /></p> </button>
                    </Link>
                </section>

                <section className="section_buttons">
                    <Link to="/getQuote">
                        <button className="get-a-quote"> GET A QUOTE</button>
                    </Link>
                    <Link to="/signin">
                        <button className="sign-in"> SIGN IN</button>
                    </Link>
                </section>

            </section>
        </div>
    )
}

export default Navbar