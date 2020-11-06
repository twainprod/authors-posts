import React, {useState} from 'react';
import './Search.css';
import imgSearch from '../img/vector.svg'

const Search = (props) => {
    const [value, setValue] = useState('');

    const valueChangeHandler = event => {
        setValue(event.target.value)
    }

    return <div className='inputBlock'>
        <input type="text" placeholder='Search' value={value}
            onChange={valueChangeHandler} />
        <button className='btnSearch' onClick={() => props.onSearch(value)}><img src={imgSearch} alt='search' /></button>
    </div>
}

export default Search;