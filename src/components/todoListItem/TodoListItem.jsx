import React from "react";

class TodoListItem extends React.Component {

    render() {
        return (
            (

                <div>
            <span>Name task
                <button onClick={this.props.onRemove}>D</button>

                <button>!</button>
            </span>
                </div>
            )
        )

    }
}


//
//
// const TodoListItem = () => {
//     return (
//
//         <div>
//             <span>Name task
//                 <button onClick={() => }>D</button>
//
//                 <button>!</button>
//             </span>
//         </div>
//
//
//     )
// }

export default TodoListItem