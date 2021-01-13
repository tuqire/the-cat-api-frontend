import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWereUsersCatImagesLoaded } from '~/store/reducers/user/catImages';
import { fetchUsersCatImages } from '~/store/actions';

const useLoadUsersCatImages = () => {
  const wereUsersCatImagesLoaded = useSelector(selectWereUsersCatImagesLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!wereUsersCatImagesLoaded) {
      dispatch(fetchUsersCatImages());
    }
  }, [wereUsersCatImagesLoaded, dispatch]);
};

export default useLoadUsersCatImages;
