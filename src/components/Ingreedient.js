import React from 'react';
import Bread from '../images/Bread.png';
import Lettuce from '../images/Lettuce.png';
import Tomato from '../images/Tomato.png';
import Mustard from '../images/Mustard.png';
import Bacon from '../images/Bacon.png';

class Ingreedient extends React.Component {
  constructor(props) {
    super(props);
    this.Bread = Bread;
    this.Lettuce = Lettuce;
    this.Tomato = Tomato;
    this.Lettuce = Lettuce;
    this.Mustard = Mustard;
    this.Bacon = Bacon;
  }

  render() {
    let { id, type, index } = this.props;

    let ingreedientStyle = {
      position: 'relative',
      paddingBottom: '15px',
      zIndex: -index
    }

    let innerStyle = {
      position: this.props.expand ? 'relative' : 'absolute',
      marginBottom: this.props.expand ? '-30px' : 'none',
      width: '200px'
    }

    return (
      <div key={++id} style={ ingreedientStyle }>
         <img
           src={this[type]}
           style={ innerStyle }
        />
      </div>
    )
  }
}

export default Ingreedient;
