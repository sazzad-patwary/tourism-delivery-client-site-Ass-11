import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import usePackages from '../../hooks/usePackages';

const PlaceOrder = () => {

    const { packageId } = useParams();
    const [packag, setPackage] = useState({})

    useEffect(() => {
        fetch(`https://aqueous-tundra-41879.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackage(data))
    }, [])

    return (
        <div className="container my-5">
            <Card>
                <Card.Img variant="top" src={packag.picture} />
                <Card.Body>
                    <Card.Title>Title : {packag.title}</Card.Title>
                    <Card.Title>Price : {packag.price}</Card.Title>
                    <Card.Text>
                        Description : {packag.description}
                    </Card.Text>

                </Card.Body>
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


        </div>
    );
};

export default PlaceOrder;