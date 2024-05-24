import react from "react";
import {useState} from "react";
import {useEffect} from "react";
import './backToTopButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

function BackToTopButton(){
    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <div>
            {backToTop && (
                <button className="scroll-up-button" onClick={scrollUp}><FontAwesomeIcon icon={faArrowUpLong}/></button>
            )}
        </div>
    )
}

export default BackToTopButton