import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getGender } from '../../features/gender/selectors';
import { HeaderTypes } from '../../features/lang/pl';
import { changeGender } from '../../features/gender/actions';
import { NextFunctionComponent } from 'next';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

const styles = (theme: Theme) => createStyles({
  text__default: {
    color: theme.palette.secondary.main,
    fontSize: "13px"
  },
  span__element: {
    margin: "0 15px",
    cursor: 'pointer',
    userSelect: 'none'
  }
});

interface ParentProps {
  gender: HeaderTypes;
}

interface StateProps {
  genderType: string;
}

interface DispatchProps {
  onGenderChange: (payload: string) => void;
}

type Props = ParentProps & StateProps & DispatchProps & WithStyles<typeof styles>;

const Gender: NextFunctionComponent<Props> = props => {
  const { classes, gender, genderType, onGenderChange } = props;
  const female = genderType === "woman" && "active-gender";
  const male = genderType === "man" && "active-gender";
  return (
    <Grid item xs={4}>
      <Typography className={classes.text__default} variant="caption">
        <span
          onClick={() => onGenderChange("woman")}
          className={`${classes.span__element} ${female}`}
        >
          {gender.woman}
        </span>
        |
        <span
          onClick={() => onGenderChange("man")}
          className={`${classes.span__element} ${male}`}
        >
          {gender.man}
        </span>
      </Typography>
    </Grid>
  )
}

const mapStateToProps = (state: RootState) => {
  const genderType = getGender(state);

  return {
    genderType,
  };
};

const mapDispatchToProps = {
  onGenderChange: changeGender,
};

export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Gender));