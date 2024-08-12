import React from 'react';
import { Link } from 'react-router-dom';

export default function contact() {
  return (
    <section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div className="container">
        <div className="row mb-5">
            <div className="col-lg-6 col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="md-form ms-lg-3 mb-0">
                                <input type="text" id="name" name="name" className="form-control"
                                    placeholder="Your name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form ms-lg-3 mb-0">
                                <input type="text" id="email" name="email" className="form-control"
                                    placeholder="Your email" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3 mb-3 ms-lg-3">
                            <div className="md-form mb-0">
                                <input type="text" id="subject" name="subject" className="form-control"
                                    placeholder="Subject" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-5 ms-lg-3">
                            <div className="md-form">
                                <textarea type="text" id="message" name="message" rows="2"
                                    className="form-control md-textarea" placeholder="Your message"></textarea>
                            </div>
                        </div>
                    </div>

                </form>

                <div className="text-center text-md-left">
                    <Link className="btn btn-primary" to="/"
                        onclick="document.getElementById('contact-form').submit();">Send</Link>
                </div>
            </div>

            <div className="col-md-3 text-center col-lg-6">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Pakpattan Road, SWL 57000, PAK</p>
                    </li>

                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                        <p>+92309-7239667</p>
                    </li>

                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p>ashali12345.9@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.099988068227!2d73.11577988192374!3d30.6311395251479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6448f40df1d%3A0xa10fe6fef2ae82f3!2sArain%20House%D8%8C%2088%2F9-L%2C%20Pakpattan%20Road%2C%20Sahiwal%2C%20Sahiwal%20District%2C%20Punjab%2057000%2C%20Pakistan!5e0!3m2!1snl!2s!4v1699502176882!5m2!1snl!2s"
        class="w-100" height={450} style={{border:0}} allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

  )
}