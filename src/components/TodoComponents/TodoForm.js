import React from "react";

export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            userTodoInput: ''
        }
    }

    handleInputChange = event => {
        console.log('event is', event.target.value);
        this.setState({
            userTodoInput: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        console.log("I got triggered");
    }


    render(){
        return(
            <form>
                <div>
                    <input value={this.state.userName} onChange={this.handleInputChange} />
                    <button type="submit" onClick={this.handleClick}>Add Todo</button>
                    <button>Clear Completed</button>
                </div>
            </form>            
        )
    }
}

