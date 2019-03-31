import React, { Component } from 'react';
import Dropdown from './Dropdown';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { NavigationTypes, NavigationClothes } from '../../features/lang/pl';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import './navigation.css';

const styles = () => createStyles({
  root: {
    width: '100%',
    maxWidth: 700,
    margin: '0 auto',
    background: '#ffffff',
    display: 'flex',
    padding: 0,
    zIndex: 100
  },
  list: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },
  hiddenList: {
    display: 'none'
  }
});

interface StateProps {
  menu: NavigationTypes;
  dropdownList: NavigationClothes;
}

type Props = StateProps & WithStyles<typeof styles>;

class Navigation extends Component<Props> {
  state = {
    linksList: [],
    activeNavElement: '',
    isActiveNav: false
  }

  // Set default state
  componentDidMount() {
    const { navClothes } = this.props.dropdownList;
    this.setDropdownList(navClothes, "clothes")
  }

  setDropdownList = (list: {}[], element: string) => {
    this.setState({
      linksList: list,
      activeNavElement: element
    })
  }

  activeNavigation = () => {
    this.setState({
      isActiveNav: true
    })
  }

  disactiveNavigation = () => {
    this.setState({
      isActiveNav: false
    })
  }

  render() {
    const { classes, menu, dropdownList } = this.props;
    const { clothes, boots, sport, accesories } = menu;
    const { navClothes, navBoots, navSport, navAccesories } = dropdownList;
    const { linksList, activeNavElement, isActiveNav } = this.state;
    const itemActive = 'item__active';
    return (
      <>
        <List className={classes.root} component="nav">
          <ul
            className={classes.list}
            onMouseEnter={() => this.activeNavigation()}
            onMouseLeave={() => this.disactiveNavigation()}
          >
            <Typography
              className={`nav-list__element ${isActiveNav && activeNavElement === 'clothes' && itemActive}`}
              component="li"
              variant="caption"
              onMouseEnter={() => this.setDropdownList(navClothes, "clothes")}
            >
              {clothes}
            </Typography>
            <Typography
              className={`nav-list__element ${isActiveNav && activeNavElement === "boots" && itemActive}`}
              component="li"
              variant="caption"
              onMouseEnter={() => this.setDropdownList(navBoots, "boots")}
            >
              {boots}
            </Typography>
            <Typography
              className={`nav-list__element ${isActiveNav && activeNavElement === "sport" && itemActive}`}
              component="li"
              variant="caption"
              onMouseEnter={() => this.setDropdownList(navSport, "sport")}
            >
              {sport}
            </Typography>
            <Typography
              className={`nav-list__element ${isActiveNav && activeNavElement === "accesories" && itemActive}`}
              component="li"
              variant="caption"
              onMouseEnter={() => this.setDropdownList(navAccesories, "accesories")}
            >
              {accesories}
            </Typography>
          </ul>
        </List>
        <Dropdown
          list={linksList}
          mouseIn={() => this.activeNavigation()}
          mouseOut={() => this.disactiveNavigation()}
        />
      </>
    )
  }
}

export default withStyles(styles)(Navigation);