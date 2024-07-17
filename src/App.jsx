
import './App.css'
import Navbar from './Components/Navbar'
import {Routes, Route} from "react-router-dom"
import Courses from './Components/Core/Courses/Courses'
import HomePage from './Components/HomePage'
import { SignedIn,SignedOut,RedirectToSignIn } from '@clerk/clerk-react'
import Dashboard from './Components/Core/Dashboard/Dashboard'
import DashboardLayout from './Components/Core/Dashboard/Dashboard'
import UserDashboard from './Components/Core/Dashboard/UserDashboard'
import SignupForm from './Components/Forms/SignupForm'
import LoginForm from './Components/Forms/LoginForm'
import GetRole from './Components/Forms/GetRole'
import { ClerkProvider } from '@clerk/clerk-react'
import SetRole from './Components/Forms/SetRole'
import StudentCourses from './Components/Core/Courses/StudentCourses'
import BuyCourse from './Components/Core/Courses/BuyCourse'

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}  signUpFallbackRedirectUrl="/dashboard/getRole" 
    signInFallbackRedirectUrl={"/dashboard/setRole"}>
     
      <Navbar/>
        
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/enrolledCourses' element={<StudentCourses/>}/>
        <Route element={
            <SignedIn>
              <DashboardLayout/>
            </SignedIn>    
        }>
            

            <Route path='/dashboard/user' element={<SignedIn>
              <UserDashboard/>
            </SignedIn>}/>

            <Route path='/dashboard/getRole' element={<SignedIn>
              <GetRole/>
            </SignedIn>}/>

            <Route path='/dashboard/setRole' element={<SignedIn>
              <SetRole/>
            </SignedIn>}/>
        </Route>

        <Route path='/buyCourse/:id' element={
          <SignedIn>
            <BuyCourse/>
          </SignedIn>
        }/>

        

        

        <Route path='/signup' element={<SignupForm/>}/>

        <Route path='/login' element={<LoginForm/>}/>
          
      </Routes>
    </ClerkProvider>
  )
}

export default App
