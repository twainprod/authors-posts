import React from 'react';
import { myAPI } from './api';
import AuthorsContainer from './Authors/AuthorsContainer';
import './index.css';
import PostsContainer from './Posts/PostsContainer';

class App extends React.PureComponent {
  state = {
    isLoading: true,
    data: [],
    currentUser: null,
    search: ''
  }
  async componentDidMount() {
    const { data } = await myAPI.getAuthors();    
    this.setState({
      isLoading: false,
      data
    })
  }
  
  getPostsById = (currentUser) => {    
    this.setState({
      currentUser      
    })    
  }
  onSearchHandler = search => {    
    this.setState({
        search
      })        
  }  

  nullCurrentUser = () => {
    this.setState({
      currentUser: null
    })    
  }

  nullInput = () => {
    this.setState({
      search: ''
    })
  }
  render() {      
    return (
      <div className="App">    
        { this.state.currentUser ?
          <PostsContainer currentUser={this.state.currentUser}
            nullCurrentUser={this.nullCurrentUser} />
          : <AuthorsContainer state={this.state}
            data={this.state.data}
            onSearchHandler={this.onSearchHandler}
            getPostsById={this.getPostsById}
            search={this.state.search}
            isLoading={this.state.isLoading}
            nullInput={this.nullInput}
          />}          
      </div>
    );
  }
}

export default App;
