import React from 'react';
import { Link } from 'react-router-dom';
import carousel1 from './images/carousel1.jpg';
import carousel2 from './images/carousel2.jpg';
import carousel3 from './images/carousel3.jpg';
import dapFertilizer from './images/dap-18460-fertilizer-85727-28060.jpg';
import urea from './images/DAP-2.png';
import sona from './images/cal2.jpg';
import dap4 from './images/dap4.jpg';
import building from './images/building.jpg';
import col1 from './images/col-1.jpg';
import col2 from './images/col-2.jpg';
import c2 from './images/c2.jpg';
import col3 from './images/col-3.jpg';
import col4 from './images/col-4.jpg';
import col6 from './images/col-6.jpg';
import c1 from './images/brand-img_1.jpg';
import cal1 from './images/cal1.jpg';
import cal2 from './images/cal2.jpg';
import cal3 from './images/cal3.jpg';
import cal4 from './images/cal4.jpg';
import cal5 from './images/cal5.jpg';
import cal10 from './images/cal10.jpg';
// import $ from 'jquery';

export default function mainsec() {
  return (
    <>
      <div>
      <div className="container-fluid aid mt-2">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner dot">
            <div className="carousel-item active">
              <img src={carousel1} className="img-fluid d-block w-100" alt="Slide 1" style={{ backgroundColor: 'black' }} />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="img-fluid d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="img-fluid d-block w-100" alt="Slide 3" />
            </div>
          </div>
        </div>
      </div>

      <div className="container none cal mt-5">
        <h1 className="h1 mb-3">Our Latest Products</h1>
        <div className="row d-flex">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <img src={dapFertilizer} className="mx-auto d-block p-3" height="200px" alt="D.A.P" />
              <div className="card-body text-lg-start text-md-start text-sm-center">
                <h2>D.A.P</h2>
                <p className="card-text">DAP 500 mg Fertilizers For Plants <br /> & Gardening purposes 100%....</p>
                <span style={{ color: 'orangered' }}>
                  <p>Rs.1300</p>
                </span>
                <span className="fok">Rs.1690</span> -44% <br />
                <a href="#" className="btn btn-primary mt-3">View more</a>
                <Link to="/Categories" type="button" className="btn btn-secondary mt-3 ms-1">Add to Cart</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5">
            <div className="card">
              <img src={urea} className="rounded mx-auto d-block p-3" height="200px" alt="Urea" />
              <div className="card-body text-lg-start text-md-start text-sm-center">
                <h2>Urea</h2>
                <p className="card-text">DAP 500 mg Fertilizers For Plants <br /> & Gardening purposes 100%....</p>
                <span style={{ color: 'orangered' }}>
                  <p>Rs.1700</p>
                </span>
                <span className="fok">Rs.2499</span> -38% <br />
                <a href="#" className="btn btn-primary mt-3">View more</a>
                <Link to="/Categories" type="button" className="btn btn-secondary mt-3 ms-1">Add to Cart</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5">
            <div className="card">
              <img src={sona} className="rounded mx-auto d-block" height="200px" alt="Sona" />
              <div className="card-body text-lg-start text-md-start text-sm-center">
                <h2>Sona</h2>
                <p className="card-text">Kitchen Gardening Winter Vegetables Seeds 10 Packs</p>
                <span style={{ color: 'orangered' }}>
                  <p>Rs.88</p>
                </span>
                <span className="fok">Rs.199</span> -63% <br />
                <Link to="/" className="btn btn-primary mt-3">View more</Link>
                <Link to="/Categories" type="button" className="btn btn-secondary mt-3 ms-1">Add to Cart</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-4">
            <div className="card">
              <img src={dap4} className="rounded mx-auto d-block" height="200px" alt="D.A.P" />
              <div className="card-body text-lg-start text-md-start text-sm-center">
                <h2>D.A.P</h2>
                <p className="card-text">Kitchen Gardening Winter Vegetables Seeds 20 packs</p>
                <span style={{ color: 'orangered' }}>
                  <p>Rs.109</p>
                </span>
                <span className="fok">Rs.299</span> -67% <br />
                <Link to="/" className="btn btn-primary mt-3">View more</Link>
                <Link to="/Categories" type="button" className="btn btn-secondary mt-3 ms-1">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 id="about" className="text-center mt-4 mb-3">
        <span style={{ color: '#0069c7' }}>ABOUT US</span>
      </h1>
      <div className="container-fluid bag mb-5 p-3">
        <div className="row d-flex">
          <div className="col-lg-6 col-md-12 col-sm-12 text-center rounded lak">
            <img src={building} className="img-fluid"/>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 dol">
            <h1 className="mb-4">WELCOME TO <span style={{ color: '#0069c7' }}>ESSENCE</span></h1>
            <p>√ This is the highly Certified pesticide group in pakistan</p>
            <p>√ Pesticide formulating, ABC, importing & exporting</p>
            <p>√ Over 1000 pesticide formulas in various formulation types</p>
            <p>√ Customized crop protection products & packaging</p>
            <p>√ Professional crop protection consulting</p>
            <p>√ Experienced membership assistant service</p>
            <button type="button" className="btn btn-primary fla">Learn more</button>
            <i className="fa-solid fa-arrow-right fal"></i>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-4 met">
        <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6-center ali">
            <img src={c2} className="img-fluid w-100" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6-center">
            <img src={col1} className="img-fluid"/>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6-center">
            <img src={col3} className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6-center">
            <img src={col4} className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6-center">
            <img src={col2} className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6-center">
            <img src={col6} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
 
    <div className="container-fluid gren p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 lok">
            <img className="img-fluid w-100" src={c1} alt="Brand"/>
          </div>
          <div className="ms-lg-5 col-lg-5 col-md-12 col-sm-12 text-light ps-lg-2 nara pt-lg-5 pt-md-0 pt-sm-0">
            <h1>We grow diversity</h1>
            <p className="lh-3 fs-5">
              An equal opportunity employer, Ashali Fertilizers welcomes <br />
              individuals from all walks of life and celebrates diversity and <br />
              inclusion in the workplace. We also provide a chance to beginners for gaining experience through internship.
            </p>
            <button type="button" className="btn btn-primary fla">
              Next Steps
            </button>
            <i className="fa-solid fa-arrow-right fal"></i>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5 none">
        <h1 className="text-center mb-3">Categories</h1>
        <div className="row d-flex">
          {[
            { src: cal1, title: 'Pure Indigo', description: 'This is used for killing insects from fields', price: '1700', oldPrice: '2500' },
            { src: cal3, title: 'Pure Indigo', description: 'This is used for killing insects from fields', price: '1700', oldPrice: '2500' },
            { src: cal2, title: 'Pure Indigo', description: 'This is used for killing insects from fields', price: '1700', oldPrice: '2500' },
            { src: cal4, title: 'Pure Indigo', description: 'This is used for killing insects from fields', price: '1700', oldPrice: '2500' },
            { src: cal5, title: 'Pure Indigo', description: 'This is used for killing insects from fields', price: '1700', oldPrice: '2500' },
            { src: cal10, title: 'Pure Indigo', description: 'This is used for killing insects from fields', price: '1700', oldPrice: '2500' },
          ].map((item, index) => (
            <div className="col-lg-2 col-md-4 col-sm-12" key={index}>
              <div className="card p-2 text-center">
                <a href="./categories.php">
                  <img height={200} className="mx-auto rounded d-block" src={item.src} alt={item.title} />
                </a>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                  <h3>{item.title}</h3>
                  <span style={{ color: '#0069c7' }}>
                    <h6 className="mt-2">{item.description}</h6>
                  </span>
                  <div className="bod mt-2">
                    <span style={{ color: 'rgb(254, 91, 31)' }}>
                      <h3 className="mt-2">Rs.{item.price}</h3>
                    </span>
                    <span style={{ textDecoration: 'line-through' }}>{item.oldPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </>
  )
}

