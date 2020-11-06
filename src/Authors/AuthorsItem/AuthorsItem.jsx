import React from 'react';
import './../Authors.css';

const AuthorsItem = ({name, email, id, getPostsById}) => {
    return <div className="item" onClick={() => getPostsById(id) }>        
        <div className="avatar">{id}</div>
        <div className="info">
            <div className='name'>{name}</div>
            <div className='email'>{email}</div>
        </div>
        <div className='postsCount'>&gt;</div>
    </div>
}

export default AuthorsItem;