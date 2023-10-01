import React from 'react'
import classes from './VaultsInfo.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import VaultsInfoHeader from '../../components/VaultsInfoHeader/VaultsInfoHeader'
import VaultsInfoPlace from '../../components/VaultsInfoPlace/VaultsInfoPlace'

const VaultsInfo = () => {
  return (
    <div className={classes.VaultsInfo}>
      <Header/>
        <VaultsInfoHeader/>
        <VaultsInfoPlace/>
      <Footer/>
    </div>
  )
}

export default VaultsInfo
