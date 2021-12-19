import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from "./components/TOC";
import Control from './components/Control';
import Content from './components/Content';
import Create from './components/Create'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_id: 0,
      welcome: {title:'welcome', desc:'Hello, React!!'},
      subject: { title:"WEB", sub:"Hello, React" },
      contents: [
        { id:1, title:'HTML', desc:'HTML is for information' },
        { id:2, title:'CSS', desc:'CSS is design' },
        { id:3, title:'JavaScript', desc:'JavaScript is for interative' },
      ]
    }
  }

  render() {
    let content;

    switch( this.state.mode )
    {
      case "read":
        content = (
          <Content
            mode={this.state.mode}
            title={this.state.contents[ this.state.selected_id ].title}
            desc={this.state.contents[ this.state.selected_id ].desc}
            >
          </Content>
        );
        break;

      default:
        content = (
          <Create
            onCreate={function(title, desc){
              this.state.contents.push({
                id:this.state.contents.length+1,
                title,
                desc
              });
  
              this.setState({ contents:this.state.contents })
            }.bind(this)}
          ></Create>
        );
    }

    return (
      <div className="App">
        <Subject
          title={ this.state.subject.title }
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'})
          }.bind(this)}>
        </Subject>

        <Control
          onChangeMode={function(mode){
            this.setState({mode});
          }.bind(this)}
        >
        </Control>

        <TOC
          onChangePage={function(selected_id){
            this.setState({mode:'read', selected_id:selected_id-1})
          }.bind(this)}
          data={this.state.contents}>
        </TOC>

        {content}
      </div>
    )
  }
}

export default App;
