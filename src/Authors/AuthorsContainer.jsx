import React from 'react';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import Authors from './Authors';

class AuthorsContainer extends React.Component {
    getFilteredData() {
    const { data, search } = this.props.state;
    if (!search) {
      return data;
    }
    return data.filter(item => {
      return item['name'].toLowerCase().includes(search.toLowerCase())
        || item['email'].toLowerCase().includes(search.toLowerCase())
    })
}
    render() {
        const filteredData = this.getFilteredData();
        return ( <>
            <p>Authors</p>            
            {this.props.isLoading ? <Loader /> : <>
             <Search onSearch={this.props.onSearchHandler} />
              <Authors data={filteredData} getPostsById={this.props.getPostsById} /> </>}
             {this.props.search ?
              <button className='btnClear' onClick={() => this.props.nullInput()}>&#129040; Back to all Authors</button>
               : null}
</>
        );
            
    }
}

export default AuthorsContainer;