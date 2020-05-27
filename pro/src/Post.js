import React, { useEffect, useState } from 'react';
// import Request, {data, hasError, isLoading, requestHandler} from './Request';
import {useParams} from 'react-router';

const Post = () => {
    const [hasError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState(null);
    const {userid} = useParams();
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/posts?userId=${userid}`;
        setLoading(true)
        setError(false);

        if( userid !== undefined)
            url = `https://jsonplaceholder.typicode.com/posts?userId=${userid}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setLoading(false);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, [userid]);

    const Loading = () => {
        return <h1>Loading..</h1>
    }

    const Error = () => {
        return <h1>Error</h1>
    }

    if( posts && !hasError && !isLoading ) 
        return (
            <ul>
                {posts.map(post => {
                    return (<>
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </>)
                })}
            </ul>
            );
    else if( hasError )
        return <Error />;
    else
        return <Loading />;
}

export default Post;