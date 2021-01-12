import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainContentContainer from '~/components/containers/MainContentContainer';
import { getUsersCatImages as getUsersCatImagesAction } from '~/store/actions';
import { selectUsersCatImages } from '~/store/reducers/user/catImages';

interface IProps {
  catImages: ICatImage[];
  getUsersCatImages: () => void;
}

const UsersCatImagesListComponent = ({ catImages, getUsersCatImages }: IProps): React.ReactElement => {
  useEffect(() => {
    getUsersCatImages();
  }, [getUsersCatImages]); // TODO: correct way to do effects

  return (
    <MainContentContainer>
      {catImages.map((catImage) => <img key={catImage.id} src={catImage.url} />)}
    </MainContentContainer>
  );
};

const mapStateToProps = (state: IRootState) => ({
  catImages: selectUsersCatImages(state),
});

const mapDispatchToProps = {
  getUsersCatImages: getUsersCatImagesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersCatImagesListComponent);
