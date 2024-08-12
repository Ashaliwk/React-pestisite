import React from 'react';
import { Link } from 'react-router-dom';
import cal1 from './images/cal1.jpg';

export default function Categories() {
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-lg-4 col-md-8 col-sm-12">
                    <img height={300} className="mx-auto d-block w-100" src={cal1} alt="..." />
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 fert">
                    <h3 className='mt-lg-1 mt-sm-5'>1Kg Epsom Salt Natural Mineral Fertilizer / Beauty Health</h3>
                    <span style={{ color: '#0069c7' }}>
                        <h6 className="mt-2">Brand:No BrandMore Lawn & Garden from No Brand</h6>
                    </span>
                    <div className="bod mt-2">
                        <span style={{ color: 'rgb(254, 91, 31)' }}>
                            <h3 className="mt-3">RS.199</h3>
                        </span>
                        <span style={{ textdecoration: 'line-through' }}>Rs.300</span> -30%
                        <div className="qua mt-3">
                           <label htmlFor=""><h5>Quantity: </h5></label> 
                            <input className='ms-lg-2 ms-md-2' type="number" />
                        </div>
                        <div className="bat mt-3">
                            <button type="button" className="btn-lg btn-secondary ps-5 pe-5 mb-2">Buy now</button>
                            <Link type="button" to="/Buy" className="btn-lg btn-primary ms-lg-1 ps-5 pe-5 bott">Add to cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
