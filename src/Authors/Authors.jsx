import React from 'react';
import AuthorsItem from './AuthorsItem/AuthorsItem';

const Authors = (props) => {
    return props.data.map(a => <AuthorsItem key={a.id} name={a.name} email={a.email} id={a.id} getPostsById={props.getPostsById}/>);
 }

export default Authors;