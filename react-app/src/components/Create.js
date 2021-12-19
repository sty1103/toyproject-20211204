import { Component } from 'react';

class Create extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <input placeholder='title' className='title'></input>
                <br/>
                <input placeholder='desc' className='desc'></input>
                <br/>
                <button
                    onClick={function(){
                        console.log( document.getElementsByClassName('title').value )
                        this.props.onCreate(
                            document.getElementsByClassName('title')[0].value,
                            document.getElementsByClassName('desc')[0].value
                        );
                    }.bind(this)}
                >submit</button>
            </section>
        );
    }
}

export default Create;