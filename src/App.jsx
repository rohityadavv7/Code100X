
import './App.css'
import ReviewSecion from './Components/Core/ReviewSection'
import Subscribe from './Components/Core/Subscribe'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Footer from './Components/Core/Footer'
import Questions from './Components/Core/Questions'
import Team from './Components/Core/Team'
import About from './Components/Core/About'

function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <ReviewSecion/>
      <Team/>
      <Subscribe/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default App
