import React from 'react'
import classes from './MyInput.module.css'
import TextField from '@mui/material/TextField';

const MyInput = (props) => {
  return (
    <div>
      <TextField
        className={classes.myInput} {...props}
        id="standard-basic"
        label=""
        variant="standard" />
    </div>
  )
}

export default MyInput
