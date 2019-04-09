import React, { Component } from 'react';
import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { JSONCategoriesResponse, Products } from '../../features/maleProducts/model';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import './navigation.css';

const styles = () => createStyles({
  root: {
    width: '100%',
    //borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    background: '#ffffff',
    display: 'flex',
    padding: 0,
    zIndex: 100
  },
  list: {
    position: 'relative',
    display: 'flex',
    maxWidth: 500,
    margin: '0 auto',
    justifyContent: 'center',
    width: '100%',
    listStyleType: 'none',
    padding: '0',
  },
  navListElemenet: {
    cursor: 'pointer',
    padding: '15px 40px',
    textTransform: 'uppercase',
    fontSize: '14px',
    color: '#777777'
  },
  hiddenList: {
    display: 'none'
  }
});

interface StateProps {
  dropdownList: JSONCategoriesResponse;
}

type Props = StateProps & WithStyles<typeof styles>;

class Navigation extends Component<Props> {
  state = {
    linksCategories: [],
    activeNavElement: '',
    isActiveNav: false
  }

  // Set default state
  componentDidMount() {
    const { clothes } = this.props.dropdownList;
    this.setDropdownList(clothes, "clothes")
  }

  setDropdownList = (categories: Products[], element: string) => {
    const filterCategories = categories.map(item => {
      const categories = {
        label: item.label,
        endpoint: item.endpoint
      }
      return categories
    })
    this.setState({
      linksCategories: filterCategories,
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
    const { classes, dropdownList } = this.props;
    const { clothes, boots, sport, accesories } = dropdownList;
    const { linksCategories, activeNavElement, isActiveNav } = this.state;
    const itemActive = 'item__active';
    return (
      <>
        <MobileMenu />
        <Hidden smDown>
          <List
            className={classes.root}
            component="nav"
          >
            <ul
              className={classes.list}
              onMouseEnter={() => this.activeNavigation()}
              onMouseLeave={() => this.disactiveNavigation()}
            >
              <Typography
                className={`${classes.navListElemenet} ${isActiveNav && activeNavElement === "clothes" && itemActive}`}
                component="li"
                variant="caption"
                onMouseEnter={() => this.setDropdownList(clothes, "clothes")}
              >
                Odzież
              </Typography>
              <Typography
                className={`${classes.navListElemenet} ${isActiveNav && activeNavElement === "boots" && itemActive}`}
                component="li"
                variant="caption"
                onMouseEnter={() => this.setDropdownList(boots, "boots")}
              >
                Buty
              </Typography>
              <Typography
                className={`${classes.navListElemenet} ${isActiveNav && activeNavElement === "sport" && itemActive}`}
                component="li"
                variant="caption"
                onMouseEnter={() => this.setDropdownList(sport, "sport")}
              >
                Sport
              </Typography>
              <Typography
                className={`${classes.navListElemenet} ${isActiveNav && activeNavElement === "accesories" && itemActive}`}
                component="li"
                variant="caption"
                onMouseEnter={() => this.setDropdownList(accesories, "accesories")}
              >
                Akcesoria
            </Typography>
            </ul>
          </List>
          <Dropdown
            list={linksCategories}
            isActiveNav={isActiveNav}
            mouseIn={() => this.activeNavigation()}
            mouseOut={() => this.disactiveNavigation()}
          />
        </Hidden>
      </>
    )
  }
}

export default withStyles(styles)(Navigation);