import React from 'react'
import classes from './Header.module.scss'
import headerLogo from '../../images/Logo.png'
import docsarrow from '../../images/menu-arrow.png'
import eth from '../../images/eth.png'
import arrowDown from '../../images/arrow-down.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className={classes.Header}>
        <Link>
            <img src={headerLogo} alt="logo" to={'/'}/>
        </Link>
        <ul className={classes.menuLinks}>
            <a href="#"><li className={classes.menuLinksItem}>Vaults</li></a>
            <a href="#"><li className={classes.menuLinksItem}>Roadmap</li></a>
            <a href="#">
                <li className={classes.menuLinksItem}>
                    <div className={classes.manuLinksItemSubName}>Docs</div>
                    <img src={docsarrow} alt="" />
                </li>
            </a>
        </ul>
        <div className={classes.headerRight}>
            <div className={classes.dropDown}>
                <img src={eth} alt="walletName" />
                <a className={classes.dropArrow}>
                    <img src={arrowDown} alt="arrow" />
                </a>
            </div>
            <div className={classes.userStatus}>Connect wallet</div>
        </div>
    </header>
  )
}

export default Header
