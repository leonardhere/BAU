import React from 'react'
import classes from './VaultsTableItem.module.scss'
import activevaulst from '../../../../images/activevaults.svg'
import logoCoin from '../../../../images/logo-coin.svg'

function VaultsTableItem() {
  return (
    <div className={classes.VaultsTableItem}>
      <div className={classes.nameVault}>
          <img className={classes.vaultStatus} src={activevaulst} alt="" />
          <img className={classes.vaultsLogo} src={logoCoin} alt="" />
          <div className={classes.vaultName}>DYDX-ETH</div>
      </div>
      <div className={classes.APUYalue}>6.53%</div>
      <div className={classes.APYWeek}>6.53%</div>
      <div className={classes.DepositedValue}>100 LP Tokens</div>
      <div className={classes.TVLValue}>$ 420, 441</div>
    </div>
  )
}

export default VaultsTableItem
