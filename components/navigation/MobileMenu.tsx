import React from 'react';
import List from '@material-ui/core/List';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({

});

interface ParentProps {
  nav: any;
}

type Props = ParentProps & WithStyles<typeof styles>;

const MobileMenu: NextFunctionComponent<Props> = () => {
  return (
    <List component="nav">
      <List>
        {/**TODO**/}
        Mobile
      </List>
    </List>
  )
}

export default withStyles(styles)(MobileMenu);