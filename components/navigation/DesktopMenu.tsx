import React, { Component } from 'react';
import Dropdown from './Dropdown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { NavigationElement } from '../../features/utils/maleNavigation';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  navigation: {
    padding: 0
  },
  listItem: {
    padding: 0
  },
  navList: {
    maxWidth: 580,
    padding: 0,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  defaultElement: {
    cursor: 'pointer',
    padding: '15px 40px',
    textTransform: 'uppercase',
    fontSize: '14px',
    color: '#333333'
  },
  activeElement: {
    cursor: 'pointer',
    padding: '15px 40px',
    textTransform: 'uppercase',
    fontSize: '14px',
    color: '#333333',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.05)'
  }
})

interface ParentProps {
  nav: any;
}

type Props = ParentProps & WithStyles<typeof styles>;

class DesktopMenu extends Component<Props> {
  state = {
    currentProductCategory: [],
    activeProductCategoryName: "",
    navActive: false,
    dropdownActive: false
  }

  setNavigationContent(productCategory: NavigationElement[], productCategoryMenu: string) {
    const filtredProductCategory = productCategory.map((product: any) => {
      const categories = {
        label: product.label,
        endpoint: product.endpoint
      }
      return categories
    })
    this.setState({
      currentProductCategory: filtredProductCategory,
      activeProductCategoryName: productCategoryMenu
    })
  }

  activeNavigation() {
    this.setState({
      navActive: true
    })
  }

  disactiveNavigation() {
    this.setState({
      navActive: false
    })
  }

  activeDropdown() {
    this.setState({
      dropdownActive: true
    })
  }

  disactiveDropdown() {
    this.setState({
      dropdownActive: false
    })
  }

  render() {
    const { nav, classes } = this.props;
    const { navigation, listItem, navList, defaultElement, activeElement } = classes;
    const { clothes, boots, sport, accesories } = nav;
    const { currentProductCategory, activeProductCategoryName, navActive, dropdownActive } = this.state;
    const menuIsActive = navActive || dropdownActive;
    const clothesActived = activeProductCategoryName === "clothes";
    const bootsActived = activeProductCategoryName === "boots";
    const sportActived = activeProductCategoryName === "sport";
    const accesoriesActived = activeProductCategoryName === "accesories";
    return (
      <List component="nav" className={navigation}>
        <List className={navList}
          onMouseEnter={() => this.activeNavigation()}
          onMouseLeave={() => this.disactiveNavigation()}
        >
          <ListItem
            onMouseEnter={() => this.setNavigationContent(clothes, "clothes")}
            className={listItem}
          >
            <Typography
              className={clothesActived && menuIsActive ? activeElement : defaultElement}>
              Odzież
            </Typography>
          </ListItem>
          <ListItem
            onMouseEnter={() => this.setNavigationContent(boots, "boots")}
            className={listItem}
          >
            <Typography
              className={bootsActived && menuIsActive ? activeElement : defaultElement}>
              Buty
            </Typography>
          </ListItem>
          <ListItem
            onMouseEnter={() => this.setNavigationContent(sport, "sport")}
            className={listItem}
          >
            <Typography
              className={sportActived && menuIsActive ? activeElement : defaultElement}>
              Sport
            </Typography>
          </ListItem>
          <ListItem
            onMouseEnter={() => this.setNavigationContent(accesories, "accesories")}
            className={listItem}
          >
            <Typography
              className={accesoriesActived && menuIsActive ? activeElement : defaultElement}>
              Akcesoria
            </Typography>
          </ListItem>
        </List>
        <Dropdown
          list={currentProductCategory}
          navActive={navActive}
          dropdownActive={dropdownActive}
          mouseInDropdown={() => this.activeDropdown()}
          mouseOutDropdown={() => this.disactiveDropdown()}
        />
      </List>
    )
  }
}

export default withStyles(styles)(DesktopMenu);