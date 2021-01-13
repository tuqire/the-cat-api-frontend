import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Header from '~/components/Header';
import { selectIsLoading } from '~/store/reducers/app';

const StyledContainer = styled(Container)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

interface IProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const PageContainer = ({ children, isLoading }: IProps): React.ReactElement => (
  <>
    <Header />
    <StyledContainer fluid>
      {isLoading ? <Spinner animation="border" /> : children}
    </StyledContainer>
  </>
);

const mapStateToProps = (state: IRootState) => ({
  isLoading: selectIsLoading(state),
});

export default connect(mapStateToProps)(PageContainer);
