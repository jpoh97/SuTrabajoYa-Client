import React from "react";
import { Link } from "react-router";
import { Navbar, NavItem, Icon, Input, Row } from 'react-materialize';

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

    return (

      <Navbar brand='SuTrabajoYa' right className="blue-grey darken-4">      
        <Row>
        <Input placeholder="Placeholder" s={6} label="First Name" />
        <NavItem>
          <Link to="archives" onClick={this.toggleCollapse.bind(this)}><Icon>search</Icon></Link>          
        </NavItem>
        <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Row>
      </Navbar>

    );
  }
}