import React, { Component } from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Hidden from '@material-ui/core/Hidden';

interface ParentProps {
  nav: any;
}

type Props = ParentProps;

class Navigation extends Component<Props> {
  render() {
    const { nav } = this.props;
    return (
      <>
        <Hidden mdUp>
          <MobileMenu nav={nav} />
        </Hidden>
        <Hidden smDown>
          <DesktopMenu nav={nav} />
        </Hidden>
      </>
    )
  }
}

export default Navigation;