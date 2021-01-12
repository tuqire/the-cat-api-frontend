import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectIsLoading } from '~/store/reducers/app';

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 25px auto;
`;

interface IProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export const MainContentContainerComponent = ({ children, isLoading }: IProps): React.ReactElement => (
  <StyledDiv>
    {isLoading ? 'Loading...' : children}
  </StyledDiv>
);

const mapStateToProps = (state: IRootState) => ({
  isLoading: selectIsLoading(state),
});

export default connect(mapStateToProps)(MainContentContainerComponent);
