import React, { useState } from 'react'
import angular from '../assets/angular.png'
import react from '../assets/react.png'
import vue from '../assets/vue.png'

const NewTechnologies = () => {
  const [techSelected, setTechSelected] = useState(0)

  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex="1">
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="0"
            value="0"
            checked={techSelected === 0}
            readOnly
          />
          <p className="select-box__input-text">Select your news</p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="1"
            value="1"
            checked={techSelected === 1}
            readOnly
          />
          <p className="select-box__input-text">Angular</p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="2"
            value="2"
            checked={techSelected === 2}
            readOnly
          />
          <p className="select-box__input-text">Reactjs</p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="3"
            value="3"
            checked={techSelected === 3}
            readOnly
          />
          <p className="select-box__input-text">Vuejs</p>
        </div>
        <img
          className="select-box__icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className="select-box__list">
        <li onClick={e => setTechSelected(parseInt(e.target.htmlFor))}>
          <label
            className="select-box__option"
            htmlFor="1"
            aria-hidden="aria-hidden"
          >
            <img src={angular} alt="Angular" height="20px" width="20px" />
            Angular
          </label>
        </li>
        <li onClick={e => setTechSelected(parseInt(e.target.htmlFor))}>
          <label
            className="select-box__option"
            htmlFor="2"
            aria-hidden="aria-hidden"
          >
            <img src={react} alt="React" height="20px" width="20px" />
            Reactjs
          </label>
        </li>
        <li onClick={e => setTechSelected(parseInt(e.target.htmlFor))}>
          <label
            className="select-box__option"
            htmlFor="3"
            aria-hidden="aria-hidden"
          >
            <img src={vue} alt="Vue" height="20px" width="20px" />
            Vuejs
          </label>
        </li>
      </ul>
    </div>
  )
}

export default NewTechnologies
