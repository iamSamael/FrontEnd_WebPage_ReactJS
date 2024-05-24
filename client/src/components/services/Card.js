import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'

function Card(props){

    const  imageUrl  = props.image;
    return(

        <div className="card">
                    <img src={imageUrl} alt="image to be renderer" width="50%" height = "300px"></img>
                    <div className="card-text">
                        <h2>{props.heading}</h2>
                        <p>{props.text}</p>
                        <button className="card-button"> <FontAwesomeIcon icon={faCircleRight} />  <b>Read More</b></button>
                </div>
        </div>
    )
}

export default Card