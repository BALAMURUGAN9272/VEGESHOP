import React, { Fragment, useEffect } from 'react'
import { getProduct } from '../Actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Cart from './Cart';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Loader from './Loader';




function Productdetail() { 
      const dispatch = useDispatch()
    const {id} = useParams()
    const {product={} ,loading}=  useSelector((state) =>state.productstate)


    useEffect(()=>{
        dispatch(getProduct(id))
    },[dispatch,id])
  return (
    <>
    
    <Container fluid>
    <Navbar expand="lg" className="bg-body-tertiary">
     
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
      </Navbar>
    </Container>

    <Fragment>
      {loading? <Loader/> :
   
       <Fragment> 
        <h1 id='products_heading'>Cart</h1>
        <section id="products" className="container mt-5">
      <div className="row">
        
    
<div className="col-sm-12 col-md-6 col-lg-3 my-3">
<div className="card p-3 rounded">

  <img
    className="card-img-top mx-auto"
    src={product.image}
    alt='bala logo'
  />
  
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">
      <Link to={`/product/${product._id}`}>{product.name}</Link>
    </h5>
    <p className='id'>{product._id }</p>
    <div className="ratings mt-auto">
      <div className="rating-outer">
        <div className="rating-inner"style={{width:`${product.ratings/5*100}%` }}></div>
      </div>
      <span id="no_of_reviews">{product.numOfReviews}reviews</span>
    </div>
    <p className="card-text">{product.price}</p>
    <p><span className={product.stock >0?'greenColor':'redColor '}>{product.stock >0?'in stock':'out of stock'}</span></p>
    <p>Description</p>
    <p>{product.description}</p>
    <p>sold by : <strong>{product.seller}</strong></p>
    <Link to={`/product/${product._id}`}className="btn btn-block">View Details</Link>
  </div>
</div>
</div>



                   </div>
        
    </section></Fragment>}
    </Fragment>
    
    </>

    
  )
}

export default Productdetail
