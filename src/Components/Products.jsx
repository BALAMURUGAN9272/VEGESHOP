import React, { Fragment, useEffect } from 'react'
import { Button, Col ,Container,Row } from 'react-bootstrap'
import { getproducts } from '../Actions/productsactions'
import {useDispatch, useSelector }from 'react-redux'

function Products() {

  const dispatch = useDispatch()
      const {products  }  =  useSelector((state)=>state.productsState)

  useEffect(()=>{
     dispatch(getproducts)
  }
  
  
  ,[])
  return (
    <div className='productsection'>
      <Container>
        <Row className='display-flex'>
            <Col md={12} lg={3}>
                <div className=''>
                    <h2 className=' anaconda'>Crafted with excellent material.</h2>
                    <p className=''>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <Button   className="butthree">Explore</Button>
                    
                </div>
                </Col>
                <Fragment>
                  {products && products.map(product =>(

<Col md={12} lg={3}>
<div className='pitwo'>
<div className="pione ">
    <div className='yours'>
        <img src={product.image} className='lucky '/>
        <h3 className="yours product-tittle">{product.name}</h3>
        <strong className='product-price'>$%50.00</strong>
        </div>   
    </div>
    </div>
    </Col>
    


                  ))}
                
                </Fragment>
                    
                                </Row>
            </Container>
      
    </div>
  )
}

export default Products
