import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link, useHistory } from 'react-router-dom'
import { loginAccount } from '../actions/'
import { connect } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))


const Login = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const [account, setAccount] = useState('test')
  const [passward, setPassward] = useState("7e00405ece477bb6dd9b03a78eee4e708afc2f5bcdce399573a5958942f4a390")

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="account"
            label="login"
            name="account"
            autoFocus
            onChange={e => setAccount(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="passward"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassward(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>{
              props.loginAccount(account,passward)
              history.push('./index')
            }}
          >
            Login
          </Button>
        </form>
        <Link to="/createAccount" variant="body2">
          {"Do you have an account?"}
        </Link>
      </div>
    </Container>
  )
}

const mapDispatchToProps = ({ loginAccount })

export default connect(null, mapDispatchToProps)(Login)
