import React from 'react';
import Trash from 'react-icons/lib/md/delete';
import Up from 'react-icons/lib/md/keyboard-arrow-up';
import Down from 'react-icons/lib/md/keyboard-arrow-down';

const iconStyle = { cursor: 'pointer' };

const hasDownArrow = (index, last) => {
  if (index === last)
    return false
  else
    return true
}

const hasUpArrow = (index) => {
  if (index === 0)
    return false
  else
    return true
}

const IngredientList = ({ ingredients, deleteHandler, moveUp, moveDown }) => (
  <div>
    <ul className="text-center collection">
      { ingredients.map( (ingredient, index) => {
        let last = ingredients.length - 1;
        let hasUp = hasUpArrow(index)
        let hasDown = hasDownArrow(index, last)
        let { type, id } = ingredient;
          return (
            <li
              key={id}
              className="collection-item"
            >
              {type}
              <div className="secondary-content">
                <div style={iconStyle} className="row">
                  { hasUp ? <Up onClick={() => moveUp(id)} /> : null }
                  { hasDown ? <Down onClick={() => moveDown(id)} /> : null }
                  <Trash onClick={() => deleteHandler(id) }/>
                </div>
              </div>
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default IngredientList;
