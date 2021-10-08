import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'
import QRcode from '../qr.png'
import { chargeAsset } from '../actions/'
import { connect } from 'react-redux'
import Header from './header'
import Footer from './footer'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Charge = (props) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <>
    <Header />
    <Container component="main" maxWidth="xs">
      <div className = {classes.paper}>
      <img src = {QRcode} alt = "qrcode"  width="300" height="300"/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>{
              if(props.account){
                props.chargeAsset(props.account)
                history.push("/index/charge/result")
              }
            }}
          >
            charge
          </Button>
          </div>
    </Container>
    <Footer/>
    </>
  )
}

const mapStateToProps = state => ({ account: state.account,transaction: state.transaction })

const mapDispatchToProps = ({ chargeAsset })

export default connect(mapStateToProps, mapDispatchToProps)( Charge )
