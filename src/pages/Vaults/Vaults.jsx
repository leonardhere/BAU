import React from 'react'
import classes from './Vaults.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import VaultsInput from '../../components/VaultsInput/VaultsInput'
import VaultsTable from './VaultsTable/VaultsTable'

const Vaults = () => {
  return (
    <div className={classes.Vaults}>
      <Header/>
        <VaultsInput/>
        <VaultsTable/>
      <Footer/>
    </div>
  )
}

export default Vaults
