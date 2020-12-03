import React from 'react';
import './../Authors.css';

const AuthorsItem = ({name, email, id, getPostsById}) => {
    return <div className="item" onClick={() => getPostsById(id) }>        
                <div className="avatar">{id}</div>
                <div className="info">
                    <div className='name'>{name}</div>
                    <div className='email'>{email}</div>
                </div>
                <div className='showPosts'><i className="fas fa-angle-double-right"></i></div>
    </div>
}

export default AuthorsItem;