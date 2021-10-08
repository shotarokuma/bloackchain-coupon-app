import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'
import { paymentAsset } from '../actions'
import { connect } from 'react-redux'
import Header from './header'
import Footer from './footer'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    marginTop: theme.spacing(9),
    minWidth: "400"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}))

const Payment = (props) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <>
    <Header/>
      <Container component="main" maxWidth="xs">
         <img src = {props.item.img} alt = "selsectedItem"  width="400" height="200" className={classes.root}/>
        <Card className={classes.root}>
          <CardContent>
          <Typography variant="h4">{props.item.point}pt used</Typography>
          </CardContent>
        </Card>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() =>{
            props.paymentAsset(props.item.point,props.account)
            history.push("/index/use/payment/result")
          }}
        >
          go
        </Button>
      </Container>
      <Footer/>
      </>
  )
}


const mapStateToProps = (state) => ({ account:state.account,
  item: state.item,
})

const mapDispatchToProps = ({ paymentAsset })

export default connect(mapStateToProps,mapDispatchToProps )(Payment)
