import React from 'react'
import classes from './VaultsTable.module.scss'
import buttonHeaderTable from '../../../images/buttonHeaderTable.svg'
import activevaulst from '../../../images/activevaults.svg'
import logoCoin from '../../../images/logo-coin.svg'
import VaultsTableItem from './VaultsTableItem/VaultsTableItem'

const VaultsTable = () => {
  return (
    <div className={classes.VaultsTable}>
        <div className={classes.VaultsTableHeader}>
            <div className={classes.TableHeaderItem}>
                <div className={classes.HeaderItemValue}>
                    Name
                </div>
                <img src={buttonHeaderTable}/>
            </div>
            <div className={classes.TableHeaderItem}>
                <div className={classes.HeaderItemValue}>
                    APY
                </div>
                <img src={buttonHeaderTable}/>
            </div>
            <div className={classes.TableHeaderItem}>
                <div className={classes.HeaderItemValue}>
                    APY, 7 Days
                </div>
                <img src={buttonHeaderTable}/>
            </div>
            <div className={classes.TableHeaderItem}>
                <div className={classes.HeaderItemValue}>
                    Deposited
                </div>
                <img src={buttonHeaderTable}/>
            </div>
            <div className={classes.TableHeaderItem}>
                <div className={classes.HeaderItemValue}>
                    TVL
                </div>
                <img src={buttonHeaderTable}/>
            </div>
        </div>
        <div className={classes.VaultsTableItems}>
            <VaultsTableItem/>
            <VaultsTableItem/>
            <VaultsTableItem/>
            <VaultsTableItem/>
            <VaultsTableItem/>
        </div>
    </div>
  )
}

export default VaultsTable
