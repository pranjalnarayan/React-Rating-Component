import * as React from 'react';
import RatingContainer from './components/container/RatingContainer.jsx';
import './style.css';

export default function App() {
  const filledStar =
    'https://raw.githubusercontent.com/pranjalnarayan/React-Rating-Component/66027cbbc7268f2b4ce2d777e391035a80f03076/assets/svg/star-solid.svg';
  const halfStar =
    'https://raw.githubusercontent.com/pranjalnarayan/React-Rating-Component/66027cbbc7268f2b4ce2d777e391035a80f03076/assets/svg/star-half-stroke-solid.svg';
  const emptyStar =
    'https://raw.githubusercontent.com/pranjalnarayan/React-Rating-Component/66027cbbc7268f2b4ce2d777e391035a80f03076/assets/svg/star-regular.svg';
  return (
    <div>
      <RatingContainer
        filledStar={filledStar}
        halfStar={halfStar}
        emptyStar={emptyStar}
      />
    </div>
  );
}
