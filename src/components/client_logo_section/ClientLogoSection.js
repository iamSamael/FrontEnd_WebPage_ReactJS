import './client_logo_section.css'
import logo01 from '../../resources/logos/logo-1.jpg'
import logo02 from '../../resources/logos/logo-2.jpg'
import logo03 from '../../resources/logos/logo-3.jpg'
import logo04 from '../../resources/logos/logo-4.png'
import logo05 from '../../resources/logos/logo-5.png'
import logo06 from '../../resources/logos/logo-6.png'

//"https://via.placeholder.com/150" for default img background
function clientLogoSection () {
    return(
        <div className="logo-container">
            <img src={logo01} width="200px" height="200px" alt="logo 01"/>
            <img src={logo02} width="200px" height="200px" alt="logo 01"/>
            <img src={logo03} width="200px" height="200px" alt="logo 01"/>
            <img src={logo04} width="200px" height="200px" alt="logo 01"/>
            <img src={logo05} width="200px" height="200px" alt="logo 01"/>
            <img src={logo06} width="200px" height="200px" alt="logo 01"/>
        </div>
    )
}

export default clientLogoSection