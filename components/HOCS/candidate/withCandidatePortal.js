import React from 'react'
import Head from 'next/head'
import { withApollo, compose } from 'react-apollo'
//import 'isomorphic-fetch'

import withData from '../../../lib/backendApi/withData'
import redirect from '../../../lib/auth/redirect'
import checkLoggedIn from '../../../lib/auth/checkLoggedIn'

import CandidateIsAuthenticatedContext from '../../Context/CandidateIsAuthenticated'

// import {Container} from 'reactstrap'
// import Breadcrumb from './portal/Breadcrumb/Breadcrumb'
// import Sidebar from './portal/adminUI/Sidebar/Sidebar'
// import Header from './portal/adminUI/Header/Header'

import { ToastContainer } from 'react-toastify'

export default function withLayout(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      //Validate loggedin user
      const {isAuthenticated} = await checkLoggedIn(context.apolloClient)
      if (!isAuthenticated) {
        // If not signed in, send them somewhere more useful
        let target = `/?show=signIn`
        // let asPath = `/login`
        if (context.pathname !== '/user'){
          target = `${target}&from=${context.pathname}`
          // asPath = `${asPath}?from=${context.pathname}`
        }
        redirect(context, target)
      }

      return {
        ...ChildProps,
        isAuthenticated
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      console.log(`isAuthenticated : ${isAuthenticated}`);
      if (!isAuthenticated) {
        return (
          <div>Hollup</div>
        )
      }
      const opts = opts || {};
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            {/* <link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/> */}
            {/* <!-- Stylesheets--> */}
            <link rel="stylesheet" href="/static/css/portal/style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"/>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
          </Head>
          <div className="app">
            {/* <Header client={this.props.client}/> */}
            <div className="app-body">
              {/* <Sidebar/> */}
              <main className="main" style={{
                paddingTop: '24px'
              }}>
                <CandidateIsAuthenticatedContext.Provider value={isAuthenticated}>
                  <Child />
                </CandidateIsAuthenticatedContext.Provider>
            </main>
          </div>
        </div>
        <ToastContainer />
      </div>
    )}
  }

  return (WrappedComponent)

  /*return compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo
  )(WrappedComponent)*/
}
