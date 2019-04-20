import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { getProducts } from '../../features/maleProducts/selectors';
import { genderManDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { withRouter } from 'next/router';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  banner: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url(https://mosaic03.ztat.net/crt/creative-content/3a516d0f-f53c-4091-8790-30d7daead691.jpg)',
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

interface ParentProps {
  router: any;
}

interface StateProps {
  products: ProductItem[]
}

type Props = StateProps & ParentProps & WithStyles<typeof styles>;

class Man extends Component<Props> {
  render() {
    const { router, classes } = this.props;
    return (
      <Layout URL={genderManDefault}>
        <Grid className={classes.banner}>
          <Typography className={classes.text} component="h3" variant="h4">
            Już wkrótce najnowsze trendy...
          </Typography>
        </Grid>
        <Grid>
          {router.query.title}
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

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(withRouter(Man)));