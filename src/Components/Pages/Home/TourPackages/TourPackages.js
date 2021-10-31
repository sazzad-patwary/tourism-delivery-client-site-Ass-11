import React from 'react';
import { Row } from 'react-bootstrap';
import usePackages from '../../../hooks/usePackages';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [packages] = usePackages();
    /* 
        const [tourpackages, setTourPackages] = useState([])
        useEffect(() => {
            fetch('/tourpakage.json')
                .then(res => res.json())
                .then(data => setTourPackages(data))
        }, []) */
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Packages</h1>
            <div className='my-5'>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        packages.map(tourpackage => <TourPackage
                            key={tourpackage.id}
                            tourpackage={tourpackage}
                        ></TourPackage>)
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default TourPackages;