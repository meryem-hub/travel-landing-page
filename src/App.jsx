import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import TopDestinations from './components/TopDestinations'
import Trip from './components/Trip'
import Testimonials from './components/Testimonials'
import Newsletter from './components/NewsLetter'
import Footer from './components/Footer'
import bg from './assets/images/bg.png'
function App() {

  return (
  <div>
           <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >



      
 <Header/>
 <Hero/>
 </div>
 <Category/>
 <TopDestinations/>
 <Trip/>
 <Testimonials/>
 <Newsletter/>
 <Footer/>
  </div>
  )
}

export default App
