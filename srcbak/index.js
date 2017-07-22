import React from 'react';
class Welcome extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>{this.props.content}</div>;
  }
}
Welcome.displayName = 'Welcome';
Welcome.propTypes = {
  /**
   * content of element
   */
  content: React.PropTypes.string
};
Welcome.defaultProps = {
  content: 'Hello Tmall'
};
module.exports = Welcome;