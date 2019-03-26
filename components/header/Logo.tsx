import React from 'react';
import { NextFunctionComponent } from 'next';
import Typography from '@material-ui/core/Typography';

const Logo: NextFunctionComponent<{}> = () => {
  return (
    <div>
      <Typography component="h1" variant="subtitle1">Shopland</Typography>
    </div>
  )
}

export default (Logo);