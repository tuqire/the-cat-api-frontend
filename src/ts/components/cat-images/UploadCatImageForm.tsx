import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { uploadUsersCatImage as uploadUsersCatImageAction } from '~/store/actions';
import { selectUsersCatImageErrors } from '~/store/reducers/user/catImages';

interface IProps {
  uploadError: string;
  uploadUsersCatImage: (catImage: File) => void;
}

const UploadCatImageFormComponent = ({ uploadError, uploadUsersCatImage }: IProps): React.ReactElement => {
  const [uploadedFile, setUploadedFile] = useState<File>();

  const submitForm = () => {
    if (!uploadedFile) {
      return;
    }

    uploadUsersCatImage(uploadedFile);
  };

  return (
    <Form onSubmit={submitForm}>
      {uploadError && <Alert variant="danger">{uploadError}</Alert>}
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

const mapStateToProps = (state: IRootState) => ({
  uploadError: selectUsersCatImageErrors(state).upload,
});

const mapDispatchToProps = {
  uploadUsersCatImage: uploadUsersCatImageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadCatImageFormComponent);
