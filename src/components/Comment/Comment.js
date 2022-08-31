import React from 'react';

const Comment = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div>
            <div>
                <div>PostID: {postId}</div>
                <div>ID: {id}</div>
                <div>NAME: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
        </div>
    );
}

export default Comment;
