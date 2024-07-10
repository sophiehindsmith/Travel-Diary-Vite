import React from "react";

export default function Places(props) {
  return (
    <section className="place-section">
      <div className="place-content">
        <img
          src={props.imageUrl}
          alt="Country of Japan"
          className="place-image"
        />

        <div className="place-text">
          <div className="location-header">
            <img
              src="https://www.pikpng.com/pngl/b/75-759569_pin-drop-png-icon-png-pin-drop-clipart.png"
              alt="Location pindrop icon"
              width="10px"
            />
            <p className="location-name">{props.location}</p>
            <a
              className="location-link"
              href={props.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>

          <h1>{props.title}</h1>
          <h3>
            {props.startDate} - {props.endDate}
          </h3>
          <p className="place-description">{props.description}</p>
        </div>
      </div>
      <hr />
    </section>
  );
}
