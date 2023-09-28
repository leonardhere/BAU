import React from 'react'
import classes from './TopPlace.module.scss'
import Header from '../Header/Header'
import MainPageDescr from '../MainPageDescr/MainPageDescr'

const TopPlace = () => {
  return (
    <div className={classes.TopPlace}>
      <Header/>
      <MainPageDescr/>
    </div>
  )
}

export default TopPlace
