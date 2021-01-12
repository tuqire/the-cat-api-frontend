import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainContentContainer from '~/components/containers/MainContentContainer';
import {
  getUsersCatImages as getUsersCatImagesAction,
  setFavoriteCatImage as setFavoriteCatImageAction,
  setUnfavoriteCatImage as setUnfavoriteCatImageAction,
} from '~/store/actions';
import { selectUsersCatImages } from '~/store/reducers/user/catImages';

interface IProps {
  catImages: ICatImage[];
  getUsersCatImages: () => void;
  setFavoriteCatImage: (catImage: ICatImage) => void;
  setUnfavoriteCatImage: (catImage: ICatImage) => void;
}

const UsersCatImagesListComponent = (props: IProps): React.ReactElement => {
  useEffect(() => {
    props.getUsersCatImages();
  }, [props.getUsersCatImages]); // TODO: correct way to do effects

  return (
    <MainContentContainer>
      {props.catImages.map((catImage) => (
        <>
          <img key={catImage.id} src={catImage.url} />
          <span
            onClick={() => catImage.isFavorite ? props.setUnfavoriteCatImage(catImage) : props.setFavoriteCatImage(catImage)}
          >
            {catImage.isFavorite ? 'Unfavourite' : 'Favourite'}
          </span>
        </>
      ))}
    </MainContentContainer>
  );
};

const mapStateToProps = (state: IRootState) => ({
  catImages: selectUsersCatImages(state),
});

const mapDispatchToProps = {
  getUsersCatImages: getUsersCatImagesAction,
  setFavoriteCatImage: setFavoriteCatImageAction,
  setUnfavoriteCatImage: setUnfavoriteCatImageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersCatImagesListComponent);
