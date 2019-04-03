import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Typography from '@material-ui/core/Typography';
import { getProducts} from '../../features/maleProducts/selectors';
import { JSONCategoriesResponse } from '../../features/maleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { withRouter } from 'next/router';
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/pl';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  banner: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url(https://mosaic03.ztat.net/crt/creative-content/3a516d0f-f53c-4091-8790-30d7daead691.jpg)',
    backgroundSize: 'cover'
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
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
  router: any;
}

interface StateProps {
  categories: JSONCategoriesResponse
}

type Props = StateProps & ParentProps & WithStyles<typeof styles>;

export interface Gender {
  woman: string;
  man: string;
  defaultGender: string;
}

class Man extends Component<Props> {
  render() {
    const { header, navigation, navigationList, router, classes } = this.props;
    const genderURL: Gender = { woman: '/pl/kobieta', man: '/pl/mezczyzna', defaultGender: 'man' };
    return (
      <Layout
        header={header}
        navigation={navigation}
        navigationList={navigationList}
        URL={genderURL}
      >
        <div className={classes.banner}>
          <Typography className={classes.text} component="h3" variant="h4">
            Już wkrótce najnowsze trendy...
          </Typography>
        </div>
        <div>
          {router.query.title}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const categories = getProducts(state)

  return {
    categories
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(withRouter(Man)));