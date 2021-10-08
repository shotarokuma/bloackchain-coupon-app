import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import Items from '../items/items'
import { useHistory } from 'react-router-dom'
import { selesctItem }  from '../actions/'
import { connect } from 'react-redux'
import Header from './header'
import Footer from './footer'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '70%',
    height: '100%',
  },
  title: {
    margin: theme.spacing(3,0,3,0),
  },
  icon: {
    color: 'rgba(255, 255, 255)',
  },
}))

const itemData = Items.map((Item => (Item)))


const Use = (props) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <>
    <Header/>
    <div className={classes.root}>
      <ImageList className={classes.imageList}>
        <ImageListItem cols={2} style={{ height: 'auto' }}>
        <Typography className = {classes.title} component="h2" variant="h5">
          Items
        </Typography>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.point} pt</span>}
              actionIcon={
                <IconButton 
                aria-label={`pay for ${item.title}`} className={classes.icon}
                onClick={() =>{
                  props.selesctItem(item)
                  history.push("/index/use/payment")
                }}
                >
                <PaymentRoundedIcon/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    <Footer/>
    </>
  )
}

const mapDispatchToProps = ({ selesctItem })

export default connect(null, mapDispatchToProps)(Use)

