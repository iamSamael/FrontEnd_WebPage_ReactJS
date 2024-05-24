import './statCard.css'
function StatCards(props){
    return(
        <div className="statCards">
            <div className="stat-background">
                {props.propValue}
            </div>
            <p className="propertyValue">{props.propValue}</p>
            <p className="propertyDesc">{props.propDesc}</p>
        </div>
    )
}

export default StatCards