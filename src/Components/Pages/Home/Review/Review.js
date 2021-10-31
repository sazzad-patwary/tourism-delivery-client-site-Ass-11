import React from 'react';

const Review = () => {
    return (
        <div className="container">
            <h1 className="text-center">Customer Review</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div className="col">
                    <div className="card text-center py-5">
                        <img src="images/user-1.png" className="card-img-top mx-auto client-img" alt="..." />
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content.This content is a little bit longer.</p>
                            {/* <div className="text-center">
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="far fa-star star-color" aria-hidden="true"></i>
                            </div> */}
                            <h6 className="text-info">David Tom</h6>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center py-5">
                        <img src="images/user-2.png" className="card-img-top mx-auto client-img" alt="..." />
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content.This content is a little bit longer.</p>
                            {/*  <div className="text-center">
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="far fa-star star-color" aria-hidden="true"></i>
                            </div> */}
                            <h6 className="text-info">Angelina Juli</h6>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center ">
                        <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTgyMjU4NjIyMTQ1ODgw/gettyimages-469873772.jpg" className="card-img-top mx-auto client-img" alt="..." />
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content.This content is a little bit longer.</p>
                            {/* <div className="text-center">
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="fas fa-star star-color" aria-hidden="true"></i>
                                <i className="far fa-star star-color" aria-hidden="true"></i>
                            </div> */}
                            <h6 className="text-info">Jenifer Lopez</h6>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Review;