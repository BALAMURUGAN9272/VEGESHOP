import React, { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getproducts } from '../Actions/productsactions';
import {useDispatch, useSelector }from 'react-redux';
import { Link } from 'react-router-dom';

function Ourproducts() {

    const dispatch = useDispatch()
      const {products  }  =  useSelector((state)=>state.productsState)

  useEffect(()=>{
     dispatch(getproducts)
  }
  
  
  ,[])
  return (
    <div className='vegepro'>
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
    <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
      
        </div>   

        
    
   

    </Col>
    


                  ))}
                
                </Fragment>

            </Row>
        </Container>
      
    </div>
  )
}

export default Ourproducts
