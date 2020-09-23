import React, { useState } from 'react';
import { Button, Card, CardDeck, Container, Row } from 'react-bootstrap';
import './Home.css';
import cox from '../Images/Image/Cox.png';
import sreemangal from '../Images/Image/Sreemongol.png';
import Area from '../FakeData/Area';
import { Link } from 'react-router-dom';


const Home = () => {
    const area = [...Area]
    const[areas, setAreas] = useState(area[0]);
    const handleArea = (id) => {
        setAreas(area[id]);
    }
    return (
        <Container>
            <Row>
                <div className = "col-md-6">
                    <h1 className = "text-warning">
                    {areas.name}
                    </h1>
                    <p style = {{color: '#ffffff'}}>{areas.details}</p>
                    <Link to = {`/booking/${areas.id}`}><Button className = "btn btn-warning">Booking</Button></Link>
                </div>
                    
                <div className = "col-md-6">
<CardDeck>
  <Card onClick = {() => handleArea(0)} className = "bg-transparent">
  <Card.Body>
      <h5 style = {{color: '#ffffff'}}>Sundarban</h5>
    </Card.Body>
    <Card.Img variant="top" src="https://i.ibb.co/wBq9BZT/sundorbon.png" />
  </Card>
  <Card onClick = {() => handleArea(1)} Card className = "bg-transparent">
  <Card.Body>
    <h5 style = {{color: '#ffffff'}}>Cox's Bazar</h5>
    </Card.Body>
    <Card.Img variant="top" src={cox} />
  </Card>
  <Card onClick = {() => handleArea(2)} Card className = "bg-transparent">
  <Card.Body>
    <h5 style = {{color: '#ffffff'}}>Sreemangal</h5>
    </Card.Body>
    <Card.Img variant="top" src={sreemangal} />
  </Card>
</CardDeck>
    </div>
    </Row>
</Container>
    );
};

export default Home;