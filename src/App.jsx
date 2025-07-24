import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import TopDestinations from './components/TopDestinations'
import Trip from './components/Trip'
import Testimonials from './components/Testimonials'
import Newsletter from './components/NewsLetter'
import Footer from './components/Footer'
function App() {

  return (
  <div>
 <Header/>
 <Hero/>
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
