import React from 'react';
import Search from '../Search/Search';
import Posts from './Posts';
import Loader from '../Loader/Loader';

class PostsContainer extends React.Component {
    
    state = {
        posts: [],
        currentUser: this.props.currentUser,
        search: '',
        isLoading: true
    }
    
    async fetchData(currentUser = this.state.currentUser) {
        const Response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUser}`);
        const postsData = await Response.json();
        this.setState({
            posts: postsData,
            currentUser,
            isLoading: false
        })

    }
    componentDidMount() {
        this.fetchData();
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
            <p>Posts by {this.state.currentUser}'s ID</p>  
            {this.state.isLoading ? <Loader /> : <>
                <Search onSearch={this.onPostsSearchHandler} />
                <Posts data={filteredPosts} />
                <div className='btnBack'><button onClick={() => {
                    this.props.nullCurrentUser();
                }}>	&#129040; Back</button>
                    {this.state.search ?
                        <button onClick={() => this.nullInput()}>
                            &#129041; Show all posts</button> : null}</div></>}
            
            </>
    }
}

export default PostsContainer;