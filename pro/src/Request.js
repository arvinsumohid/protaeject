import { useState } from 'react';

const Request = () => {
    const [data, setData] = useState(null);
    const [hasError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const requestHandler = (request) => {
        setLoading(true)
        setError(false);
        
        return fetch(request)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
}

export {data, hasError, isLoading, requestHandler};