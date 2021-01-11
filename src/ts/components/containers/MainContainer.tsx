import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectIsLoading } from '~/store/reducers/app';
import { mockSideEffect as mockSideEffectAction } from '~/store/actions';

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
  mockSideEffect: () => void;
}

export const MainContainerComponent = ({ children, isLoading, mockSideEffect }: IProps): React.ReactElement => {
  useEffect(() => {
    mockSideEffect();
  }, [mockSideEffect]);

  return (
    <StyledDiv>
      {isLoading ? 'Loading...' : children}
    </StyledDiv>
  );
};

const mapStateToProps = (state: IRootState) => ({
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  mockSideEffect: mockSideEffectAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainerComponent);
