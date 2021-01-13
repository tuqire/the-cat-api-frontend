import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {
  fetchUsersCatImages as fetchUsersCatImagesAction,
  setFavoriteCatImage as setFavoriteCatImageAction,
  setUnfavoriteCatImage as setUnfavoriteCatImageAction,
  setUpVoteCatImage as setUpVoteAction,
  setDownVoteCatImage as setDownVoteAction,
} from '~/store/actions';
import { selectUsersCatImages, selectWereUsersCatImagesLoaded, selectWereUsersFavoriteCatImagesLoaded } from '~/store/reducers/user/catImages';

const StyledCol = styled(Col)`
  margin: 20px 0;
  position: relative;

  &.favorite {
    img {
      border: 1px solid black;
    }
  }

  img {
    margin-top: 10px;
  }

  .votes-badge {
    position: absolute;
    right: 15px;

    button {
      margin-left: 10px;
    }
  }
`;

interface IProps {
  catImages: ICatImage[];
  wereCatImagesLoaded: boolean;
  wereUsersFavoriteCatImagesLoaded: boolean;
  fetchUsersCatImages: () => void;
  setFavoriteCatImage: (catImage: ICatImage) => void;
  setUnfavoriteCatImage: (catImage: ICatImage) => void;
  setUpVoteCatImage: (catImage: ICatImage) => void;
  setDownVoteCatImage: (catImage: ICatImage) => void;
}

const UsersCatImagesListComponent = (props: IProps): React.ReactElement => {
  // TODO: correct way to do effects
  useEffect(() => {
    if (!props.wereCatImagesLoaded) {
      props.fetchUsersCatImages();
    }
  }, [props]);

  return (
    <Row>
      {props.catImages.map((catImage) => (
        <StyledCol className={catImage.isFavorite ? 'favorite' : ''} key={catImage.id} sm={6} lg={4} xl={3}>
          {props.wereUsersFavoriteCatImagesLoaded && (
            <Button
              className="favorite-button"
              variant={catImage.isFavorite ? 'primary' : 'secondary'}
              onClick={() => (catImage.isFavorite ? props.setUnfavoriteCatImage(catImage) : props.setFavoriteCatImage(catImage))}
            >
              {catImage.isFavorite ? 'Unfavourite' : 'Favourite'}
            </Button>
          )}
          {!Number.isNaN(catImage.numVotes) ? (
            <Badge className="votes-badge" variant="primary">Votes: {catImage.numVotes}
              <Button
                variant="light"
                size="sm"
                onClick={() => props.setUpVoteCatImage(catImage)}
              >
                +
              </Button>
              <Button
                variant="light"
                size="sm"
                onClick={() => props.setDownVoteCatImage(catImage)}
              >
                -
              </Button>
            </Badge>
          ) : null}
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
  fetchUsersCatImages: fetchUsersCatImagesAction,
  setFavoriteCatImage: setFavoriteCatImageAction,
  setUnfavoriteCatImage: setUnfavoriteCatImageAction,
  setUpVoteCatImage: setUpVoteAction,
  setDownVoteCatImage: setDownVoteAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersCatImagesListComponent);
