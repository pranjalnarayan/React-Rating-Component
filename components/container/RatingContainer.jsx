import * as React from 'react';
import RatingStar from '../renderer/RatingStar.jsx';

const isLeftSideClicked = (e) => {
  const clickTarget = e.target;
  const clickTargetWidth = clickTarget.offsetWidth;
  const xCoordInClickTarget =
    e.clientX - clickTarget.getBoundingClientRect().left;
  return clickTargetWidth / 2 > xCoordInClickTarget;
};

function RatingContainer(props) {
  const [rating, setRating] = React.useState(0);

  const onStarClickHandler = React.useCallback((ev, index) => {
    const isLeftClick = isLeftSideClicked(ev);
    console.log(index + (isLeftClick ? 0.5 : 1));
    setRating(index + (isLeftClick ? 0.5 : 1));
  });

  const getStarSource = (ind) => {
    console.log(ind);
    if (rating > ind && rating >= ind + 1) {
      console.log('filledStar');
      return props.filledStar;
    }
    if (rating === 0 || (rating && rating <= ind)) {
      console.log('emptyStar');
      return props.emptyStar;
    }

    console.log('halfStar');
    return props.halfStar;
  };

  return (
    <div>
      <RatingStar
        source={getStarSource(0)}
        onClickHandler={onStarClickHandler}
        index={0}
      />
      <RatingStar
        source={getStarSource(1)}
        onClickHandler={onStarClickHandler}
        index={1}
      />
      <RatingStar
        source={getStarSource(2)}
        onClickHandler={onStarClickHandler}
        index={2}
      />
      <RatingStar
        source={getStarSource(3)}
        onClickHandler={onStarClickHandler}
        index={3}
      />
      <RatingStar
        source={getStarSource(4)}
        onClickHandler={onStarClickHandler}
        index={4}
      />
    </div>
  );
}

export default RatingContainer;
