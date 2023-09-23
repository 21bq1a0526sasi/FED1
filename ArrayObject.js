<html>
<body>
<script>
import React, { Component } from 'react';

class ChangingColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#FF0FF'
    };
  }

  redHandler = () => {
    this.setState({ color: '#FF0000' });
  };

  greenHandler = () => {
    this.setState({ color: '#00FF00' });
  };

  blueHandler = () => {
    this.setState({ color: '#0000FF' });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>Hello</h1>
        <button onClick={this.redHandler}>Red</button>
        <button onClick={this.greenHandler}>Green</button>
        <button onClick={this.blueHandler}>Blue</button>
      </div>
    );
  }
}

export default ChangingColor;
</script>
</body>
</html>