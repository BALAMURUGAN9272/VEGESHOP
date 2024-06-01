import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import kisimoto from '../Assets/bowl-2.png'
import verify from '../Assets/verify.png'
import plant from '../Assets/plant.jpeg'
import leaf from '../Assets/leaf.jpeg'
import why from '../Assets/why.jpeg'

function Chooseuse() {
  return (
    <div >
        <Container>
            <Row>
                <Col lg={12}>
                    <div className='maindiv mt-3'>
                <div className='out1'>
                    <div className='outing'>
                        <img className='omegele' src={verify} alt=""  />
                        <div className='baha'>Savoring every bite.</div>
                        <div className='sasuke'>This food lover quote is an excellent reminder that there are endless ways to say, "I love you."</div>
                    </div>
                    
                </div>
                <div className='out2'>
                <div className='outing2'>
                        <img className='omegele' src={plant} alt=""  />
                        <div className='baha'>Savoring every bite.</div>
                        <div className='sasuke'>This food lover quote is an excellent reminder that there are endless ways to say, "I love you."</div>
                    </div>

                </div>
                <div className='out2'>
                <div className='outing3'>
                        <img className='omegele3' src={why} alt=""  />
                        <div className='baha'>Savoring every bite.</div>
                        <div className='sasuke'>This food lover quote is an excellent reminder that there are endless ways to say, "I love you."</div>
                    </div>
                    
                </div>
                <div className='out2'>
                <div className='outing4'>
                        <img className='omegele' src={leaf} alt=""  />
                        <div className='baha'>Savoring every bite.</div>
                        <div className='sasuke'>This food lover quote is an excellent reminder that there are endless ways to say, "I love you."</div>
                    </div>
                    
                </div>
                <div className='out2'>
                <div className='outing5'>
                        <img className='omegele' src={kisimoto} alt=""  />
                        <div className='baha'>Savoring every bite.</div>
                        <div className='sasuke'>This food lover quote is an excellent reminder that there are endless ways to say, "I love you."</div>
                    </div>
                    
                </div>
               
               </div>
                
                </Col>
                
            </Row>
        </Container>
      
    </div>
  )
}

export default Chooseuse
