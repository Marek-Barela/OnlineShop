import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { Gender as GenderDefinition } from '../man/Man';
import { getGender } from '../../features/gender/selectors';
import { changeGender } from '../../features/gender/actions';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

const styles = (theme: Theme) => createStyles({
  text__default: {
    color: theme.palette.secondary.main,
    fontSize: '13px'
  },
  span__element: {
    margin: '0 15px',
    cursor: 'pointer',
    userSelect: 'none'
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

interface ParentProps {
  URL: GenderDefinition;
}

interface StateProps {
  genderType: string;
}

interface DispatchProps {
  onGenderChange: (payload: string) => void;
}

type Props = ParentProps & StateProps & DispatchProps & WithStyles<typeof styles>;

class Gender extends Component<Props> {
  componentDidMount() {
    //Set default gender styling
    const { URL, onGenderChange } = this.props;
    onGenderChange(URL.defaultGender)
  }
  render() {
    const { classes, genderType } = this.props;
    const female = genderType === "woman" && "active-gender";
    const male = genderType === "man" && "active-gender";
    return (
      <Grid item xs={4}>
        <Typography className={classes.text__default} variant="caption">
          <Link href="/kobieta">
            <a className={classes.anchor}>
              <span
                className={`${classes.span__element} ${female}`}
              >
                Kobieta
              </span>
            </a>
          </Link>
          |
        <Link href="/mezczyzna">
            <a className={classes.anchor}>
              <span
                className={`${classes.span__element} ${male}`}
              >
                Mężczyzna
              </span>
            </a>
          </Link>
        </Typography>
      </Grid>
    )
  }
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