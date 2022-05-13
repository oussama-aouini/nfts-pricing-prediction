import React from 'react'
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
  return (
    <div className='Searchbar'>
      <input type="text" placeholder='Search...' />
      <SearchIcon color='#ffffff' />
    </div>
  )
}

export default Searchbar