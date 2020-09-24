import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ratingImage from '../Images/Icon/star_1_.png';

const HotelDetail = (props) => {
    const { title, feature, details, cancel, rating, price, image} = props.data;
    return (
        <Container>
            <Row className = "m-3">
                <div className = "col-md-7">
                   <img src={image} width = '200' height = "150" alt=""/>
                </div>
                <div className = "col-md-5">
                    <h5><strong>{title}</strong></h5>
                    <br/>
                    <small>{feature}</small>
                    <br/>
                    <small>{details}</small><br/>
                    <small>{cancel}</small>
                    <div className = "d-flex wrap">
                        <img src={ratingImage} width = '20' height ="20" alt=""/>&nbsp;&nbsp;

                    <small>{rating}</small>&nbsp;&nbsp;
                    <small>{price}/night</small>
                    </div>

                </div>
            </Row>
        </Container>
    );
};

export default HotelDetail;