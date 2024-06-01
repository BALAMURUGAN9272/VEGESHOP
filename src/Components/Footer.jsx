import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footer from '../Assets/WhatsApp Image 2024-05-31 at 11.47.19 PM.jpeg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <div className='column pt-3 pb-3'>
        <Container  >
            <Row>
                <Col>
                <div className='foothead'>
                <div className='footfont mt-3'>FRESHMART</div>
                    <div className='content1'>Vegetables are important sources of many nutrients, including potassium.</div>
                    <div className='content1 mt-3'>Vegetables are important sources of many nutrients, including potassium.</div>


                </div>
                
                </Col>
                <Col>
                <div className='foothead'>
                  <div className='footfont mt-3'> NEWSLETTER</div>
                    <div className='content1'>Vegetables are important sources of many nutrients, including potassium.</div>

                    <>
                  <input className='inputfoot' type='text' placeholder='name@example.com' id='email' label='@gmail...'></input>
        
      
    </>
                    


                </div>
                
                </Col>

                <Col>
                <div className='foothead'>
                <div className='footfont mt-3'>OPENING HONOR</div>
                    <div className='content1'>Vegetables are important sources of many nutrients, including potassium.</div>
                    <div className='content1 mt-3'>Vegetables are important sources of many nutrients, including potassium.</div>


                </div>
                
                </Col>
                <Col>
                <div className='footfont mt-3'>CONTACTS</div>
                <div className='contis'>Email: balachem17@gmail.com</div>
                <div className='contis'>Phone: 91+888999966</div>
                <div className='contis'>Insta :momomo</div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Footer
