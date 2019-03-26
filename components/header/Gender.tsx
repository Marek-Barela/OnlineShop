import React from 'react';
import { NextFunctionComponent } from 'next';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  text__default: {
    color: theme.palette.secondary.main
  }
});

type Props = WithStyles<typeof styles>;

const Gender: NextFunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <div>
      <Typography className={classes.text__default} variant="caption">
        <span >WOMEN</span> | <span>MAN</span>
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Gender);