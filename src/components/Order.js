import React from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
    return (
        <div className="container">
        <h2 className="pt-5 pb-3 text-lg-start text-md-center text-sm-center">Order details</h2>
        <div className="card">
            <form method="POST">
                <div className="row card-body">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Basic details</h3>
                        <hr />
                        <div className="border rounded p-3">
                            <div className="form-group">
                                <label htmlFor="customerName"><b>Name <span className="text-danger">*</span></b></label>
                                <input
                                    type="text"
                                    name="name"
                                    id="customerName"
                                    className="form-control"
                                    placeholder="Input full name"
                                    title="Please enter your name"
                                    required
                                />
                                <span id="errorCustomerName" className="text-danger"></span>
                            </div>
                            <div className="form-group mt-3 cart-container">
                                <label htmlFor="emailAddress"><b>Phone <span className="text-danger">*</span></b></label>
                                <input
                                    type="text"
                                    pattern="[0-9]{4}-[0-9]{7}"
                                    name="phone"
                                    id="emailAddress"
                                    className="form-control"
                                    placeholder="Input mobile number"
                                    required
                                />
                                <span id="errorEmailAddress" className="text-danger"></span>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="customerAddress"><b>Address <span className="text-danger">*</span></b></label>
                                <input
                                    type="text"
                                    name="address"
                                    id="customerAddress"
                                    className="form-control"
                                    placeholder="House no. / building / street / area"
                                    required
                                />
                                <span id="errorCustomerAddress" className="text-danger"></span>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="customerCity"><b>City <span className="text-danger">*</span></b></label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="customerCity"
                                            className="form-control"
                                            placeholder="Input your city"
                                            required
                                        />
                                        <span id="errorCustomerCity" className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="customerZipcode"><b>Zip <span className="text-danger">*</span></b></label>
                                        <input
                                            type="text"
                                            name="zip"
                                            id="customerZipcode"
                                            className="form-control"
                                            placeholder="Input your zip code"
                                            required
                                        />
                                        <span id="errorCustomerZipcode" className="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="customerState"><b>Province <span className="text-danger">*</span></b></label>
                                        <input
                                            type="text"
                                            name="province"
                                            id="customerState"
                                            className="form-control"
                                            placeholder="Input your province"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="customerCountry"><b>Country <span className="text-danger">*</span></b></label>
                                        <input
                                            type="text"
                                            name="country"
                                            id="customerCountry"
                                            className="form-control"
                                            placeholder="Input your country"
                                            required
                                        />
                                        <span id="errorCustomerCountry" className="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Product details</h3>
                        <hr />
                        <div className="card">
                            <table className="card-body table lms_table_active table-hover">
                                <thead>
                                    <tr className="text-center">
                                        <th scope="col">Name</th>
                                        <th scope="col">Price (Rs)</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td>Sona Urea</td>
                                        <td>Rs.1200</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="pb-3 ps-5 pe-5 d-inline-block">
                            <h4>Total</h4> <h4>1200</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-0 p-5">
                    <div className="col">
                        <Link type="submit" to="/Detail" name="order" className="btn btn-success w-100">Place an order</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
};
  
