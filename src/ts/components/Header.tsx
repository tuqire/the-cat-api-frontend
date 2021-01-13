import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ROUTES } from '~/constants';
import LogoImg from '~/../images/logo.png';

const StyledDiv = styled.div`
  .header-mavbar {
    img {
      max-height: 100px;
    }
  }
`;

const Header = (): React.ReactElement => (
  <StyledDiv>
    <Navbar bg="dark" variant="dark" className="header-mavbar">
      <Navbar.Brand href={ROUTES.CAT_IMAGES.VIEW}>
        <img alt="The Cat API logo" src={LogoImg} />
        {' '}
        Mock Frontend
      </Navbar.Brand>
      <Navbar.Collapse id="header-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={ROUTES.CAT_IMAGES.VIEW}>View</Nav.Link>
          <Nav.Link href={ROUTES.CAT_IMAGES.UPLOAD}>Upload</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </StyledDiv>
);

export default Header;
