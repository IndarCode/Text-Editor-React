import React from 'react';
import Form from './Form';
import './../images/header.jpg';

export default class Nav extends React.Component{
  constructor(props){
    super(props);
    this.showEditor = this.showEditor.bind(this);
    this.state = {
      active : false
    }

  }
  showEditor(){
    const show = this.state.active;
    this.setState({
      active: !show
    });
  }

  render(){
    return(

      <React.Fragment>
      <Form active={this.state.active} />
      <header>
        <img src={require('./../images/header.jpg')} alt="logo" />
        <button onClick={this.showEditor}>Write Me </button>
      </header>
      </React.Fragment>
    );
  }
}
