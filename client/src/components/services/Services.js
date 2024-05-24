import './services.css'
import Card from "./Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleRight} from "@fortawesome/free-solid-svg-icons";
import ship from '../../resources/ship.jpg'
import plane from '../../resources/plane.jpg'
import {Tilt} from 'react-tilt'


const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            30,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower, the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
function services () {
    return(
        <div className="services">

            <div className="services-heading">
                <p>Real Solution, Real Fast!</p>
                <h1>Best Global Logistic Solutions.</h1>
            </div>

            <div className="services-card">
                <Tilt options={defaultOptions} style = {{shadow: 0}}>
                    <Card
                        heading="Air Freight Services"
                        image={ship}
                        text="At our Auto service Garage, we are fully appreciate how
                          difficult occur it is for people to find"
                    />
                </Tilt>

                <Tilt style = {{shadow: 0}}>
                    <Card
                        heading="Drone Services"
                        image={plane}
                        text="these are unique and often they differ from one industry
                          to the other. our logistics expertise"
                    />
                </Tilt>

            </div>

            <div className="services-footer">
                <p>Logistic & transport solutions saves your time. <button>Finds your solution <FontAwesomeIcon
                    icon={faCircleRight}/></button></p>

            </div>
        </div>
    )
}

export default services