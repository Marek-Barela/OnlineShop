import React from 'react';
import { NextFunctionComponent } from 'next';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

const styles = () => createStyles({
  logo: {
    textAlign: 'center',
    fontFamily: 'Tangerine, cursive',
    userSelect: 'none',
    fontWeight: 700
  }
})

type Props = WithStyles<typeof styles>

const Logo: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <Grid item xs={4}>
      <Typography component="h1" variant="h3" className={classes.logo}>Vitalina</Typography>
    </Grid>
  )
}

export default withStyles(styles)(Logo);