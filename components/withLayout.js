import React, {Component} from 'react'
// import Head from 'next/head'
// import NProgress from 'nprogress'
// import Router from 'next/router'
//
// Router.onRouteChangeStart = (url) => {
//   // console.log(`Loading: ${url}`)
//   NProgress.start()
// }
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

export default function withLayout(Child, opts) {
  class WrappedComponent extends Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      return {
        ...ChildProps,
      }
    }

    render() {
      return (
        <div style={{ marginBottom: 20 }}>
          {/* <Head>
            <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
          </Head> */}
          <Child {...this.props}/>
        </div>
      )
    }
  }

  return (WrappedComponent)
}
