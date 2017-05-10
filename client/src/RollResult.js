import React, { PureComponent } from 'react';
import moment from 'moment';

class RollResult extends PureComponent {
  render() {
    return (
      <div>Roll results
        {this.props.rolls.map((result, index) => {
          const relativeTime = moment(result.timestamp).fromNow();
          return (
            <div key={index}>
              {`d${result.dice}`}: {result.roll} - <small>{relativeTime}</small>
              </div>
          )
        })}
      </div>
    );
  }
}

export default RollResult;