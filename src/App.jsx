import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LeadCard from './components/LeadCard'
import { useEffect } from 'react'
import Leads from './components/Leads'
import CreateLead from './components/CreateLead'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import axios from 'axios'
import ProtectedRoute from './components/ProtectedRoute'
function App() {

useEffect(()=>{
  console.log("Component loaded.")
}, [])

 const getLeads = async () => {

        const response = await axios.get(
            "https://localhost:7035/api/Lead"
        );

        console.log(response.data.data);
    };
  return (
    <BrowserRouter>
      <h1>My CRM</h1>
        <button onClick={getLeads}>
            Get Leads
        </button>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
        <Route path='/leads' element={<ProtectedRoute><Leads/></ProtectedRoute>}></Route>
        <Route path='/leads/create' element={<ProtectedRoute><CreateLead/></ProtectedRoute>}></Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default App
