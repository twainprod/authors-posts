import React from 'react';
import Search from '../Search/Search';
import Posts from './Posts';
import Loader from '../Loader/Loader';
import { myAPI } from '../api';

class PostsContainer extends React.Component {
    
    state = {
        posts: [],
        currentUser: this.props.currentUser,
        search: '',
        isLoading: true
    }
    
    async fetchData(currentUser = this.state.currentUser) {
        const { data } = await myAPI.getPosts(currentUser);        
        this.setState({
            posts: data,
            currentUser,
            isLoading: false
        })

    }
    componentDidMount() {
        this.fetchData(this.state.currentUser);
        this.setState({
            isLoading: true
        })
        
    }
    componentDidUpdate(prevProps) {
        const currentUser = this.props.currentUser;
        if (currentUser !== prevProps.currentUser)
            this.fetchData(currentUser);
    }
    onPostsSearchHandler = (search) => {
        this.setState({
            search
        })
    }
    getFilteredPosts() {
        const { posts, search } = this.state;
        if (!search) {
            return posts;
        }
        return posts.filter(item => {
            return item['title'].toLowerCase().includes(search.toLowerCase())
                || item['body'].toLowerCase().includes(search.toLowerCase());
        })
    }
    nullInput() {
        this.setState({
            search: ''
        })
    }

    render() {          
        const filteredPosts = this.getFilteredPosts();
        return <>
            <p>Posts of the ID: {this.state.currentUser}</p>  
            {this.state.isLoading ? <Loader /> : <>
                <Search onSearch={this.onPostsSearchHandler} />
                <Posts data={filteredPosts} />
                <div className='btnBack'><button onClick={() => {
                    this.props.nullCurrentUser();
                }}><i className="fas fa-angle-double-left"></i> Back</button>
                    {this.state.search ?
                        <button onClick={() => this.nullInput()}>
                            <i className="fas fa-angle-double-up"></i> Show all posts</button> : null}</div></>}
            
            </>
    }
}

export default PostsContainer;