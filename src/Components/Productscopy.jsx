import React from 'react'
import  { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getproducts } from '../Actions/productsactions';
import {useDispatch, useSelector }from 'react-redux';
import Cart from './Cart';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Productscopy() {

    const dispatch = useDispatch()
      const {products  }  =  useSelector((state)=>state.productsState)

  useEffect(()=>{
     dispatch(getproducts)
  }
  
  
  ,[])
  return (
    <div>
        <div className='vegepro'>
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

        <Container>
            <Row>
                <Col >
                <div className='ourone'>OUR<div className='ourtwo'>PRODUCTS</div> </div>
                
                </Col>
                
                
                

            </Row>

            <Row>

            <Fragment>
                  {products && products.map(product =>(

<Col lg={3}>

<div className="pione ">
    
        <img src={product.image} className='lucky '/>
        <h3 className="yours product-tittle">{product.name}</h3>
       
        <div className="ratings mt-auto">
      <div className="rating-outer">
        <div className="rating-inner"style={{width:`${product.ratings/5*100}%` }}></div>
      </div>
      
      
    </div>
    
    <p className="card-text">{product.price}</p>
      
        </div>   

        
    
   

    </Col>
    


                  ))}
                
                </Fragment>

            </Row>
        </Container>
      
    </div>


      
    </div>
  )
}

export default Productscopy
