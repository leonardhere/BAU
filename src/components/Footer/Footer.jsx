import React from 'react'
import classes from './Footer.module.scss'
import headerLogo from '../../images/Logo.svg'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterUp}>
        <a href="#">Docs</a>
        <Link className={classes.LogoLink}>
            <img src={headerLogo} alt="logo" to={'/'}/>
        </Link>
        <a href="#">Audit</a>
      </div>
      <a href="mailto:hi@bau.finance" className={classes.FooterEmail}>hi@bau.finance</a>
      <nav className={classes.FooterLinks}>
        <a href="#">Twitter</a>
        <a href="#">Github</a>
        <a href="#">Telegram</a>
        <a href="#">Mirror</a>
        <a href="#">Discord</a>
      </nav>
      <div className={classes.footerCopyWrite}>© | 2023 | Bau.Finance</div>
    </footer>
  )
}

export default Footer
