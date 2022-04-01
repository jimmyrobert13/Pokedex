import react from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './Components/Main'
import Home from './pages/home'


export default () =>{
    return(
        <Routes>
            <Route path='/' element={<Main/>} />
            {/* <Route path='/card'/> */}
        </Routes>
    )
}