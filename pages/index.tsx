import type { NextPage } from 'next'
import Navbar from '../components/Navbar.js'
import Hero from '../components/Hero.js'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
