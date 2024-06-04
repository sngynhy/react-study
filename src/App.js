import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import State from './pages/State'
import UserList from './pages/UserList'

function App() {
  return (
    <div className="App">
      <nav className="black-nav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/state">State</Link>
        <Link to="/users">UserList</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State />} />
        <Route path="/test" element={<Test />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
