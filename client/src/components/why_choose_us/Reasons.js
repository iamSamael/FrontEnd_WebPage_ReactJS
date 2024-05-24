import './reasons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

function Reasons(props){
    return(
        <div className="reasons-container">
            <p>{props.reasonsText} </p>
            <button className="reasons-font-icon"><FontAwesomeIcon icon={faSquarePlus} /></button>
        </div>

    )
}

export default Reasons