import { Button, message } from 'antd';
import React, {Component} from 'react';

class App extends Component {
  handleClick = () => {
    message.success('成功啦...');
    };
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.handleClick}>学习</Button>
      </div>
    );
  }
}

export default App;
