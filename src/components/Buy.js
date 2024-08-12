import React from 'react';
import { Link } from 'react-router-dom';
import cal6 from './images/cal6.jpg';

export default function Buy() {
  return (

    <div className="container">
    <div className="row pt-5 pb-1">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>My Cart</h2>
            <Link className="btn btn-outline-primary" to="/">Continue Shopping</Link>
        </div>
        
        <div className="row border border-3 rounded text-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <img src={cal6} alt="Product" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'cover' }} />
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-5 mb-3 text-center">
                <h3 className="card-text">Sona Urea</h3>
                <h5 className="small text-muted mt-2">
                    Brand: No Brand | More Lawn & Garden from No Brand
                </h5>
                <div className="d-flex justify-content-center mt-3">
                    <a href="/delete" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove Product" className="text-reset text-decoration-none me-2">
                        <i className="fa-solid fa-trash fa-lg border border-3 rounded border-primary p-3"></i>
                    </a>
                    <Link className="text-reset text-decoration-none" to="/Buy" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Product">
                        <i className="fa-regular fa-pen-to-square fa-xl border border-3 rounded border-dark p-3"></i>
                    </Link>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-3 text-center">
                <h4 className="card-text text-orange">Rs: 2400</h4>
                <h5 className="card-text">Quantity: 4</h5>
            </div>
        </div>
        
        <div className="text-center mt-4">
            <Link className="btn-lg btn-success px-4 bott" to="/Order">Proceed to Checkout</Link>
        </div>
    </div>
</div>
);
};

