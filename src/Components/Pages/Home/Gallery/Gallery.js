import React from 'react';



const Gallery = () => {
    return (
        <div className="container">
            <h1 className="text-center">Gallery</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div className="col">
                    <div className="card text-center ">
                        <img src="https://i.ibb.co/b5sQBWW/image-3.jpg" className="card-img-top mx-auto client-img" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <img src="https://i.ibb.co/Cw8Fx0V/images-1.jpg" className="card-img-top mx-auto client-img" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center">
                        <img src="https://i.ibb.co/JQKLDBQ/images-2.jpg" className="card-img-top mx-auto client-img" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;