import React from 'react'
import classes from './MainPageDescr.module.scss'
import DescriptionItemPlace from './DescriptionItemsPlace/DescriptionItemPlace'

const MainPageDescr = () => {
  return (
    <div className={classes.mainPageDescr}>
      <div className={classes.descrPlace}>
        <div className={classes.descrPlaceText}>
            <div className={classes.descrPlaceTextTitle}>BAU uses novel technology and using it involes a variety of risks.</div>
            <div className={classes.descrPlaceTextBody}>You understand and agree to assume full assume full responsibility for all of the risks of accessing 
and using the  inteface to interface to interact wirh the protocol. <span><a href="#">Learn more</a></span></div>
        </div>
        <a href="#" className={classes.descrPlaceButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 16L16 7.99997" stroke="#E5E8DF" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 16L7.99997 7.99997" stroke="#E5E8DF" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
      <DescriptionItemPlace/>
      <div className={classes.DescrPlaceBottom}>
        <div className={classes.MainPageDescrTitle}>Low-cost yield aggregator. Lower commissions, higher <br></br> profits. Zap from any token.</div>
        <div className={classes.MainPageDescrButton}>
          <button className={classes.GetStartedButton}>Get started</button>
          <button className={classes.LearnMoreButton}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default MainPageDescr
