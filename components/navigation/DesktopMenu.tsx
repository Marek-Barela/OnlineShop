import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavigationElement } from '../../features/utils/maleNavigation';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({

})

interface ParentProps {
  nav: any;
}

type Props = ParentProps & WithStyles<typeof styles>;

class DesktopMenu extends Component<Props> {
  state = {
    currentProductCategory: [],
    activeProductCategoryName: ""
  }

  setNavigation(productCategory: NavigationElement[], productCategoryMenu: string) {
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

  render() {
    const { nav } = this.props;
    const { clothes, boots, sport, accesories } = nav;
    const { activeProductCategoryName } = this.state;
    const clothesActived = activeProductCategoryName === "clothes";
    const bootsActived = activeProductCategoryName === "boots";
    const sportActived = activeProductCategoryName === "sport";
    const accesoriesActived = activeProductCategoryName === "accesories";
    return (
      <List component="nav">
        <List>
          <ListItem
            onMouseEnter={() => this.setNavigation(clothes, "clothes")}
          >
            Odzież
          </ListItem>
        </List>
      </List>
    )
  }
}

export default withStyles(styles)(DesktopMenu);