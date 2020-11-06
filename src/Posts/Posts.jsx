import React from 'react';
import PostsItem from './PostsItem/PostsItem';

const Posts = (props) => {    
        return props.data
            .map(item => <PostsItem title={item.title} body={item.body} key={item.id + item.userId} />
            );
}

export default Posts;