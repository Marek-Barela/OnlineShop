import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { clothes, boots, sport, accesories } from '../../features/utils/maleNavigation';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderManDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  banner: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url(https://live.staticflickr.com/65535/32805685677_f1e376ee1c_k.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '40%',
    marginLeft: '12%',
    userSelect: 'none'
  }
});

interface StateProps {
  products: ProductItem[]
}

type Props = StateProps & WithStyles<typeof styles>;

class Man extends Component<Props> {
  render() {
    const { classes } = this.props;
    const maleNavMenu = { clothes, boots, sport, accesories }
    return (
      <Layout
        URL={genderManDefault}
        nav={maleNavMenu}
      >
        <Grid className={classes.banner}>
          <Typography className={classes.text} component="h3" variant="h4">
            Już wkrótce najnowsze trendy...
          </Typography>
        </Grid>
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const products = getProducts(state)

  return {
    products
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(Man));