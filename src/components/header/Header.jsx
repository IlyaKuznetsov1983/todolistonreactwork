import React from "react";

const Header = ({doneCounter, toDoCounter}) => {
    return (<div>
            <h1>TodoList</h1>
            <h2><span>{toDoCounter}</span> TODO TASKS !
                 <span>!!!!!!!!{doneCounter}</span>DONE
            </h2>

        </div>
    )
}

export default Header