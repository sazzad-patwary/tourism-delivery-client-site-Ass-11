import React from 'react';

const Gallery = () => {
    return (
        <div className="container">
            <h1 className="text-center">Gallery</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div class="col">
                    <div class="card text-center py-5">
                        <img src="images/user-1.png" class="card-img-top mx-auto client-img" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center py-5">
                        <img src="images/user-1.png" class="card-img-top mx-auto client-img" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center py-5">
                        <img src="images/user-1.png" class="card-img-top mx-auto client-img" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;