import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'next/router';
import { NavigationTypes, NavigationClothes, HeaderTypes } from '../../features/lang/pl';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  banner: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url(https://mosaic03.ztat.net/crt/creative-content/3fb37226-5995-4ee7-b922-e4f23e30c5c5.jpg)',
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

interface StateProps {
  navigation: NavigationTypes;
  navigationList: NavigationClothes;
  header: HeaderTypes;
  router: any;
}

type Props = StateProps & WithStyles<typeof styles>;

export interface Gender {
  woman: string;
  man: string;
  defaultGender: string;
}

class Woman extends Component<Props> {
  render() {
    const { header, navigation, navigationList, router, classes } = this.props;
    const genderURL: Gender = { woman: '/pl/kobieta', man: '/pl/mezczyzna', defaultGender: 'woman' };
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
          <div></div>
          <div></div>
        </div>
        <div>
          {router.query.title}
        </div>
      </Layout>
    )
  }
}

export default withStyles(styles)(withRouter(Woman));