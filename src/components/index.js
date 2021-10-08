import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
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

const balance = (account) => {
  if(account) return account.balance
}


const Index = (props) => {
  const classes = useStyles()
  return (
    <>
    <Header />
      <Container component="main" maxWidth="xs">
        <Card className={classes.root}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Your
            deposits is </Typography>
          </CardContent>
          <CardContent className={classes.paper}>
            <Typography variant="h3" component="h2">{balance(props.account) + "pt"}</Typography>
          </CardContent>
        </Card>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          component={Link}
          to="/index/charge"
        >
          charge
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          component={Link}
          to="/index/use"
        >
          use
        </Button>
        <Button type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          component={Link}
          to="/index/history">
          history
        </Button>
      </Container>
      <Footer/>
      </>
  )
}


const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps)(Index)
