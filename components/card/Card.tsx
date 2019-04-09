import React from 'react';
import EmptyCard from './EmptyCard';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import { NextFunctionComponent } from 'next';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  line: {
    height: 40,
    backgroundColor: '#333333'
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Tangerine, cursive',
    fontWeight: 700,
    padding: '30px 0',
    cursor: 'pointer',
    maxWidth: 250,
    margin: '0 auto',
    userSelect: 'none'
  },
  cardContainer: {
    maxWidth: 1200,
    margin: '0 auto'
  }
});

type Props = WithStyles<typeof styles>

const Card: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <>
      <header>
        <div className={classes.line}></div>
        <Link href="/mezczyzna">
          <Typography component="h1" variant="h2" className={classes.logo}>
            Vitalina
          </Typography>
        </Link>
      </header>
      <Grid container className={classes.cardContainer}>
        <EmptyCard />
      </Grid>
    </>
  )
}

export default withStyles(styles)(Card);