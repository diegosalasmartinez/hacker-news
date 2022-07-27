import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Favs from './views/Favs'
import Header from './components/Header'
import Pages from './components/Pages'

function App() {
  return (
    <div className="App">
      <Header/>
      <Pages/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='favs' element={<Favs/>}/>
      </Routes>
    </div>
  )
}

export default App
