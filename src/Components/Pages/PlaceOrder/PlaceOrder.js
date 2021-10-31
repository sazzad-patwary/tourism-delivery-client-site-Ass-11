import React from 'react';
import { Card, Button } from 'react-bootstrap';
import usePackages from '../../hooks/usePackages';

const PlaceOrder = () => {
    const [packages] = usePackages();
    return (
        <div className="container my-5">
            <>
                <Card>
                    <h1>{packages.length}</h1>
                    {/* <Card.Img variant="top" src={packages.picture} />
                    <Card.Body>
                        <Card.Title>{packages.title}</Card.Title>
                        <Card.Title>{packages.price}</Card.Title>
                        <Card.Text>
                            {packages.description}
                        </Card.Text>

                    </Card.Body> */}
                </Card>
                <br />
                {/* package booking form */}
                <div className="mx-auto w-25 py-5 bg-">
                    <form >
                        <div className="mb-3 row">
                            <input type="text" className="form-control" placeholder="your email" />
                        </div>
                        <div className="mb-3 row">
                            <input type="password" className="form-control" id="inputPassword" placeholder="your password" />
                        </div>
                        <div className="mb-3 row">
                            <textarea type="text" className="form-control" placeholder="your address" />
                        </div>
                        <div className="mb-3 row">
                            <input type="number" className="form-control" placeholder="your mobile number" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary">Booking/Purchase</Button>
                        </div>

                    </form>
                </div>

            </>

        </div>
    );
};

export default PlaceOrder;