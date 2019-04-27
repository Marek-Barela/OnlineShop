import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { NavigationElement } from '../../features/utils/maleNavigation';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  activeElement: {
    cursor: 'pointer',
    padding: '15px 40px',
    textTransform: 'uppercase',
    fontSize: '14px',
    color: '#333333',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  defaultElement: {
    cursor: 'pointer',
    padding: '15px 40px',
    textTransform: 'uppercase',
    fontSize: '14px',
    color: '#333333'
  },
  listItem: {
    padding: 0
  }
})

interface ParentProps {
  mouseInListItem: any;
  product: NavigationElement[];
  productCategory: string;
  productActived: boolean;
  menuIsActive: boolean;
  label: string;
}

type Props = ParentProps & WithStyles<typeof styles>;

const NavigationListItem: NextFunctionComponent<Props> = props => {
  const { mouseInListItem, product, productCategory, productActived, menuIsActive, label, classes } = props;
  const { activeElement, defaultElement, listItem } = classes;
  return (
    <ListItem
      onMouseEnter={() => mouseInListItem(product, productCategory)}
      className={listItem}
    >
      <Typography className={productActived && menuIsActive ? activeElement : defaultElement}>
        {label}
      </Typography>
    </ListItem>
  )
}

export default withStyles(styles)(NavigationListItem);