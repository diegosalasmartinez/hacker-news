import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewTechnologies from '../components/NewTechnologies'
import Job from '../components/Job'
import JobPagination from '../components/JobPagination'

const techs = ['angular', 'reactjs', 'vuejs']

const Home = () => {
  const techStored = localStorage.getItem('tech')
  const [techSelected, setTechSelected] = useState(techStored ? parseInt(techStored) : -1)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const tech = techs[techSelected]
      setLoading(true)
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?query=${tech}&page=${page}`
      )
      const data = response.data.hits
        .filter(d => d.author && d.story_title && d.story_url && d.created_at)
        .map(d => ({
          objectID: d.objectID,
          author: d.author,
          story_title: d.story_title,
          story_url: d.story_url,
          created_at: d.created_at
        }))
      setLoading(false)
      setData(data)
    }

    if (techSelected >= 0) {
      fetchData().catch(console.error)
    }
  }, [techSelected, page])

  const onChangeTech = tech => {
    localStorage.setItem('tech', tech)
    setTechSelected(tech)
  }

  const onChangePage = number => {
    setPage(number - 1)
  }

  const onPrevPage = () => {
    if (page > 0) {
      setPage(prev => prev - 1)
    }
  }

  const onNextPage = () => {
    if (page < 49) {
      setPage(prev => prev + 1)
    }
  }

  return (
    <div className="container">
      <div className="home">
        <NewTechnologies
          techSelected={techSelected}
          onChangeTech={onChangeTech}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="job-container">
              {data.map(d => (
                <Job key={d.objectID} job={d} />
              ))}
            </div>
            {techSelected >= 0 && (
              <JobPagination
                page={page}
                onChangePage={onChangePage}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
