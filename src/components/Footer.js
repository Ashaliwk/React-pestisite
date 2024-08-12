import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container-fluid mt-5">
      <footer className="text-center text-lg-start text-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Fertilizers are additional substances supplied to the crops to increase their
                  productivity. These are used by the farmers daily to increase the crop yield. These
                  fertilizers contain essential nutrients required by the plants, including nitrogen,
                  potassium, and phosphorus.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pesticides</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Insecticides</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Bactericides</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Herbicides</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Pakpattan Road, SWL 57000, PAK</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  ashali@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> 92309-7239667</p>
                <p><i className="fas fa-print me-3"></i> + 01 23456789</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: '#0069c7' }}>
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="#">Fertilizers.com</a>
        </div>
      </footer>
    </div>
  )
}
