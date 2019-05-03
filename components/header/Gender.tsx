import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Hidden from '@material-ui/core/Hidden';
import { Gender as GenderDefinition } from '../../features/utils/gender';
import { getGender } from '../../features/gender/selectors';
import { changeGender } from '../../features/gender/actions';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

const styles = (theme: Theme) => createStyles({
  textDefault: {
    color: theme.palette.secondary.dark,
    fontSize: '14px'
  },
  spanElement: {
    margin: '0 15px',
    cursor: 'pointer',
    userSelect: 'none'
  },
  spanElementActive: {
    margin: '0 15px',
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: 'bold',
    color: 'black'
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
    const { textDefault, spanElement, spanElementActive, anchor } = classes;
    const female = genderType === "kobieta" ? spanElementActive : spanElement;
    const male = genderType === "mezczyzna" ? spanElementActive : spanElement;
    return (
      <Hidden smDown>
        <Grid item xs={4}>
          <Typography className={textDefault} variant="caption">
            <Link href="/kobieta">
              <a className={anchor}>
                <Grid
                  component="span"
                  className={female}
                >
                  KOBIETA
              </Grid>
              </a>
            </Link>
            |
            <Link href="/mezczyzna">
              <a className={anchor}>
                <Grid
                  component="span"
                  className={male}
                >
                  MĘŻCZYZNA
                </Grid>
              </a>
            </Link>
          </Typography>
        </Grid>
      </Hidden>
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