import './stats.css'
import StatCards from "./StatCards";
import Counter from "./Counter";
function Stats () {
    return (
        <div className="statDisplay">
            <StatCards propValue = {<Counter targetNumber = {890} setTime = {2}/>} propDesc = "delivered packages"/>
            <StatCards propValue = {<Counter targetNumber = {137} setTime = {10}/>} propDesc = "countries covered"/>
            <StatCards propValue = {<Counter targetNumber = {740} setTime = {2}/>} propDesc = "tons of goods"/>
            <StatCards propValue = {<Counter targetNumber = {600} setTime = {4}/>} propDesc = "satisfied clients"/>
        </div>

    )
}

export default Stats
