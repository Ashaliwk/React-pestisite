import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <section className=" gradient-form m-2" style={{backgroundcolor:'white'}}>
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-xl-10">
          <div className="card fff rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style={{width: '185px'}} alt="logo"/>
                    <h4 className="mt-1 mb-5 pb-1">The Fertilizers Suppliers</h4>
                  </div>

                  <form>
                    <p>Please login to your account</p>
                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" className="form-control" placeholder="Username" />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example22" className="form-control" placeholder="Password" />
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg mb-3 me-2 p-3" type="button">Log
                        in</button>
                      <Link className="text-muted"to="/">Forgot password?</Link>
                    </div>

                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline"> <Link to="/Signup">Create new</Link> </button>
                    </div>
                  </form>

                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-dark px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a company</h4>
                  <p className="small mb-0">Fertilizers are generally defined as "any material, organic or inorganic,
                    natural or synthetic, which supplies one or more of the chemical elements required for the plant
                    growth." Most fertilizers that are commonly used in agriculture contain the three basic plant
                    nutrients: nitrogen, phosphorus, and potassium.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
