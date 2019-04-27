import React, { Component } from 'react';
import NavigationListItem from './NavigationListItem';
import Dropdown from './Dropdown';
import List from '@material-ui/core/List';
import { NavigationElement } from '../../features/utils/maleNavigation';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  navigation: {
    padding: 0,
    borderBottom: '1px solid rgba(0,0,0,0.16)'
  },
  navList: {
    maxWidth: 580,
    padding: 0,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
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
    const { navigation, navList } = classes;
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
          <NavigationListItem
            mouseInListItem={this.setNavigationContent.bind(this)}
            product={clothes}
            productActived={clothesActived}
            productCategory="clothes"
            menuIsActive={menuIsActive}
            label="Odzież"
          />
          <NavigationListItem
            mouseInListItem={this.setNavigationContent.bind(this)}
            product={boots}
            productActived={bootsActived}
            productCategory="boots"
            menuIsActive={menuIsActive}
            label="Buty"
          />
          <NavigationListItem
            mouseInListItem={this.setNavigationContent.bind(this)}
            product={sport}
            productActived={sportActived}
            productCategory="sport"
            menuIsActive={menuIsActive}
            label="Sport"
          />
          <NavigationListItem
            mouseInListItem={this.setNavigationContent.bind(this)}
            product={accesories}
            productActived={accesoriesActived}
            productCategory="accesories"
            menuIsActive={menuIsActive}
            label="Akcesoria"
          />
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