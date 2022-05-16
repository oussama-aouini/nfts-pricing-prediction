import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate'

import Card from './Card'

import './CardList.css'

function CardList({collections}) {

  const [pageNumber, setPageNumber] = useState(0)

  const collectionsPerPage = 8
  const currentPage = pageNumber * collectionsPerPage
  const currentPosts = collections.slice(currentPage, currentPage + collectionsPerPage)


  const changePage = ({selected}) => {
    setPageNumber(selected)
    console.log(selected)
  }

  return (
    <div className='CardList'>
      <div className='Cards'>
      {
          currentPosts.map((collection) =>(
            <Card collection={collection} />
          ))
        }
      </div>
      <ReactPaginate 
        previousLabel = {'Prev'}
        nextLabel = {'Next'}
        breakLabel={'...'}
        pageCount={10}
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