import './NewsCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

//"https://via.placeholder.com/150"
function NewsCard(props){
    return(
        <div className="news-card">
            <div className="date-text">
                <p className="news-date">
                    26 MAY
                </p>
            </div>
            <img src={props.image} alt="news image" width="50%" height="100%"/>
            <div>
                <h1>{props.heading}</h1>
                <h3>Admin <FontAwesomeIcon icon={faComment} />  15</h3>
                <p>{props.description}</p>
            </div>


        </div>

    )
}

export default  NewsCard