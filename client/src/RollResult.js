import React, { PureComponent } from 'react';
import moment from 'moment';

import './RollResult.css';

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
              {`d${result.dice}`}: {result.roll}
              <span className="result-timestamp"> rolled {relativeTime}</span>
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