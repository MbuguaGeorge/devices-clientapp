import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Add from './Add'
import Edit from './Edit'

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Edit/>}/>
    </Routes>
)

export default Main;