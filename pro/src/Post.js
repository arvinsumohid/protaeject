import React, { useEffect, useState } from 'react';
import Request, {data, hasError, isLoading, requestHandler} from './Request';
import {useParams} from 'react-router';

const Post = () => {
    const [data, setData] = useState(null);
    const [hasError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const {userid} = useParams();
    useEffect(() => {
            requestHandler(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
    }, [userid]);

    const Loading = () => {
        return <h1>Loading..</h1>
    }

    const Error = () => {
        return <h1>Error</h1>
    }

    if( post && !hasError && !isLoading ) 
        return (
            <ul>
                {post.map(post => {
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