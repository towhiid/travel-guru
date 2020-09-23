import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import Area from '../FakeData/Area';
import calendar from '../Images/Icon/calender_icon.png';

const Booking = () => {
    const {id} = useParams();
    const area = [...Area]
    const booking = area[id];
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <Container>
            <Row>
                <div className = "col-md-6">
                <h1 className = "text-warning">{booking.name}</h1>
                <p style = {{color: '#ffffff'}}>{booking.details}</p>
                </div>
                <div className = "col-md-6">
                   <div style = {{backgroundColor: '#ffffff'}} className = "p-4">
                       <form action="">
                           <label htmlFor="Origin">Origin</label>
                           <br/>
                        <input type="text" required className = "w-100" value = "Dhaka"/>
                        <label htmlFor="Origin">Origin</label>
                           <br/>
                        <input type="text" required className = "w-100" value = {booking.name}/>
                       <div className = "d-flex justify-content-between">
                    <div>
                    <label htmlFor="From">From</label>
                    <div className = "d-flex wrap">
                    <img src = {calendar} alt="" height = "30"/>&nbsp;&nbsp;
                    <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </div>
                    </div>
                    <div>
                        <label htmlFor="To">To</label>
                        <div className = "d-flex wrap">
                        <img src={calendar} alt="" height = "30"/>&nbsp;&nbsp;
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                        </div>
                        </div>
                    </div>
                    <br/>
                    <input type="submit" value="Start Booking" className ="btn btn-warning w-100"/>
                       </form>
                   </div>
                </div>
            </Row>
        </Container>
    );
};

export default Booking;