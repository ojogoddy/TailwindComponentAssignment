import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Subscribe from './component/Subscribe'
import Dashboard from './component/Dashboard'
import Accordion from './component/Accordion'

const App:React.FC = () => {
  return (
    <div>
      <Header />
      <Dashboard/>
     
      <Accordion/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App