import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import flush from 'styled-jsx/server';
import getPageContext from '../src/getPageContext';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>My page</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          {/* <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"/>
          {/* PWA primary color */}
          {/* <meta name="theme-color" content={pageContext.theme.palette.primary.main} /> */}
          <meta name="theme-color" content="#000000"/>
          {/* <!--
            manifest.json provides metadata used when your web app is added to the
            homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
          --> */}
          <link rel="manifest" href="/static/manifest.json"/>
          <link rel="shortcut icon" href="/static/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon.png"/>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"/>
          <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          /> */}
          <link rel='stylesheet' href='/static/assets/css/material-dashboard-react.css' />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <title>Material Dashboard React by Creative Tim</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.
  const pageContext = getPageContext();
  const page = ctx.renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
