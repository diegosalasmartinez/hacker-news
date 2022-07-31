import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Job from '../components/Job'
import Pagination from '../components/Pagination'
import favorite from '../assets/my-favorite.svg'

const Favs = () => {
  const localStorageJobs = JSON.parse(localStorage.getItem('favJobs')) || []
  const favJobs = localStorageJobs.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at)
  })
  console.log(favJobs)
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
      {data.length > 0 ? (
        <div className="home">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={'favs'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="job-container">
                {data.map(d => (
                  <Job key={d.objectID} job={d} />
                ))}
              </div>

              <Pagination
                page={page}
                numberPages={numberPages}
                onChangePage={onChangePage}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="no-favs">
          You don't have any favorite job yet. Try clicking on the like button.
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <img src={favorite} alt="Logo" height="20px" width="20px" />
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Favs
