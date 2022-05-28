import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {
  Routes,
} from "react-router-dom";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          <Routes>
          {this.props.children}
          </Routes>
        </Container>
      </div>
    );
  }
}
