import React, { PureComponent } from 'react';

class RollResult extends PureComponent {
  render() {
    return (
      <div>Roll results
        {this.props.rolls.map((result, index) => {
          return (
            <div key={index}>{`d${result.dice}`}: {result.roll}</div>
          )
        })}
      </div>
    );
  }
}

export default RollResult;