import React from 'react'
import classes from './TableBlock.module.scss'
import './Button.css'
import TableBlockItem from './TableBlockItem/TableBlockItem'
import arrowButton from '../../images/menu-arrow.svg'


function TableBlock() {

  return (
    <div className={classes.TableBlock}>
        <div className={classes.TableBlockTitle}>Other portocols charge you <br /> <span>5-30% </span> performance fee </div>
        <div className={classes.TableBlockDescr}>See how fees can impact ROI for yield farmers</div>
        <div className={classes.TableHeader}>
            <div className={classes.inputBlock}>
                <label className={classes.inputBlockTitle}>Your deposit</label>
                <input className={classes.depositInput} placeholder='$1000'/>
            </div>
            <div className={classes.TableHeaderButtons}>
                <label className={classes.inputBlockTitle}>Years</label>
                <div className={classes.TableheaderButtonsPlace}>
                    <button className='Button Button-active'>
                        1 year
                    </button>
                    <button className='Button'>
                        5 year
                    </button>
                    <button className='Button'>
                        10 year
                    </button>
                </div>
            </div>
            <div className={classes.percentDropDown}>
                <div className={classes.percentDropDownTitle}>Commission</div>
                <select name="" id="">
                    <option value="">5%</option>
                    <option value="">10%</option>
                    <option value="">15%</option>
                    <option value="">20%</option>
                </select>
            </div>
        </div>
        <div className={classes.TableHeaderRow}>
            <div className={classes.TableHeaderName}>Name</div>
            <div className={classes.bauApy}>BAU APY</div>
            <div className={classes.apyPercent}>APY 5% fee</div>
            <div className={classes.bauFees}>BAU<span>&nbsp;FEES</span></div>
            <div className={classes.feesValue}>Fees = 5%</div>
        </div>
        <div className={classes.TableBody}>
            <TableBlockItem/>
            <TableBlockItem/>
            <TableBlockItem/>
            <TableBlockItem/>
        </div>
        <a className={classes.moreVaults} href="#">
            <div className={classes.moreVaultsValue}>More vaults</div>
            <img src={arrowButton}/>
        </a>
    </div>
  )
}

export default TableBlock
