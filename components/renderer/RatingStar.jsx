import * as React from 'react';

function RatingStar(props) {
  const handleClick = React.useCallback((ev) => {
    props.onClickHandler(ev, props.index);
  });
  return <img src={props.source} onClick={handleClick} />;
}

export default RatingStar;
