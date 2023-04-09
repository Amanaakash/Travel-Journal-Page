import React from "react";
import locLogo from "./images/location.png"

export default function card(props){
    return(
        <div>
            <div className="c-container">
                <img src={props.imageUrl} alt="card-img" className="card-img" />
                <div className="card-content">
                    <section className="card-head">
                        <div className="location">
                            <div className="left">
                                <img src={locLogo} alt="location-logo" className="loc-logo"/>
                                <p><b>{props.location}</b></p>
                            </div>
                            <a className="loc-url" href={props.googleMapsUrl}><u>View on Google Maps</u></a>
                        </div>
                        <h3 className="c-title">{props.title}</h3>
                    </section>
                    <h5 className="start-end">{props.startDate} - {props.endDate}</h5>
                    <p className="description">{props.description}</p>
                    
                </div>
            </div>
            <hr class="solid"></hr> 
        </div>
    )
}