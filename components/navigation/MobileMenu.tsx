import React, { Component } from 'react';
import MobileElementList from './MobileMenuElement';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  elementText: {
    fontSize: '0.75em',
    color: 'rgba(0,0,0,0.6)',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  }
});

const genderMenu = [{
  label: "Kobieta",
  endpoint: "/kobieta"
},
{
  label: "Mężczyzna",
  endpoint: "/mezczyzna"
}];

interface ParentProps {
  nav: any;
}

type Props = ParentProps & WithStyles<typeof styles>;

class MobileMenu extends Component<Props> {

  state = {
    drawerOpen: false
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const { classes, nav } = this.props;
    const { clothes, boots, sport, accesories } = nav;
    return (
      <>
        <Button onClick={() => this.toggleDrawer()}>Open Left</Button>

        <SwipeableDrawer
          open={this.state.drawerOpen}
          onClose={() => this.toggleDrawer()}
          onOpen={() => this.toggleDrawer()}
        >
          <div tabIndex={0} role="button">
            <MobileElementList
              name="Płeć"
              list={genderMenu}
            />
            <MobileElementList
              name="Odzież"
              list={clothes}
            />
            <MobileElementList
              name="Buty"
              list={boots}
            />
            <MobileElementList
              name="Sport"
              list={sport}
            />
            <MobileElementList
              name="Akcesoria"
              list={accesories}
            />
            <Link href="/koszyk">
              <ListItem button>
                <Typography className={classes.elementText}>Koszyk</Typography>
              </ListItem>
            </Link>
          </div>
        </SwipeableDrawer>
      </>
    )
  }
}

export default withStyles(styles)(MobileMenu);