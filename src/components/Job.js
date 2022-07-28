import PropTypes from 'prop-types'
import React from 'react'
import favorite from '../assets/favorite.svg'
import time from '../assets/time.svg'
import { time_ago } from '../utils'

const Job = props => {
  const { job } = props
  const timeAgo = time_ago(job.created_at)

  return (
    <div className="job">
      <div className="job-info">
        <div className="job-detail">
          <img src={time} alt="Time" height="15px" width="auto" />
          {timeAgo} by {job.author}
        </div>
        <div className="job-title">{job.story_title}</div>
      </div>
      <div className="job-favorite">
        <img src={favorite} alt="Favorite" height="25px" width="auto" />
      </div>
    </div>
  )
}

Job.proptypes = {
  job: PropTypes.object.isRequired
}

export default Job
