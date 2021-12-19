import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from "./components/TOC";
import Content from './components/Content'
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
    let _title, _desc = null;
    if ( this.state.mode === 'welcome' ) {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if ( this.state.mode === 'read' ) {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
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

        <TOC
          onChangePage={function(selected_id){
            this.setState({mode:'read', selected_id:selected_id-1})
          }.bind(this)}
          data={this.state.contents}>
        </TOC>

        <Content
          title={this.state.contents[ this.state.selected_id ].title}
          desc={this.state.contents[ this.state.selected_id ].desc}>
        </Content>
      </div>
    )
  }
}

export default App;
