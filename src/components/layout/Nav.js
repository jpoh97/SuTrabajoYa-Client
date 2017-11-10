import React from "react";
import { IndexLink, Link } from "react-router";
import { Navbar, NavItem, Icon, Col } from 'react-materialize';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (

      <Navbar brand='logo' right className="blue-grey darken-4">
        <NavItem>
          <Link to="archives" onClick={this.toggleCollapse.bind(this)}><Icon>search</Icon></Link>          
        </NavItem>
        <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar>

    );
  }
}