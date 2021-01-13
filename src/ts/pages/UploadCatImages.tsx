import React from 'react';
import PageContainer from '~/components/containers/PageContainer';
import UploadCatImageForm from '~/components/cat-images/UploadCatImageForm';

const UploadCatImages = (): React.ReactElement => (
  <PageContainer>
    <h1>Upload Cat Images</h1>
    <UploadCatImageForm />
  </PageContainer>
);

export default UploadCatImages;
