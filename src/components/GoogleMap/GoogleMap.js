import googleMapReact from 'google-map-react';
import React from 'react';

const GoogleMap = (props) => {
   
    return (
        <div>
            <googleMapReact
            bootstrapURLKeys={{ key: "AIzaSyB-QHjNTp7nnne6BN7CN8kaW_ik27a1zmI" }}
            defaultCenter={props.center}
            defaultZoom={this.props.zoom}
            >
                
            </googleMapReact>
        </div>
    );
};

export default GoogleMap;