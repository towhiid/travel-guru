import React from 'react';
import { useParams } from 'react-router-dom';
import './Hotel.css';
import Hotel from '../FakeData/Hotel';
// import Area from '../FakeData/Area';
import { Container, Row } from 'react-bootstrap';
import HotelDetail from '../HotelDetail/HotelDetail';
import googleMapReact from 'google-map-react';

const Hotels = () => {
    const {name} = useParams();
    const data = [...Hotel];
    // const area = [...Area];

    // const specificArea = area.find(item => item.name === name);
    const hotels = data.filter(item => item.place === name);

    
    return (
        <Container>
            <Row style = {{backgroundColor: 'white'}}>
                <div className = "col-md-6">
                <div className = 'm-3'>
                    <h3 style = {{color: 'orange'}}>Stay in <strong><i>{name}</i></strong></h3>
                </div>
                {
                    hotels.map(item => <HotelDetail key = {item.id} data = {item}></HotelDetail>)
                }
                
                </div>
                <div className = "col-md-6">
                    <h3>Google Map</h3>
                <googleMapReact>{name}</googleMapReact>
                </div>
            </Row>
        </Container>
    );
};

export default Hotels;