import React, { PureComponent } from 'react';
import { requestRoll } from './api';

import './Roller.css';

const DICE_VALUES = [4, 6, 8, 10, 12, 20];

export default class Roller extends PureComponent {
  render() {
    const dice = DICE_VALUES.map((value) => {
      return {
        value,
        desc: `d${value}`
      }
    });
    return (
      <div className="dice-button-list">Roll a dice
        {dice.map(({ value, desc }) => {
          return (
            <button key={value}
              onClick={() => requestRoll(value, 1)}>Roll {desc}</button>
          );
        })}
      </div>
    );
  }
}
