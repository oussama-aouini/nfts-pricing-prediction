import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


import Card from './Card'

import './CardList.css'

function CardList({collections}) {

  const [pageNumber, setPageNumber] = useState(0)

  const collectionsPerPage = 8*3
  const currentPage = pageNumber * collectionsPerPage
  const currentCollections = collections.slice(currentPage, currentPage + collectionsPerPage)


  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className='CardList'>
      <div className="list-label">
        <TrendingUpIcon /><p>Trending Collections</p>
      </div>
      <div className='Cards'>
        {
          currentCollections.map((collection) =>(
            <Link to={`collection/${collection.data.collectionId}`} style={{ textDecoration: 'none' }}>
              <Card key={collection.data.collectionId} collection={collection} />
            </Link>
          ))
        }
        
      </div>
      <ReactPaginate 
        previousLabel = {'Prev'}
        nextLabel = {'Next'}
        breakLabel={'...'}
        pageCount={4}
        marginPagesDisplayed={3}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledLinkClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  )
}

export default CardList