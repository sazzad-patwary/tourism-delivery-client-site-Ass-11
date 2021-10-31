import React from 'react';

import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Review from '../Review/Review';
import TourPackages from '../TourPackages/TourPackages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;