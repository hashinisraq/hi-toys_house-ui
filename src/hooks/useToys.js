import { useEffect, useState } from 'react';

const useToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://toyshouse-server.onrender.com/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return [toys, setToys];
}

export default useToys;