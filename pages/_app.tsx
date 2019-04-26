import App, { Container, NextAppContext } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MUIPageContext } from '../features/mui/getPageContext';
import getPageContext from '../features/mui/getPageContext';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../features/redux/store';
import { RootAction } from '../features/redux/root-actions';
import { RootState } from '../features/redux/root-reducer';
import { Store } from 'redux';

type Props = { store: Store<RootState, RootAction> };

class MyApp extends App<Props> {
  pageContext: MUIPageContext;
  constructor(props: any) {
    super(props);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static async getInitialProps(appContext: NextAppContext) {
    const { Component, ctx } = appContext;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <title>Vitalina</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Best online shop ever!" />
          <meta name="keywords" content="Odzież, Buty, Sport, Akcesoria" />
          <meta name="author" content="Marek Bareła" />
          <link rel="icon" type="image/x-icon" href="https://cdn.dribbble.com/users/1097/screenshots/168079/newv2.png" />
        </Head>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Provider store={store}>
              <Component pageContext={this.pageContext} {...pageProps} />
            </Provider>
          </ MuiThemeProvider>
        </ JssProvider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
