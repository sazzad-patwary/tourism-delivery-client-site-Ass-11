import { useState, useEffect } from 'react';

const usePackages = () => {
    const [packages, setTourPackages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setTourPackages(data))
    }, [])
    return [packages];
};

export default usePackages;