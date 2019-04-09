import React, { Component } from 'react';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PersonOutline from '@material-ui/icons/PersonOutline';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import ShoppingBasketDropdown from './ShoppingBasketDropdown';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  card__container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 100
  },
  icon: {
    color: "grey",
    fontSize: '2.1em',
    cursor: 'pointer',
    padding: 10
  }
});

type Props = WithStyles<typeof styles>;

class Gender extends Component<Props> {
  state = {
    basketDisplayed: false,
  }

  displayBasket = () => {
    this.setState({
      basketDisplayed: true
    })
  }

  hideBasket = () => {
    this.setState({
      basketDisplayed: false
    })
  }

  render() {
    const { classes } = this.props;
    const { basketDisplayed } = this.state;
    return (
      <Hidden smDown>
        <Grid item xs={4} className={classes.card__container}>
          <FavoriteBorder className={classes.icon} />
          <PersonOutline className={classes.icon} />
          <ShoppingBasketOutlined
            onMouseEnter={() => this.displayBasket()}
            onMouseLeave={() => this.hideBasket()}
            className={classes.icon}
          />
          {
            basketDisplayed &&
            <ShoppingBasketDropdown
              mouseIn={() => this.displayBasket()}
              mouseOut={() => this.hideBasket()}
            />
          }
        </Grid>

      </Hidden>
    )
  }
}



export default withStyles(styles)(Gender);