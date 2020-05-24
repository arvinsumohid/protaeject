import React, { useEffect } from 'react';
import Post from './Post';
import Request from './Request';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';

    const Users = () => {
        const {data, hasError, isLoading, requestHandler} = Request();
        const usersList = (data != null) ? data : [];
        const {userid} = useParams();
        useEffect(() => {
            if( userid !== undefined)
                requestHandler(`https://jsonplaceholder.typicode.com/users/${userid}`);
            else
                requestHandler(`https://jsonplaceholder.typicode.com/users/`);
        }, [userid]);

        const Loading = () => {
            return <h1>Loading..</h1>
        }

        const Error = () => {
            return <h1>Error</h1>
        }

        const UserDetail = (props) => {
            return (
                <>
                <div>
                    <h2>Name: {props.userDetail.name}</h2>
                    <h2>Username: {props.userDetail.username}</h2>
                    <h2>Email: {props.userDetail.email}</h2>
                </div>
                <Post />
                </>
            );
        }

        const Display = (props) => {
            if(props.users.length > 0)
                return ( props.users.map(user => <li><Link to={`/user/${user.id}`}>{user.name} {user.email}</Link></li>) )
            else if ( props.users.id )
                return <UserDetail userDetail={props.users} />
            else
                return <h1>Empty</h1>;
        }
        if( usersList && !hasError && !isLoading ) 
            return <Display users={usersList} />
        else if( hasError )
            return <Error />;
        else
            return <Loading />;
    };


export default Users;