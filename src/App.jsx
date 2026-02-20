import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Contact from './components/Contact/Contact'
import Portfolio from './components/portfolio/portfolio'


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Portfolio/>
      <Contact />
    </div>
  )
}

export default App
