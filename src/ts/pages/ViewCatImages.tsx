import React from 'react';
import PageContainer from '~/components/containers/PageContainer';
import UsersCatImagesList from '~/components/cat-images/UsersCatImagesList';

const ViewCatImages = (): React.ReactElement => (
  <PageContainer>
    <h1>My Cat Images</h1>
    <UsersCatImagesList />
  </PageContainer>
);

export default ViewCatImages;
