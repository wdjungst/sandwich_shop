import React from 'react';
import ButtonPanel from './ButtonPanel';
import Ingredient from './Ingredient';
import IngredientList from './IngredientList';
import Materialize from 'react-materialize';

class SandwhichShop extends React.Component {
  constructor(props) {
    super(props);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.expand = this.expand.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.state= { ingredients: [], expand: false };
  }

  addIngredient(type) {
    let id = this.state.ingredients.length;

    let ingredient = { id, type }
    window.Materialize.toast(type, 1500, 'rounded');
    if (id >= 3 && id % 3 === 0)
      window.Materialize.toast('COMBO BREAKER', 3000, 'bam')
    this.setState({ ingredients: [ingredient, ...this.state.ingredients] });
  }

  removeIngredient(id) {
    let ingredients = this.state.ingredients.filter( i => i.id !== id );
    this.setState({ ingredients });
  }

  moveUp(id) {
    let ingredients = [...this.state.ingredients];
    let indexA = ingredients.findIndex( i => i.id === id );
    let indexB = indexA - 1;
    let tmp = ingredients[indexA];
    ingredients[indexA] = ingredients[indexB];
    ingredients[indexB] = tmp;
    this.setState({ ingredients });
  }

  moveDown(id) {
    let ingredients = [...this.state.ingredients];
    let indexA = ingredients.findIndex( i => i.id === id );
    let indexB = indexA + 1;
    let tmp = ingredients[indexA];
    ingredients[indexA] = ingredients[indexB];
    ingredients[indexB] = tmp;
    this.setState({ ingredients });
  }

  expand() {
    this.setState({ expand: !this.state.expand });
  }

  render() {
    let ingredients = this.state.ingredients.map( (ingredient, index) => {
      return (<Ingredient {...ingredient} index={index} expand={this.state.expand} />);
    });

    return (
      <div>
        <ButtonPanel clickHandler={this.addIngredient} />
        <hr />
        <div className="row">
          <div className="col s12 m4 offset-m1">
            <IngredientList
              ingredients={this.state.ingredients}
              deleteHandler={this.removeIngredient}
              moveUp={this.moveUp}
              moveDown={this.moveDown}
            />
            <button
              className="btn"
              onClick={this.expand}
            >
              { this.state.expand ? 'Collapse' : 'Expand' }
            </button>
          </div>
          <div className="col s12 m6">
            { ingredients }
          </div>
        </div>
      </div>
    );
  }
}

export default SandwhichShop;

