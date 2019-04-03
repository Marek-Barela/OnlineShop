import React, { Component } from 'react';
import Dropdown from './Dropdown';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { JSONCategoriesResponse, Products } from '../../features/maleProducts/model';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import './navigation.css';

const styles = () => createStyles({
  root: {
    width: '100%',
    maxWidth: 500,
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
    const filterCategories = categories.map(item => { return item.label })
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
              onMouseEnter={() => this.setDropdownList(clothes, "clothes")}
            >
              Odzież
            </Typography>
            <Typography
              className={`nav-list__element ${isActiveNav && activeNavElement === "boots" && itemActive}`}
              component="li"
              variant="caption"
              onMouseEnter={() => this.setDropdownList(boots, "boots")}
            >
              Buty
            </Typography>
            <Typography
              className={`nav-list__element ${isActiveNav && activeNavElement === "sport" && itemActive}`}
              component="li"
              variant="caption"
              onMouseEnter={() => this.setDropdownList(sport, "sport")}
            >
              Sport
            </Typography>
            <Typography
              className={`nav-list__element ${isActiveNav && activeNavElement === "accesories" && itemActive}`}
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
          mouseIn={() => this.activeNavigation()}
          mouseOut={() => this.disactiveNavigation()}
        />
      </>
    )
  }
}

export default withStyles(styles)(Navigation);