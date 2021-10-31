import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">Home</li>
                                <li className="nav-item mb-2">Features</li>
                                <li className="nav-item mb-2">Pricing</li>
                                <li className="nav-item mb-2">FAQs</li>
                                <li className="nav-item mb-2">About</li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">Home</li>
                                <li className="nav-item mb-2">Features</li>
                                <li className="nav-item mb-2">Pricing</li>
                                <li className="nav-item mb-2">FAQs</li>
                                <li className="nav-item mb-2">About</li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">Home</li>
                                <li className="nav-item mb-2">Features</li>
                                <li className="nav-item mb-2">Pricing</li>
                                <li className="nav-item mb-2">FAQs</li>
                                <li className="nav-item mb-2">About</li>
                            </ul>
                        </div >

                        <div className="col-4 offset-1">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div >

                    <div className=" py-4 my-4 border-top">
                        <p className='text-center'> &copy;{new Date().getFullYear()}    Travel World || All rights reserved.</p>
                    </div>
                </footer >
            </div >
        </div >
    );
};

export default Footer;