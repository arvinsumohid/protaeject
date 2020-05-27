import React, { useEffect, useState } from 'react';
import Post from './Post';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';

    const Users = () => {
        const [hasError, setError] = useState(false);
        const [isLoading, setLoading] = useState(false);
        const [users, setUsers] = useState(null);
        let {userid} = useParams();

        const fetchData = async q => {
            if(q === undefined)
                q = '';

            const apiRes  = await fetch(`https://jsonplaceholder.typicode.com/users/${q}`);
            const resJSON = await apiRes.json();
            return resJSON;
        }
        useEffect(() => {
            setLoading(true)
            setError(false);

            fetchData(userid).then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
        }, []);

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

        if( users && !hasError && !isLoading ) 
            return <Display users={users} />
        else if( hasError )
            return <Error />;
        else
            return <Loading />;
    };


export default Users;