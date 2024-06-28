/* eslint-disable no-unused-vars */
import React from 'react';
import ContactForm from './pages/contact';
import Users from './pages/users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen from './pages/screen';

const NotFound=()=>{
  return(
    <div>
      Page not Found
    </div>
  )
}

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path='/' element={<ContactForm/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/screen/:id' element={<Screen/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
