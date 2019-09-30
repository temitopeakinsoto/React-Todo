import React from "react";

export default class TodoForm extends React.Component {


    render(){
        return(
            <div>
                <input type="text" />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}

