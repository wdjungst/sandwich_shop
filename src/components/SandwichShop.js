import React from 'react';
import ButtonPanel from './ButtonPanel';
import Ingreedient from './Ingreedient';
import IngreedientList from './IngreedientList';
import Materialize from 'react-materialize';

class SandwhichShop extends React.Component {
  constructor(props) {
    super(props);
    this.addIngreedient = this.addIngreedient.bind(this);
    this.removeIngreedient = this.removeIngreedient.bind(this);
    this.expand = this.expand.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.state= { ingreedients: [], expand: false };
  }

  addIngreedient(type) {
    let id = this.state.ingreedients.length;

    let ingreedient = { id, type }
    window.Materialize.toast(type, 1500, 'rounded');
    if (id >= 3 && id % 3 === 0)
      window.Materialize.toast('COMBO BREAKER', 3000, 'bam')
    this.setState({ ingreedients: [ingreedient, ...this.state.ingreedients] });
  }

  removeIngreedient(id) {
    let ingreedients = this.state.ingreedients.filter( i => i.id !== id );
    this.setState({ ingreedients });
  }

  moveUp(id) {
    let ingreedients = [...this.state.ingreedients];
    let indexA = ingreedients.findIndex( i => i.id === id );
    let indexB = indexA - 1;
    let tmp = ingreedients[indexA];
    ingreedients[indexA] = ingreedients[indexB];
    ingreedients[indexB] = tmp;
    this.setState({ ingreedients });
  }

  moveDown(id) {
    let ingreedients = [...this.state.ingreedients];
    let indexA = ingreedients.findIndex( i => i.id === id );
    let indexB = indexA + 1;
    let tmp = ingreedients[indexA];
    ingreedients[indexA] = ingreedients[indexB];
    ingreedients[indexB] = tmp;
    this.setState({ ingreedients });
  }

  expand() {
    this.setState({ expand: !this.state.expand });
  }

  render() {
    let ingreedients = this.state.ingreedients.map( (ingreedient, index) => {
      return (<Ingreedient {...ingreedient} index={index} expand={this.state.expand} />);
    });

    return (
      <div>
        <ButtonPanel clickHandler={this.addIngreedient} />
        <hr />
        <div className="row">
          <div className="col s12 m4 offset-m1">
            <IngreedientList
              ingreedients={this.state.ingreedients}
              deleteHandler={this.removeIngreedient}
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
            { ingreedients }
          </div>
        </div>
      </div>
    );
  }
}

export default SandwhichShop;

