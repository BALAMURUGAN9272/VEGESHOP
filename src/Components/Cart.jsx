import React from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";



function Cart() {

    const [show, setShow] = useState(false);

  return (
    <div className='Cart'>
 <>
      <Button variant="light" onClick={()=>setShow(!show)} className="me-2 position-relative">
      <i class="bi bi-cart4">
      <FaShoppingCart />
      </i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      3
    <span class="visually-hidden">Cart</span>
  </span>
      </Button>
      <Offcanvas show={show} onHide={()=>setShow(!show)}  placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </div>
  )
}

export default Cart
