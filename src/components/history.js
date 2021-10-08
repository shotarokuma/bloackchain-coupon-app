import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import Header from './header'
import Footer from './footer'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(5,0,3,5),
  },
  table: {
    minWidth: 650,
  },
}))

const History = (props) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Typography className={classes.title} component="h2" variant="h5">
        History
        </Typography>
      <TableContainer component={Paper} >
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            props.transaction.map((transaction,index) => (
              <TableRow key={index}>
                <TableCell scope="row">
                  {transaction.date.toLocaleString()}
                </TableCell>
                <TableCell align="right">{transaction.type}</TableCell>
                <TableCell align="right">
                  {transaction.balance} pt</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer/>
    </>
  )
}

const mapStateToProps = (state) => ({transaction:state.transaction})

export default connect(mapStateToProps)(History)