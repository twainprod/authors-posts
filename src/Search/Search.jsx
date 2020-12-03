import React, {useState} from 'react';
import './Search.css';

const Search = (props) => {
    const [value, setValue] = useState('');

    return <div className='inputBlock'>
                <input type="text" placeholder='Search' value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button className='btnSearch' onClick={() => props.onSearch(value)}><i className="fas fa-search"></i></button>
            </div>
}

export default Search;