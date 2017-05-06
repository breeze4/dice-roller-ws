import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


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

RollResult.propTypes = {
  rolls: PropTypes.arrayOf(PropTypes.number)
};

export default RollResult;