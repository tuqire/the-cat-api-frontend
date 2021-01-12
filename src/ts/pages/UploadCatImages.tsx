import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MainContentContainer from '~/components/containers/MainContentContainer';
import PageContainer from '~/components/containers/PageContainer';
import { uploadUsersCatImage as uploadUsersCatImageAction } from '~/store/actions';

interface IProps {
  uploadUsersCatImage: (catImage: File) => void;
}

const UploadCatImagesComponent = ({ uploadUsersCatImage }: IProps): React.ReactElement => {
  const [uploadedFile, setUploadedFile] = useState<File>();

  return (
    <PageContainer>
      <h1>Upload Cat Images</h1>
      <MainContentContainer>
        <input
          type="file"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (!event.target.files?.[0]) {
              return;
            }

            setUploadedFile(event.target.files[0]);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (!uploadedFile) {
              return;
            }

            uploadUsersCatImage(uploadedFile);
          }}
        >
          Upload
        </button>
      </MainContentContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = {
  uploadUsersCatImage: uploadUsersCatImageAction,
};

export default connect(null, mapDispatchToProps)(UploadCatImagesComponent);
