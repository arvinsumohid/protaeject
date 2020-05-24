import React, { useEffect } from 'react';
import Request from './Request';
import {useParams} from 'react-router';

const Post = () => {
    const {data, hasError, isLoading, requestHandler} = Request();
    const postList = (data != null) ? data : [];
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

    if( postList && !hasError && !isLoading ) 
        return (
            <ul>
                {postList.map(post => {
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