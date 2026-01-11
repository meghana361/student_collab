import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

// const Home = () => {
//   return (
//     <>
//       <Navbar/>
//       <Header/>
//       <BlogList />
//       <Newsletter />
//       <Footer />
//     </>
//   )
// }
const Home = () => {
  return (
    <>
    
      <Header />

      {/* 🔽 BLOG SECTION TARGET */}
      <div id="blogs">
        <BlogList />
      </div>

      <Newsletter />
      <Footer />
    </>
  )
}
export default Home
