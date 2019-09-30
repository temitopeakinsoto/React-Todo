import React from "react";

export default class TodoForm extends React.Component {


    render(){
        return(
            <form>
                <div>
                    <input type="text" />
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                </div>
            </form>
            
        )
    }
}

