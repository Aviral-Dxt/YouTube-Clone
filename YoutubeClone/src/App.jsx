import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home/home'
import Video from './pages/Video/Video'
const App = () => {
  return (
    <div>
       <Navbar/>     
       <Routes>
        <Route path='/' element ={ <Home/> } />
        <Route path='/video/:categoryId/:videoId' element ={ <Video/> } />
       </Routes> 
       
    </div>
  )
}

export default App
