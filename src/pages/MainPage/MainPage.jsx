import React from 'react'
import TopPlace from '../../components/TopPlace/TopPlace'
import TableBlock from '../../components/TableBlock/TableBlock'
import HowItWorksPlace from '../../components/HowItWorksPlace/HowItWorksPlace'
import Footer from '../../components/Footer/Footer'
import '../../App.css'

const MainPage = () => {
  return (
    <>
    <div className="App">
      <div className="appContainer">
        <TopPlace/>
        <TableBlock/>
        <HowItWorksPlace/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default MainPage
