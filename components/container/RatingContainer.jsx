import * as React from 'react';
import RatingStar from '../renderer/RatingStar.jsx';

const filledStar =
  'https://raw.githubusercontent.com/pranjalnarayan/React-Rating-Component/66027cbbc7268f2b4ce2d777e391035a80f03076/assets/svg/star-solid.svg';
const halfStar =
  'https://raw.githubusercontent.com/pranjalnarayan/React-Rating-Component/66027cbbc7268f2b4ce2d777e391035a80f03076/assets/svg/star-half-stroke-solid.svg';
const emptyStar =
  'https://raw.githubusercontent.com/pranjalnarayan/React-Rating-Component/66027cbbc7268f2b4ce2d777e391035a80f03076/assets/svg/star-regular.svg';

const isLeftSideClicked = (e) => {
  const clickTarget = e.target;
  const clickTargetWidth = clickTarget.offsetWidth;
  const xCoordInClickTarget =
    e.clientX - clickTarget.getBoundingClientRect().left;
  return clickTargetWidth / 2 > xCoordInClickTarget;
};

function RatingContainer(props) {
  const [rating, setRating] = React.useState(0);
  const totalStars = [];
  totalStars.length = props.maxRating || 5;
  totalStars.fill(props.maxRating || 5);

  const onStarClickHandler = React.useCallback((ev, index) => {
    const isLeftClick = isLeftSideClicked(ev);
    console.log(index + (isLeftClick ? 0.5 : 1));
    setRating(index + (isLeftClick ? 0.5 : 1));
  });

  const getStarSource = (ind) => {
    if (rating > ind && rating >= ind + 1) {
      return props.filledStar || filledStar;
    }
    if (rating === 0 || (rating && rating <= ind)) {
      return props.emptyStar || emptyStar;
    }
    return props.halfStar || halfStar;
  };

  return (
    <div>
      {totalStars.map((el, ind) => (
        <RatingStar
          key={ind}
          source={getStarSource(ind)}
          onClickHandler={onStarClickHandler}
          index={ind}
        />
      ))}
    </div>
  );
}

export default RatingContainer;
