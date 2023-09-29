import React, { useContext, useState } from 'react';
import { ImageContext } from '../App';

const Searchbar = () => {
   const [searchValue, setSearchValue] = useState("");
   const {fetchData, setSearchImage} = useContext(ImageContext);

   const handleInputChange = (e) => {
    setSearchValue(e.target.value);
   }
   const handleButtonSearch = ()=>{
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`)
    setSearchValue("");
    setSearchImage(searchValue);
   }
   const handleEnterSearch = e => {
    if(e.key === 'Enter') {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`)
        setSearchValue("");
        setSearchImage(searchValue);
    }
   }
   
   return (
        <div className='flex'>
            <input type="search"
                className='bg-gray-50 border border-gray-300 text-sm w-96 indent-2 p-2.5 outline-none focus:border-blue-500 rounded-tl rounded-bl'
                placeholder='Search anything...'
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleEnterSearch}
            />
            <button 
              className="bg-blue-500 px-5 rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
              onClick={handleButtonSearch}
              disabled={!searchValue}
            >Search</button>

        </div>
    )
}

export default Searchbar