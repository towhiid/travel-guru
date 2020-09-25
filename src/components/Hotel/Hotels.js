import React from 'react';
import { useParams } from 'react-router-dom';
import './Hotel.css';
import Hotel from '../FakeData/Hotel';
import { Container, Row } from 'react-bootstrap';
import HotelDetail from '../HotelDetail/HotelDetail';
import GoogleMap from '../GoogleMap/GoogleMap';

const Hotels = () => {
    const {name} = useParams();
    const data = [...Hotel];

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
                <GoogleMap></GoogleMap>
                
                </div>
            </Row>
        </Container>
    );
};

export default Hotels;