
import './App.css'
import ReviewSecion from './Components/Core/ReviewSection'
import Subscribe from './Components/Core/Subscribe'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Footer from './Components/Core/Footer'
import Questions from './Components/Core/Questions'
import Team from './Components/Core/Team'
import About from './Components/Core/About'
import {Routes, Route} from "react-router-dom"
import Courses from './Components/Core/Courses/Courses'
import HomePage from './Components/HomePage'
import { SignedIn,SignedOut,RedirectToSignIn } from '@clerk/clerk-react'
import Dashboard from './Components/Core/Dashboard/Dashboard'
import DashboardLayout from './Components/Core/Dashboard/Dashboard'
import UserDashboard from './Components/Core/Dashboard/UserDashboard'
import SignupForm from './Components/Forms/SignupForm'
import LoginForm from './Components/Forms/LoginForm'

function App() {

  return (
    <div>
     
        <Navbar/>
        
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route element={
            <SignedIn>
              <DashboardLayout/>
            </SignedIn>

            
          }>
            <Route path='/dashboard/user' element={<SignedIn>
              <UserDashboard/>
            </SignedIn>}/>

             

        </Route>

        <Route path='/signup' element={<SignupForm/>}/>

        <Route path='/login' element={<LoginForm/>}/>
          
      </Routes>
    </div>
  )
}

export default App
