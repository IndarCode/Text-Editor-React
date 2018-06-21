import React from 'react';
import ReactDOM from 'react-dom';
import './../images/write1.jpg';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul className="articleList">
        <li>
         <div className="imgBlock">
          <img src={require('./../images/write1.jpg')} />
          </div>
          <div className="conBlock">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan aliquet auctor. </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan aliquet auctor. Ut ut nisi magna. Pellentesque pharetra lacus eget tristique gravida. Vestibulum luctus ligula enim, a tincidunt nibh aliquam in. Pellentesque in enim at quam euismod consectetur eget non purus. Aliquam erat volutpat. Nunc eu justo eget purus faucibus venenatis vitae eu quam. Sed nec pharetra sem. </p>
            <span> Read More </span>
          </div>
        </li>
        <li>
         <div className="imgBlock">
          <img src={require('./../images/write1.jpg')} />
          </div>
          <div className="conBlock">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan aliquet auctor. </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan aliquet auctor. Ut ut nisi magna. Pellentesque pharetra lacus eget tristique gravida. Vestibulum luctus ligula enim, a tincidunt nibh aliquam in. Pellentesque in enim at quam euismod consectetur eget non purus. Aliquam erat volutpat. Nunc eu justo eget purus faucibus venenatis vitae eu quam. Sed nec pharetra sem. </p>
            <span> Read More </span>
          </div>
        </li>
        <li>
         <div className="imgBlock">
          <img src={require('./../images/write1.jpg')} />
          </div>
          <div className="conBlock">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan aliquet auctor. </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan aliquet auctor. Ut ut nisi magna. Pellentesque pharetra lacus eget tristique gravida. Vestibulum luctus ligula enim, a tincidunt nibh aliquam in. Pellentesque in enim at quam euismod consectetur eget non purus. Aliquam erat volutpat. Nunc eu justo eget purus faucibus venenatis vitae eu quam. Sed nec pharetra sem. </p>
            <span> Read More </span>
          </div>
        </li>
      </ul>
    );
  }

}
