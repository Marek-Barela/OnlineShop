import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Typography from '@material-ui/core/Typography';
import { clothes, boots, sport, accesories } from '../../features/utils/femaleNavigation';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderWomanDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  banner: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url(https://mosaic03.ztat.net/crt/creative-content/3fb37226-5995-4ee7-b922-e4f23e30c5c5.jpg)',
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

class Woman extends Component<Props> {
  render() {
    const { classes } = this.props;
    const femaleNavMenu = { clothes, boots, sport, accesories };
    return (
      <Layout
        URL={genderWomanDefault}
        nav={femaleNavMenu}
      >
        <div className={classes.banner}>
          <Typography className={classes.text} component="h3" variant="h4">
            Już wkrótce najnowsze trendy...
          </Typography>
        </div>
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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(Woman));