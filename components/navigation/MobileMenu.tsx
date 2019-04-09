import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({

});

type Props = WithStyles<typeof styles>;

const MobileMenu: NextFunctionComponent<Props> = () => {
  return (
    <Hidden mdUp>
      <List
        component="nav"
      >
        {/**TODO**/}
      </List>
    </Hidden>
  )
}

export default withStyles(styles)(MobileMenu);