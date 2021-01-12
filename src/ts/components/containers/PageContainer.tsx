import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '~/constants';

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 25px auto;
`;

interface IProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: IProps): React.ReactElement => (
  <StyledDiv>
    <Link to={ROUTES.CAT_IMAGES.VIEW}>View Cat Images</Link>
    <Link to={ROUTES.CAT_IMAGES.UPLOAD}>Upload Cat Images</Link>
    {children}
  </StyledDiv>
);

export default PageContainer;
