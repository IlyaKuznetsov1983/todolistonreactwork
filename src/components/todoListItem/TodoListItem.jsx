import React from "react";
import './todoListItem.css';


class TodoListItem extends React.Component {

    state = {
        done: false,
        mark: false
    }

    onToggleDone = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }
    onMark = () => {
        this.setState((state) => {
            return {
                mark: !state.mark
            }
        })
    }


    render() {
        const {done, mark} = this.state

        let styleMark = 'item'

        if (done) {
            styleMark += ' done'
        }
        if (mark) {
            styleMark += ' mark'
        }


        return (
            <div>
            <span className={styleMark} onClick={this.onToggleDone}>
                {this.props.label}
            </span>
                <button onClick={this.props.onRemove}>bye</button>
                <button onClick={this.onMark}>yeah</button>
            </div>)

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