import React from 'react'

const JobPagination = props => {
  const { page, numberPages = 50 } = props

  const generatePageNumber = () => {
    const pages = []
    if (numberPages < 7) {
      for (let i = 0; i < numberPages; i++) {
        pages.push(generatePageItem(i + 1))
      }
    } else if (page < 4) {
      pages.push(generatePageItem(1))
      for (let i = 2; i < 6; i++) {
        if (i < numberPages) {
          pages.push(generatePageItem(i))
        } else {
          break
        }
      }
      pages.push(
        <li className="page__dots" key="dots-next">
          ...
        </li>
      )
      pages.push(generatePageItem(numberPages))
    } else if (page >= numberPages - 4) {
      pages.push(generatePageItem(1))
      pages.push(
        <li className="page__dots" key="dots-prev">
          ...
        </li>
      )
      for (let i = numberPages - 4; i < numberPages; i++) {
        if (i < numberPages) {
          pages.push(generatePageItem(i))
        } else {
          break
        }
      }
      pages.push(generatePageItem(numberPages))
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
      pages.push(generatePageItem(numberPages))
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

  const onPrevPage = () => {
    if (page > 0) {
      props.onPrevPage()
    }
  }

  const onNextPage = () => {
    if (page < numberPages - 1) {
      props.onNextPage()
    }
  }

  return (
    <div className="container">
      <ul className="page">
        <li
          className={`page__btn ${page === 0 ? 'disabled' : ''}`}
          key="prev"
          onClick={onPrevPage}
        >
          {'<'}
        </li>
        {generatePageNumber()}
        <li
          className={`page__btn ${page === numberPages - 1 ? 'disabled' : ''}`}
          key="next"
          onClick={onNextPage}
        >
          {'>'}
        </li>
      </ul>
    </div>
  )
}

export default JobPagination
