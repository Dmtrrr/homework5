import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../../components/Comment/Comment';
import { getAllComments } from '../../store/comment.slice';

const Comments = () => {

    const {comments, error} = useSelector(state => state['commentReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}

export  {Comments};
