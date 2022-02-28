import React, {useState} from 'react';

const Search = ({getQuery}) => {
    const [inputText, setInputText] = useState([])
    const onChange = (q) => {
        setInputText(q)
        getQuery(q)
    }
    return (
        <div className="search">
            <input onChange={(e) => onChange(e.target.value)}
                   type="text"
                   className="form-control"
                   placeholder="Search"
                   value={inputText}
                   autoFocus/>
        </div>
    );
};

export default Search;
