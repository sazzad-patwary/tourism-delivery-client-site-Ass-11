import React from 'react';





const Review = () => {
    return (
        <div className="container">
            <h1 className="text-center">Customer Review</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div className="col">
                    <div className="card text-center ">
                        <img src="https://i.ibb.co/d2p4Gmj/tom-cruis.jpg" className="card-img-top mx-auto client-img" alt="..." />
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content.This content is a little bit longer.</p>

                            <h6 className="text-info">Tom cruise</h6>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center ">
                        <img src="https://i.ibb.co/3mVNMxb/angelina.jpg" className="card-img-top mx-auto client-img" alt="..." />
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content.This content is a little bit longer.</p>

                            <h6 className="text-info">Angelina Juli</h6>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center ">
                        <img src="https://i.ibb.co/LSwbYKJ/jenifer.jpg" className="card-img-top mx-auto client-img" alt="..." />
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content.This content is a little bit longer.</p>

                            <h6 className="text-info">Jenifer Lopez</h6>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Review;