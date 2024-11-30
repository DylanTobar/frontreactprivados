import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome'
import Proyects from './Components/Proyects/Proyects-Index'
import ProyectsForm from './Components/Proyects/Proyects-Form'
import Login from './Components/Login'
import Tasks from './Components/Tasks/Tasks-Index'
import TasksForm from './Components/Tasks/Tasks-Form'
import Tests from './Components/Tests/Tests-Index'
import TestForm from './Components/Tests/Test-Form'
import Defects from './Components/Defects/Defects-Index'
import Navbar from './Components/Navbar'
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import DefectsForm from './Components/Defects/Defects-Form';


function App() {
  const [showNav, setShownav] = useState(false)
  return (
    <>
      <Router>
        <header className="App-header">
          <IoMenuSharp style={{ marginLeft: "1%" }} onClick={() => setShownav(!showNav)} />
        </header>
        <Navbar show={showNav} />
        <div className='body' onClick={() => setShownav(false)}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Proyects" element={<Proyects />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NewProyect" element={<ProyectsForm />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/NewTask" element={<TasksForm />} />
            <Route path="/Tests" element={<Tests />} />
            <Route path="/NewTest" element={<TestForm />} />
            <Route path="/Defects" element={<Defects />} />
            <Route path="/NewDefect" element={<DefectsForm />} />
          </Routes>
        </div>
      </Router>
      <footer className='footer'>Made By: Dylan Alexis Tobar Orellana 0907-18-9913</footer>
    </>
  );
}

export default App;
