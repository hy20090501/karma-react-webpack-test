import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

  }
  handleChange(e) {
    var newName = e.target.value;

    this.setState({
      name: newName
    });
  }
  handleClick(data) {
    console.log('you are clicking me...');
    console.log('msg: ' + data.msg);
  }
  render() {
    return (
      <div>
        <h1>Hello World!!</h1>

        <p>
          Please input your name here:
          <input ref="input"
            onChange={this.handleChange.bind(this)}
            value={this.state.name}
          />
        </p>

        <p>Hello, <span ref="name">{this.state.name}</span> </p>
        <div>
           <span className="flag" onClick={this.handleClick.bind(this,{msg:"1"})}>click me</span>
        </div>
      </div>
    );
  }
}

export default Root;
