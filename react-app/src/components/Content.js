import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;