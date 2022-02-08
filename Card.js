export default function Card(props){
    return(
        <div className="divStyle">
            <img className="placeDesign" src={props.ltd.googleMapsUrl} width={"400px"}/>
            
            <p className="data"><img  src="location.png" width={"25px"}/> {props.ltd.location} &nbsp;
            <a href="https://unsplash.com/photos/WLxQvbMyfas">View on Google Maps</a>
            <p><b>{props.ltd.startDate} - {props.ltd.endDate}</b></p>
            <p>{props.ltd.description}</p>
            </p>
        </div>
    )
}