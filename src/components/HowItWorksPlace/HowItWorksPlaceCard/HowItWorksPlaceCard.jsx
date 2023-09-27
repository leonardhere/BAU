import React, { useState } from 'react'
import classes from './HowItWorksPlaceCard.module.scss'
import './Switch.css'

const darkTitle = {
  color: '#272726'
}

const lightTitle = {
  color: '#E5E8DF'
}

const HowItWorksPlaceCard = () => {


    const [theme, setTheme] = useState(1);
    const handleClick = () => {
      setTheme(!theme);
    };
  return (
    <div onMouseEnter={handleClick} onMouseLeave={handleClick} style={{
        backgroundColor: theme ? "#272726" : "#E5E8DF",
        width: "44%",
        overflow: "hidden",
        textAlign: 'left',
        padding: '32px 32px 42px',
        borderRadius: '16px',
        marginRight: '16px',
        marginBottom: '16px',
        cursor: 'pointer',
    }}>
        <div className={classes.toggleSlide}>
            <div className={`switch ${theme ? "slide " : ""}`}></div>
        </div>
        <div className={classes.CardTitle} style={!theme ? darkTitle : lightTitle}>Earn yield</div>
        <div className={classes.CardDescr}>Bau is a DeFi yield aggregator that offers low fees and maximum possible yield. Our goal is to help users take full advantage 
of compounding yield.</div>
    </div>
  )
}

export default HowItWorksPlaceCard
