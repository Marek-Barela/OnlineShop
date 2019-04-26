import React from 'react';
import { NextFunctionComponent } from 'next';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

const styles = () => createStyles({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Tangerine, cursive',
    userSelect: 'none',
    fontWeight: 700,
    maxWidth: 210
  }
})

type Props = WithStyles<typeof styles>

const Logo: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <Grid item xs={12} md={4} className={classes.logoContainer}>
      <img
        className={classes.logo}
        src="https://live.staticflickr.com/65535/40737311553_701a81a888_b.jpg"
        alt="Vitalina"
      />
    </Grid>
  )
}

export default withStyles(styles)(Logo);