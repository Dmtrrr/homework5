import React from 'react';

import css from './User.module.css'

const User = ({user: {id, name, email}}) => {
    return (
        <div className={css.userWrap}>
            <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            </div>
        </div>
    );
}

export default User;
