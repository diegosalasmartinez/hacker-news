import React from 'react'

const JobPagination = props => {
  const { page, count } = props

  const generatePageNumber = () => {
    const pages = []
    if (page < 4) {
      pages.push(generatePageItem(1))
      pages.push(generatePageItem(2))
      pages.push(generatePageItem(3))
      pages.push(generatePageItem(4))
      pages.push(generatePageItem(5))
      pages.push(
        <li className="page__dots" key="dots-next">
          ...
        </li>
      )
      pages.push(generatePageItem(50))
    } else if (page >= (50 - 4)) {
      pages.push(generatePageItem(1))
      pages.push(
        <li className="page__dots" key="dots-prev">
          ...
        </li>
      )
      pages.push(generatePageItem(46))
      pages.push(generatePageItem(47))
      pages.push(generatePageItem(48))
      pages.push(generatePageItem(49))
      pages.push(generatePageItem(50))
    } else {
      pages.push(generatePageItem(1))
      pages.push(
        <li className="page__dots" key="dots-prev">
          ...
        </li>
      )
      const actualPage = page + 1
      pages.push(generatePageItem(actualPage - 1))
      pages.push(generatePageItem(actualPage))
      pages.push(generatePageItem(actualPage + 1))
      pages.push(
        <li className="page__dots" key="dotsñnext">
          ...
        </li>
      )
      pages.push(generatePageItem(50))
    }
    return pages
  }

  const generatePageItem = number => {
    return (
      <li
        key={number}
        className={`page__numbers ${page + 1 === number ? 'active' : ''}`}
        onClick={() => props.onChangePage(number)}
      >
        {number}
      </li>
    )
  }

  return (
    <div className="container">
      <ul className="page">
        <li className={`page__btn ${page === 0 ? 'disabled' : ''}`} key="prev" onClick={() => props.onPrevPage()}>
          {'<'}
        </li>
        {generatePageNumber()}
        <li className={`page__btn ${page === 49 ? 'disabled' : ''}`} key="next" onClick={() => props.onNextPage()}>
          {'>'}
        </li>
      </ul>
    </div>
  )
}

export default JobPagination
