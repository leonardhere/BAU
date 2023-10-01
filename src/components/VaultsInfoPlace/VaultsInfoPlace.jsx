import React from 'react'
import classes from './VaultsInfoPlace.module.scss'
import strategy from '../../images/strategy.svg'

const VaultsInfoPlace = () => {
  return (
    <div className={classes.VaultsInfoPlace}>
      <div className={classes.InfoPlaceLeft}>
        <div className={classes.APYwidget}>
            <div className={classes.APYwidgetTitle}>APY</div>
            <div className={classes.APYwidgetBody}>
                <div className={classes.APYwidgetBodyItem}>
                    <div className={classes.BodyItemTitle}>Last harvest APY</div>
                    <div className={classes.BodyItemValue}>7%</div>
                </div>
                <div className={classes.APYwidgetBodyItem}>
                    <div className={classes.BodyItemTitle}>Weeky</div>
                    <div className={classes.BodyItemValue}>5%</div>
                </div>
                <div className={classes.APYwidgetBodyItem}>
                    <div className={classes.BodyItemTitle}>Monthly</div>
                    <div className={classes.BodyItemValue}>9%</div>
                </div>
            </div>
        </div>
        <div className={classes.PositionWidget}>
            <div className={classes.PositionWidgetHeader}>
                <div className={classes.PositionWidgetHeaderTitle}>Your position</div>
                <div className={classes.countShares}>Vault shares - 8 </div>
            </div>
            <div className={classes.PositionWidgetBody}>
                <div className={classes.WidgetBodyRow}>
                    <div className={classes.WidgetBodyRowTitle}>Curve COILFRAX-f</div>
                    <div className={classes.WidgetCoinName}>12.865 LP</div>
                    <div className={classes.WidgetPrice}>$568</div>
                    <div className={classes.growPercent}>&nbsp;</div>
                </div>
                <div className={classes.WidgetBodyRow}>
                    <div className={classes.WidgetBodyRowTitle}>Earned</div>
                    <div className={classes.WidgetCoinName}>1.325 LP</div>
                    <div className={classes.WidgetPrice}>$25</div>
                    <div className={classes.growPercent}> +5%;</div>
                </div>
                <div className={classes.WidgetBodyRow}>
                    <div className={classes.WidgetBodyRowTitle}>Last harvest earnings</div>
                    <div className={classes.WidgetCoinName}>0.015 LP</div>
                    <div className={classes.WidgetPrice}>$3</div>
                    <div className={classes.growPercent}>+0.03%</div>
                </div>
                <div className={classes.WidgetBodyRow}>
                    <div className={classes.WidgetBodyRowTitle}>Underlying</div>
                    <div className={classes.WidgetCoinName}>67 DYDX</div>
                    <div className={classes.WidgetPrice}>0,2 ETH</div>
                    <div className={classes.growPercent}>&nbsp;</div>
                </div>
            </div>
        </div>
        <div className={classes.widgetBreakDown}>
            <div className={classes.BreackDownTitle}>LP Breakdown</div>
            <div className={classes.BreackDownBody}>
                <div className={classes.BreackDownRow}>
                    <div className={classes.BreackDownRowTitle}>Price per 1LP</div>
                    <div className={classes.BreackDownRowPrice}>$ 568</div>
                    <div className={classes.BreackDownCount}></div>
                </div>
                <div className={classes.BreackDownRow}>
                    <div className={classes.BreackDownRowTitle}>Tokens per 1 LPP</div>
                    <div className={classes.BreackDownRowPrice}>3 DYDX</div>
                    <div className={classes.BreackDownCount}>0.001 ETH</div>
                </div>
                <div className={classes.BreackDownRow}>
                    <div className={classes.BreackDownRowTitle}>Total pool TVL</div>
                    <div className={classes.BreackDownRowPrice}>$ 20 M.</div>
                    <div className={classes.BreackDownCount}></div>
                </div>
            </div>
        </div>
        <div className={classes.StrategyWidget}>
            <div className={classes.StrategyWidgetHeader}>
                <div className={classes.WidgetHeaderTitle}>Strategy</div>
                <div className={classes.StrategyLinks}>
                    <a href="#">Strategy</a>
                    <a href="#">Volts</a>
                </div>
            </div>
            <img src={strategy}/>
        </div>
      </div>
      <div className={classes.InfoPlaceRight}></div>
    </div>
  )
}

export default VaultsInfoPlace
