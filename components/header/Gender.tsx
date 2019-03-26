import React from 'react';
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

type Props = WithStyles<typeof styles>;

const Gender: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <Grid item xs={4}>
      <Typography className={classes.text__default} variant="caption">
        <span className={classes.span__margin}>KOBIETA</span>
        |
        <span className={classes.span__margin}>MĘŻCZYZNA</span>
      </Typography>
    </Grid>
  )
}

export default withStyles(styles)(Gender);