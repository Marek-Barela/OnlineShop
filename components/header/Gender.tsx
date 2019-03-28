import React from 'react';
import { HeaderTypes } from '../../features/lang/pl';
import { NextFunctionComponent } from 'next';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme: Theme) => createStyles({
  text__default: {
    color: theme.palette.secondary.main,
    fontSize: "13px"
  },
  span__margin: {
    margin: "0 15px"
  }
});

interface StateProps {
  gender: HeaderTypes;
}

type Props = StateProps & WithStyles<typeof styles>;

const Gender: NextFunctionComponent<Props> = props => {
  const { classes, gender } = props;
  return (
    <Grid item xs={4}>
      <Typography className={classes.text__default} variant="caption">
        <span className={classes.span__margin}>{gender.woman}</span>
        |
        <span className={classes.span__margin}>{gender.man}</span>
      </Typography>
    </Grid>
  )
}

export default withStyles(styles)(Gender);