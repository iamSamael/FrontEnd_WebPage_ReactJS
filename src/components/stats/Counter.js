import './stats.css'
import React, { useState, useEffect, useRef  } from 'react';
function Counter({targetNumber, setTime }){
    const [currentNumber, setCurrentNumber] = useState(0); // Initial state
    const numberRef = useRef(null); // Ref for the component element

    useEffect(() => {
        const options = {
            root: null, // Observe the entire viewport
            threshold: 0.5, // Start animation when 50% of element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            const isIntersecting = entries[0].isIntersecting;
            if (isIntersecting) {
                const intervalId = setInterval(() => {
                    if (currentNumber < targetNumber) {
                        setCurrentNumber(prevCount => Math.min(prevCount + 1, targetNumber));
                    } else {
                        clearInterval(intervalId);
                    }
                }, setTime); // Update every 10 milliseconds (adjust as needed)

                return () => clearInterval(intervalId);
            }
        }, options);

        if (numberRef.current) {
            observer.observe(numberRef.current);
        }

        return () => {
            observer.disconnect(); // Disconnect observer on unmount
        };
    }, [targetNumber]); // Run effect only when targetNumber changes

    return (
        <div ref={numberRef}>
            <p>{currentNumber}</p>
        </div>
    );
}


export default Counter