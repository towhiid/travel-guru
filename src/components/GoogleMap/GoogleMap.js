import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMap = (props) => {
   
    return (
        <div>
            <Map google={props.google} zoom={10}>
 
            <Marker onClick={props.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={props.onInfoWindowClose}>
                <div>
                <h1>{props.selectedPlace}</h1>
                </div>
            </InfoWindow>
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCZQdWZWsNyakL30EbvVherj04c9HcqFc8")
  })(GoogleMap)