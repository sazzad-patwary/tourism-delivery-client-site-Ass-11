import { useState, useEffect } from 'react';

const usePackages = () => {
    const [packages, setTourPackages] = useState([])
    useEffect(() => {
        fetch('./tourpakage.json')
            .then(res => res.json())
            .then(data => setTourPackages(data))
    }, [])
    return [packages];
};

export default usePackages;