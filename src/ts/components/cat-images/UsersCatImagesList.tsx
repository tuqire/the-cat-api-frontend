import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  getUsersCatImages as getUsersCatImagesAction,
  setFavoriteCatImage as setFavoriteCatImageAction,
  setUnfavoriteCatImage as setUnfavoriteCatImageAction,
  setUpVoteCatImage as setUpVoteAction,
  setDownVoteCatImage as setDownVoteAction,
} from '~/store/actions';
import { selectUsersCatImages, selectWereUsersCatImagesLoaded, selectWereUsersFavoriteCatImagesLoaded } from '~/store/reducers/user/catImages';

const StyledCol = styled(Col)`
  margin: 20px 0;
  position: rlative;
  text-align: center;

  &.favorite {
    img {
      border: 1px solid black;
    }
  }

  .favorite-button {
    margin-bottom: 10px;
  }

  .up-vote-button,
  .down-vote-button {
    position: absolute;
    top: 0;
  }

  .up-vote-button {
    left: 10px;
  }

  .down-vote-button {
    right: 10px;
  }
`;

interface IProps {
  catImages: ICatImage[];
  wereCatImagesLoaded: boolean;
  wereUsersFavoriteCatImagesLoaded: boolean;
  getUsersCatImages: () => void;
  setFavoriteCatImage: (catImage: ICatImage) => void;
  setUnfavoriteCatImage: (catImage: ICatImage) => void;
  setUpVoteCatImage: (catImage: ICatImage) => void;
  setDownVoteCatImage: (catImage: ICatImage) => void;
}

const UsersCatImagesListComponent = (props: IProps): React.ReactElement => {
  // TODO: correct way to do effects
  useEffect(() => {
    if (!props.wereCatImagesLoaded) {
      props.getUsersCatImages();
    }
  }, [props]);

  return (
    <Row>
      {props.catImages.map((catImage) => (
        <StyledCol className={catImage.isFavorite ? 'favorite' : ''} key={catImage.id} sm={6} lg={4} xl={3}>
          {props.wereUsersFavoriteCatImagesLoaded && (
            <Button
              className="favorite-button"
              variant="secondary"
              onClick={() => (catImage.isFavorite ? props.setUnfavoriteCatImage(catImage) : props.setFavoriteCatImage(catImage))}
            >
              {catImage.isFavorite ? 'Unfavourite' : 'Favourite'}
            </Button>
          )}
          <Button
            className="up-vote-button"
            variant="link"
            onClick={() => props.setUpVoteCatImage(catImage)}
          >
            + Vote
          </Button>
          <Button
            className="down-vote-button"
            variant="link"
            onClick={() => props.setDownVoteCatImage(catImage)}
          >
            - Vote
          </Button>
          <img alt={`cat ${catImage.id}`} src={catImage.url} />
        </StyledCol>
      ))}
    </Row>
  );
};

const mapStateToProps = (state: IRootState) => ({
  catImages: selectUsersCatImages(state),
  wereCatImagesLoaded: selectWereUsersCatImagesLoaded(state),
  wereUsersFavoriteCatImagesLoaded: selectWereUsersFavoriteCatImagesLoaded(state),
});

const mapDispatchToProps = {
  getUsersCatImages: getUsersCatImagesAction,
  setFavoriteCatImage: setFavoriteCatImageAction,
  setUnfavoriteCatImage: setUnfavoriteCatImageAction,
  setUpVoteCatImage: setUpVoteAction,
  setDownVoteCatImage: setDownVoteAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersCatImagesListComponent);
