import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';

const TourPackage = ({ tourpackage }) => {
    const { _id, picture, title, price, description } = tourpackage;

    /*   const history = useHistory();
      const handleBookPackage = () => {
          history.push('/placeorder');
      } */

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 30)}
                        </Card.Text>
                        <Card.Title>Price : ${price}</Card.Title>
                        <Link to={`/placeorder/${_id}`}>
                            <Button variant="primary">book now</Button>
                        </Link>
                        {/* <Button onClick={handleBookPackage} variant="primary">book now</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default TourPackage;