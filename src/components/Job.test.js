import '@testing-library/jest-dom/extend-expect'
import {
  expect,
  jest,
  test,
  beforeEach,
  describe
} from '@jest/globals'
import { fireEvent, render } from '@testing-library/react'
import Job from './Job'

describe('<Job />', () => {
  const date = new Date()
  const job = {
    objectID: '1',
    author: 'Author',
    story_title: 'Story Title',
    story_url: 'story_url',
    created_at: new Date(
      date.setTime(date.getTime() - 1 * 60 * 60 * 1000)
    ).toISOString()
  }
  let component

  beforeEach(() => {
    component = render(<Job job={job} />)
  })

  test('renders content', () => {
    component.getByText(`1 hour ago by ${job.author}`)
    component.getByText(job.story_title)
  })

  test('open new tab when clicking the row', () => {
    const x = jest.spyOn(window, 'open')
    x.mockImplementation(() => {})

    const infoSection = component.container.firstChild.firstChild
    fireEvent.click(infoSection)

    expect(window.open).toBeCalled()
  })

  test('navigate to story_url when clicking the row', () => {
    const windowSpy = jest.spyOn(global, 'window', 'get')

    windowSpy.mockImplementation(() => ({
      location: {
        origin: job.story_url
      }
    }))
    expect(window.location.origin).toEqual(job.story_url)
    
    windowSpy.mockRestore()
  })

  test('job is not marked as fav', () => {
    const favButton = component.getByAltText('Favorite')
    expect(favButton).toHaveAttribute('src', 'favorite.svg')
  })

  test('adding job to local storage', () => {
    const favButton = component.getByAltText('Favorite')
    fireEvent.click(favButton)

    const favJobs = JSON.parse(localStorage.getItem('favJobs')) || []
    const isFav = favJobs.some(j => j.objectID === job.objectID)
    expect(isFav).toBe(true)
    expect(favButton).toHaveAttribute('src', 'my-favorite.svg')
  })
})
