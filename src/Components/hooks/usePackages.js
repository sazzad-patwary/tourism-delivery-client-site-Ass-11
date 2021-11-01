import { useState, useEffect } from 'react';

const usePackages = () => {
    const [packages, setTourPackages] = useState([])
    useEffect(() => {
        fetch('https://aqueous-tundra-41879.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setTourPackages(data))
    }, [])
    return [packages];
};

export default usePackages;