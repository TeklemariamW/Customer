import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h3>Hello, world!</h3>
        <ul>
                <li>List of customers.</li>
                <li>Date and time they want have service.</li>
        </ul>
      </div>
    );
  }
}
