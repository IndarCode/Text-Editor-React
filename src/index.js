import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav';
import Content from './component/Content';
import Footer from './component/Footer';
import './css/style.css'
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
      <Nav />
      <section className="container">
        <Content />
      </section>
      <Footer />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
