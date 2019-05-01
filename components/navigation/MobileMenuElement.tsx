import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  listElement: {
    width: 280,
    textTransform: 'uppercase',
    flex: 1,
    justifyContent: 'space-between',
  },
  listElementText: {
    fontSize: '0.75em',
    color: 'rgba(0,0,0,0.6)',
    fontWeight: 'bold',
    letterSpacing: '2px'
  },
  borderBottom: {
    borderBottom: '1px solid rgba(0,0,0,0.07)',
  },
  colapseListText: {
    marginLeft: 20,
    fontSize: '0.58em',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
    letterSpacing: '1px'
  }
});

interface ParentProps {
  name: String;
  list: any;
}

type Props = ParentProps & WithStyles<typeof styles>;

class MobileElementList extends Component<Props> {

  state = {
    open: false
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { name, list, classes } = this.props;
    const { listElement, listElementText, borderBottom, colapseListText } = classes;
    return (
      <>
        <ListItem button onClick={this.handleClick} className={listElement}>
          <Typography className={listElementText}>{name}</Typography>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <List disablePadding component="nav" className={borderBottom}>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List disablePadding >
              {
                list.map((item: any, index: number) => {
                  const { label, endpoint } = item;
                  return (
                    <Link href={endpoint} key={index}>
                      <ListItem button>
                        <Typography className={colapseListText}>{label}</Typography>
                      </ListItem>
                    </Link>
                  )
                })
              }
            </List>
          </Collapse>
        </List>
      </>
    )
  }
}

export default withStyles(styles)(MobileElementList);