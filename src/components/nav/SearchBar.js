import React, { useState }from 'react';

const SearchBar = (props) => {
    const [searchField, setSearchField] = useState({ 
        value: "",
        hasValue: false
    });
    const handleOnChange = (changeEvent) => {
        setSearchField({
            value: changeEvent.target.value
        });
    };
    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        searchField.value.length > 0 && console.log(searchField.value);        
        searchField.value.length > 0 && setSearchField({hasValue: true, ...searchField});
    }
    return(
        <div>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type="text" placeholder="search videos" onChange={handleOnChange}></input>
                <button>Search</button>
            </form>
    { searchField.hasValue && <p> Showing search results for {searchField.value}</p>}
        </div>  
    );
}

export default SearchBar;