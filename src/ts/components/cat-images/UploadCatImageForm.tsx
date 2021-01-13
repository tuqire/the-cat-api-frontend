import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { uploadUsersCatImage as uploadUsersCatImageAction } from '~/store/actions';

interface IProps {
  uploadUsersCatImage: (catImage: File) => void;
}

const UploadCatImageFormComponent = ({ uploadUsersCatImage }: IProps): React.ReactElement => {
  const [uploadedFile, setUploadedFile] = useState<File>();

  const submitForm = () => {
    if (!uploadedFile) {
      return;
    }

    uploadUsersCatImage(uploadedFile);
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Group controlId="UploadCatImageForm.file">
        <Form.Label>Choose file</Form.Label>
        <Form.Control
          type="file"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (!event.target.files?.[0]) {
              return;
            }

            setUploadedFile(event.target.files[0]);
          }}
        />
      </Form.Group>
      <Button onClick={submitForm}>Upload</Button>
    </Form>
  );
};

const mapDispatchToProps = {
  uploadUsersCatImage: uploadUsersCatImageAction,
};

export default connect(null, mapDispatchToProps)(UploadCatImageFormComponent);
