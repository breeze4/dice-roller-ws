import React, { PureComponent } from 'react';
import moment from 'moment';

class RollResult extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false
    }
  }
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
  componentDidMount() {
    setInterval(() => {
      this.setState({
        dirty: !this.state.dirty
      })
    }, 5000) 
  }
}

export default RollResult;