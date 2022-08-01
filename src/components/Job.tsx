import { useState } from 'react'
import { motion } from 'framer-motion'
import favorite from '../assets/favorite.svg'
import my_favorite from '../assets/my-favorite.svg'
import time from '../assets/time.svg'
import { time_ago } from '../utils'
import { Job as JobType } from '../types'

interface JobProps {
  job: JobType
}

const Job = (props: JobProps) => {
  const { job } = props
  const timeAgo = time_ago(job.created_at)
  const storage = localStorage.getItem('favJobs')
  const favJobs = storage ? JSON.parse(storage) : []
  const [isFav, setIsFav] = useState<boolean>(
    favJobs.some((j: JobType) => j.objectID === job.objectID)
  )

  const onSeeJob = () => {
    window.open(job.story_url, '_blank')
  }

  const onClickFav = () => {
    if (isFav) {
      onUnfavJov()
    } else {
      onFavJob()
    }
  }

  const onFavJob = () => {
    const storage = localStorage.getItem('favJobs')
    const favJobs = storage ? JSON.parse(storage) : []
    favJobs.push(job)
    localStorage.setItem('favJobs', JSON.stringify(favJobs))
    setIsFav(true)
  }

  const onUnfavJov = () => {
    const storage = localStorage.getItem('favJobs')
    const favJobs = storage ? JSON.parse(storage) : []
    const index = favJobs.findIndex((j: JobType) => j.objectID === job.objectID)
    if (index > -1) {
      favJobs.splice(index, 1)
    }
    localStorage.setItem('favJobs', JSON.stringify(favJobs))
    setIsFav(false)
  }

  return (
    <div className="job">
      <div className="job-info" onClick={onSeeJob}>
        <div className="job-detail">
          <img src={time} alt="Time" height="15px" width="auto" />
          {timeAgo} by {job.author}
        </div>
        <div className="job-title">{job.story_title}</div>
      </div>
      <div className="job-favorite">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img
            src={isFav ? my_favorite : favorite}
            alt="Favorite"
            height="25px"
            width="auto"
            onClick={onClickFav}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Job
