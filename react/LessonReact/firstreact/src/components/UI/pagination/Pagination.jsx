import React from 'react'
import { getPagesArray } from '../../../util/pages'

const pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages)
  //сделать usePagination вместо функции
  return (
    <div className='pagination_wrapper'>
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'pagination_button pagination_current_page' : 'pagination_button'}>
          {p}
        </span>
      )}
    </div>
  )
}

export default pagination