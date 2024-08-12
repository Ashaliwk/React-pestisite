import React from 'react';
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <div className="container">
      <div className="row pt-5 pb-5 bg-light">
        <div className="col-12 pt-5 pb-5 card">
          <h3 className="mb-5 text-center">My Orders</h3>
          <table className="card-body table lms_table_active table-hover" id="myTable">
            <thead>
              <tr className="text-center">
                <th className="col-lg-2 col-md-2 col-sm-6">Name</th>
                <th className="col-lg-2 col-md-2 col-sm-6">Phone</th>
                <th className="col-lg-2 col-md-2 col-sm-6">Address</th>
                <th className="col-lg-2 col-md-2 col-sm-6">Details</th>
                <th className="col-lg-2 col-md-2 col-sm-6">Total</th>
                <th className="col-lg-2 col-md-2 col-sm-6">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>Sona urea</td>
                <td>0309-2778187</td>
                <td>Johar town, Lahore</td>
                <td>Brand: No Brand More Lawn & Garden from No Brand</td>
                <td>2400</td>
                <td>Shipped</td>
              </tr>
            </tbody>
          </table>
          <Link className="btn btn-primary mt-3" to="/Detail">Payment</Link>
        </div>
      </div>
    </div>
  );
}
