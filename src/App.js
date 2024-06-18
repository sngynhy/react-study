import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import State from './pages/State'
import UserList from './pages/UserList'
import Library from './components/example/Libraray'

function App() {
  return (
    <div className="App">
      <nav className="black-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/state">State</Link>
        {/* <Link to="/test">Test</Link> */}
        <Link to="/users">UserList</Link>
        <Link to="/library">Library</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State />} />
        <Route path="/test" element={<Test />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
