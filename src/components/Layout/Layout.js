import React, { Component, Fragment } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {

        this.setState((prevState) => { 
            return { 
                showSideDrawer: !prevState.showSideDrawer 
            } 
        });
    }

    render() {
        return (
            <Fragment>
                <SideDrawer closed={this.sideDrawerToggleHandler} open={this.state.showSideDrawer} />
                <Toolbar open={this.sideDrawerToggleHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;