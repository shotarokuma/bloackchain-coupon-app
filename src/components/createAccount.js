import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { controller } from '../operation/operate'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))


const CreateAccount = () => {
  const classes = useStyles()
  const [last, setLast] = useState('')
  const [given, setGiven] = useState('')
  const [checked, setChecked] = useState(false)
  const [passward, setPassward] = useState('')

  const createAccount = async (e) => {
    e.preventDefault()
    const accountName = last[0] + given
    const passward = await controller.createAccount(accountName)
    setPassward(passward)
  }

  const getResult = () => {
    if (passward !== '') {
      return (
        <div>
          <Typography variant="h6" color='primary'>
            created your Account 
          </Typography>
          <p>
            passward: {passward}
          </p>
        </div>
      )
    }
  }

  const inputForm = last === '' || given === ''

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Typography variant="h6" gutterBottom>
          Personal Information
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="last"
              fullWidth
              autoComplete="family-name"
              onChange={e => setLast(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="first"
              fullWidth
              autoComplete="given-name"
              onChange={e => setGiven(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="address"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="age" name="age" label="age" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone"
              name="phone"
              label="phone"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" value="yes"
                onChange={e => {
                  setChecked(e.target.checked)
                }}
              />}
              label="agree"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.submit}
            type="submit"
            variant="contained"
            color="primary"
            onClick={createAccount}
            disabled={inputForm || !checked}
          >
            submit
      </Button>
        </Grid>
          {getResult()}
      </div>
    </Container>
  )
}

export default CreateAccount
