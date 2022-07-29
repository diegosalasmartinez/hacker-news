import React, { useEffect, useState } from 'react'
import Job from '../components/Job'
import JobPagination from '../components/JobPagination'

const Favs = () => {
  const favJobs = JSON.parse(localStorage.getItem('favJobs')) || []
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const itemsPerPage = 20
  const [numberPages, setNumberPages] = useState(
    Math.ceil(favJobs.length / itemsPerPage)
  )

  useEffect(() => {
    const start = page * itemsPerPage
    const jobs = favJobs.slice(start, start + itemsPerPage)
    setData(jobs)
  }, [page])

  const onChangePage = number => {
    setPage(number - 1)
  }

  const onPrevPage = () => {
    setPage(prev => prev - 1)
  }

  const onNextPage = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className="container">
      <div className="home">
        <div>
          <div className="job-container">
            {data.map(d => (
              <Job key={d.objectID} job={d} />
            ))}
          </div>
          <JobPagination
            page={page}
            numberPages={numberPages}
            onChangePage={onChangePage}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Favs
