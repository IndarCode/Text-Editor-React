import React from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content : "",
      p :'ddsds'
    }
this.parargraph = this.parargraph.bind(this);
this.image = this.image.bind(this);
this.link = this.link.bind(this);
this.heading = this.heading.bind(this);
  }

  parargraph(e){
    let ram = this.state.p;
    const parargraph = `<p dangerouslySetInnerHTML={{__html : this.state.p}}> ${ram}</p>`;
    let content = this.state.content;
    content += parargraph;
    this.setState({
      content : content
    });
  }

  
  heading(e){
    const heading = '<h1></h1>';
    let content = this.state.content;
    content += heading;
    this.setState({
      content : content
    });
  }
  image(e){
    const image = '<img src="" />';
    let content = this.state.content;
    content += image;
    this.setState({
      content : content
    });
  }

  link(e){
    const link = '<a href=""></a>';
    let content = this.state.content;
    content += link;
    this.setState({
      content : content
    });
  }




  render(){
    return(
      <div className={"editorHolder " + (this.props.active ? 'show' : '' )  } onClick={this.hideEditor}>
      <div className="editBar">
      <ul>
        <li><button onClick={this.parargraph}>Parargraph</button></li>
        <li><button onClick={this.heading}>H1</button><button>H2</button><button>H3</button><button>H4</button><button>H5</button><button>H6</button></li>
        <li><button onClick={this.image}>Image</button></li>
        <li><button onClick={this.link}>Link</button></li>
        <li><button>List</button></li>
        <li><button>Audio</button></li>
        <li><button>Video</button></li>
      </ul>
      </div>
      <div className="editor" dangerouslySetInnerHTML={{__html : this.state.content}}>

      </div>
      </div>
    );
  }
}
