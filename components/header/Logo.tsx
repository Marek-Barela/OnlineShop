import React from 'react';
import { NextFunctionComponent } from 'next';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Logo: NextFunctionComponent<{}> = () => {
  return (
    <Grid item xs={4}>
      <Typography component="h1" variant="subtitle1" align="center">Shopland</Typography>
    </Grid>
  )
}

export default (Logo);