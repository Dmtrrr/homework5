import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import User from '../../components/User/User';
import { getAllUsers } from '../../store/user.slice';

const Users = () => {

    const {users, error} = useSelector(state => state['userReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []) 

    return (
        <div>
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
}

export {Users};
