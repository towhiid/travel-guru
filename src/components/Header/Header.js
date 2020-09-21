import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';


const Header = () => {
  const [loggedInUSer, setLoggedInUser] = useContext(UserContext);
    return (
        <>
        <Navbar bg="transparent" variant="ltransparent">
    <Navbar.Brand className='brand' href="/"><img src="https://i.ibb.co/2YpfYs8/Logo.png" alt=""/></Navbar.Brand>
    <Form inline className = "p-5">
      <FormControl className = 'search' type="text" placeholder="Search"/>
    </Form>
    <Nav className="ml-auto" style= {{color: "#ffffff"}}>
      <Link className = "p-5" to = "/home">Home</Link>
      <Link className = "p-5" href="#">News</Link>
      <Link className = "p-5" href="#">Destination</Link>
      <Link className = "p-5" href="#">Blog</Link>
      <Link className = "p-5" to = "/login"><Button>Login</Button></Link>
    </Nav>
    
  </Navbar></>
    );
};

export default Header;