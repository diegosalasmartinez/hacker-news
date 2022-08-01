import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Job from '../components/Job'
import Pagination from '../components/Pagination'
import { Job as JobType } from '../types'
import favorite from '../assets/my-favorite.svg'

const Favs = () => {
  const storage =  localStorage.getItem('favJobs')
  const localStorageJobs = storage ? JSON.parse(storage) : []
  const favJobs = localStorageJobs.sort(function (a : JobType, b : JobType) {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
  const [data, setData] = useState<JobType[]>([])
  const [page, setPage] = useState<number>(0)
  const itemsPerPage = 20
  const [numberPages, setNumberPages] = useState<number>(
    Math.ceil(favJobs.length / itemsPerPage)
  )

  useEffect(() => {
    const start = page * itemsPerPage
    const jobs = favJobs.slice(start, start + itemsPerPage)
    setData(jobs)
  }, [page])

  const onChangePage = (number : number) => {
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
