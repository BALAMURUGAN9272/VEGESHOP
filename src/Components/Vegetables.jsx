import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Vegebanner from './Vegebanner';
import Ourproducts from './Ourproducts';
import Chooseuse from './Chooseuse';
import Footer from './Footer';
import { NavLink } from 'react-bootstrap';
import Cart from './Cart';
import { Link } from 'react-router-dom';



function Vegetables() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link  to="/" className='nav1'>Home</Link>
            <Link  to="/banner"  className='nav1'>Menu</Link>
            <Link  to="/products"  className='nav1'>products</Link> 
            <Link  to="/choose"  className='nav1'>orders</Link>
            




           <div className='mart'> <Navbar.Brand href="#home">FreshMart</Navbar.Brand></div>
        <div className='cart '>
        
           <Cart/>
            </div>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Vegebanner/>
    <Ourproducts/>
    <Chooseuse/>
    
      
    </div>
  )
}

export default Vegetables
