import React from 'react';
import '../Posts.css';

const PostsItem = (props) => {
    return <div className='postItem'>
        <div className='title'>{props.title}</div>
        <div className='body'>{props.body}</div>
    </div>
    
}

export default PostsItem;