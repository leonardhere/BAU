import React from 'react'
import classes from './VaultsInput.module.scss'

const VaultsInput = () => {
  return (
    <div className={classes.VaultsInput}>
      <div className={classes.VaultsTitle}>Vaults</div>
      <form>
        <input type='text' placeholder='Vault name / Token name / Pool name / Volt address / Token address'/>
      </form>
      <div className={classes.ButtonPlace}>
        <button className={classes.AllVaults}>All vaults (211)</button>
        <button className={classes.MyVaults}>My vaults</button>
      </div>
    </div>
  )
}

export default VaultsInput
