import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import { withStyles } from "material-ui";
// import { withStyles } from "@material-ui/core/styles";
import withRoot from '../src/withRoot';

import { Header, Footer, Sidebar } from "components";

import dashboardRoutes from "routes/dashboard.jsx";

import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";

const image = "/static/assets/img/sidebar-2.jpg";
const logo = "/static/assets/img/reactlogo.png";

export default function withDashboard(Child, opts) {
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

    state = {
      mobileOpen: false
    };

    handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    componentDidMount() {
      if(navigator.platform.indexOf('Win') > -1){
        // eslint-disable-next-line
        const ps = new PerfectScrollbar(this.refs.mainPanel);
      }
    }

    render() {
      const opts = opts || {};
      const { classes, ...rest } = this.props;
      // console.log(rest);
      return (
          <div className={classes.wrapper}>
            {/* <Head>
              <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
            </Head> */}
            <Sidebar
              routes={dashboardRoutes}
              logoText={"Creative Tim"}
              logo={logo}
              image={image}
              handleDrawerToggle={this.handleDrawerToggle}
              open={this.state.mobileOpen}
              color="blue"
              {...rest}
            />
            <div className={classes.mainPanel} ref="mainPanel">
              <Header
                routes={dashboardRoutes}
                handleDrawerToggle={this.handleDrawerToggle}
                {...rest}
              />
              {!opts.isMap ? (
                <div className={classes.content}>
                  <div className={classes.container}>
                    <Child {...this.props}/>
                  </div>
                </div>
              ) : (
                <div className={classes.map}>
                  <Child {...this.props}/>
                </div>
              )}
              {!opts.isMap ? <Footer /> : null}
            </div>
          </div>
      )
    }
  }

  WrappedComponent.propTypes = {
    classes: PropTypes.object.isRequired
  };

  // return (WrappedComponent)
  // return withStyles(appStyle)(WrappedComponent)
  return withRoot(withStyles(appStyle)(WrappedComponent))
}
