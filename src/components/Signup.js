import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
    <section className="vh-100 bg-image mt-5 mb-5">
    <div className="mask d-flex align-items-center h-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card trt" >
              <div className="card-body pb-shtml">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                <form action="" method="POST" enctype="multipart/form-data">
                  <div className="form-outline mb-4">
                    <input type="text" name="sname" className="form-control form-control-lg" placeholder="Your Name" />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="email" name="semail" className="form-control form-control-lg" placeholder="Your Email" />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" name="spass" className="form-control form-control-lg" placeholder="Password" />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" name="confirmpass" className="form-control form-control-lg"
                      placeholder="Repeat your password" />
                  </div>
                    <h4 className="upload">Upload your image:</h4>
                   <br/>
                  <input className="mt-1" type="file" name="suimuge" />
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2 mt-5" type="checkbox" value="" />
                    <label className="form-check-label mt-5">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button name="submit" type="submit"
                      className="btn btn-primary btn-block btn-lg text-light">Register</button>
                  </div>
                </form>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                    className="fw-bold text-body"><u>Login here</u></Link></p>
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
