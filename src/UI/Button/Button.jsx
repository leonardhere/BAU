import React from 'react'
import classes from './Button.module.scss'

const Button = ({text}) => {
  return (
    <button className={classes.Button}>
        {text}
    </button>
  )
}

export default Button
