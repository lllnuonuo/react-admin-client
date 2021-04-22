import React, {Component} from 'react';
import { Button, message} from 'antd'


export default class App extends Component {

  handleClick = () => {
    message.info('This is a normal message');
  }


  render(){
    return <Button type="primary" onClick={this.handleClick}>button</Button>
  }
}