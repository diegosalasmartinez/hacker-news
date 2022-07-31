import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { expect, test, jest, describe, afterEach } from '@jest/globals'
import { fireEvent, prettyDOM, render } from '@testing-library/react'
import Pagination from './Pagination'

describe('<Pagination />', () => {
  const onPrevPage = jest.fn()
  const onNextPage = jest.fn()
  let page = 0
  let numberPages = 50

  afterEach(() => {
    page = 0
    numberPages = 50
  })

  test('render page buttons when selected page is at the beginning', () => {
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )

    component.getByText('<')
    component.getByText('1')
    component.getByText('2')
    component.getByText('3')
    component.getByText('4')
    component.getByText('5')
    component.getByText('...')
    component.getByText(numberPages)
    component.getByText('>')
  })

  test('render page buttons when selected page is at the end', () => {
    page = numberPages - 1
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )

    component.getByText('<')
    component.getByText('1')
    component.getByText('...')
    component.getByText(numberPages - 4)
    component.getByText(numberPages - 3)
    component.getByText(numberPages - 2)
    component.getByText(numberPages - 1)
    component.getByText(numberPages)
    component.getByText('>')
  })

  test('render page buttons when selected page is at the middle', () => {
    page = parseInt(numberPages / 2)
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )

    component.getByText('<')
    component.getByText('1')
    component.getByText(page)
    component.getByText(page + 1)
    component.getByText(page + 2)
    component.getByText(numberPages)
    component.getByText('>')

    const pageDots = component.getAllByText('...')
    expect(pageDots.length).toBe(2)
  })

  test('render few page buttons', () => {
    page = 0
    numberPages = 5

    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )

    component.getByText('<')
    component.getByText('1')
    component.getByText('2')
    component.getByText('3')
    component.getByText('4')
    component.getByText('5')
    component.getByText('>')
  })

  test('add styles to page selected', () => {
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )

    const selectedPage = component.getByText(page + 1)
    expect(selectedPage).toHaveClass('active')
  })

  test('clicking prev page when first page is selected', () => {
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )
    const prevPageButton = component.getByText('<')
    fireEvent.click(prevPageButton)
    expect(onPrevPage).toHaveBeenCalledTimes(0)
  })

  test('clicking next page when last page is selected', () => {
    page = numberPages - 1
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )
    const nextPageButton = component.getByText('>')
    fireEvent.click(nextPageButton)
    expect(onNextPage).toHaveBeenCalledTimes(0)
  })

  test('click prev page', () => {
    page = 1
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )
    const prevPageButton = component.getByText('<')
    fireEvent.click(prevPageButton)
    expect(onPrevPage).toHaveBeenCalledTimes(1)
  })

  test('click next page', () => {
    const component = render(
      <Pagination
        page={page}
        numberPages={numberPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )
    const nextPageButton = component.getByText('>')
    fireEvent.click(nextPageButton)
    expect(onNextPage).toHaveBeenCalledTimes(1)
  })
})
