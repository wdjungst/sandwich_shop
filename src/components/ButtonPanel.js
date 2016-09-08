import React from 'react';

const ButtonPanel = ({ clickHandler }) => {
  let buttons = ['Bread', 'Lettuce', 'Tomato', 'Mustard', 'Bacon'].map( button => {
    return(
      <button
        className="btn"
        onClick={() => clickHandler(button)}
      >
        {button}
      </button>);
  });
  return (
    <div>
      { buttons }
    </div>
  )
}


export default ButtonPanel;
