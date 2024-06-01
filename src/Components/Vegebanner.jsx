import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import requiree from '../Assets/banner/bg_2.jpg';
import banner2 from '../Assets/gadget (1).jpeg';
import banner3 from '../Assets/gadget (1).jpeg';
import Carousel from 'react-bootstrap/Carousel';



function Vegebanner() {

 
 
  return (
    <div className='vegeban'>

        <Container fluid>

           <Row>
              <Col >

              <Carousel>
      <Carousel.Item interval={2000}>
       <img
       className="d-block w-100"
       src={requiree}
       alt='' 
       ></img>
        <Carousel.Caption>
          <h2>Fresh vegetables</h2>
          <p className='d-none d-sm-block'>
            Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
       className="d-block w-100"
       src={banner2}
       alt=''
       ></img>
        <Carousel.Caption>
          <h2>Go green! Go Healthy!</h2>
          <p className='d-none d-sm-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
       className="d-block w-100 "
       src={banner3}
       alt=''
       ></img>
       
        <Carousel.Caption>
          <h2>pepperoni</h2>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                
                
              </Col>

           </Row>
           <Row className='mt-3'>
            <Col>
            <div className='round1'></div>
            <div  className='who'>Free shipping item </div> 
            <div className='you'><div className='man'>fast shipping with calculated time</div></div>

            </Col>
            <Col>
            <div className='round2'></div>
           <div  className='who'>express fast delicery </div> 
           <div className='you'><div className='man'>fast shipping with calculated time</div></div>
            
            </Col>
            <Col>
            <div className='round3'></div>
           <div  className='who'>express fast delicery </div>
           <div className='you'><div className='man'>fast shipping with calculated time</div></div>
            
            </Col>
            <Col>
            <div className='round4'></div>
           <div  className='who'>money back guraentee </div>
           <div className='you'><div className='man'>fast shipping with calculated time</div></div>
            </Col>
           </Row>

        </Container>
      
    </div>
  )
}

export default Vegebanner
