import './App.css';

function TodoItem() {
    return (

        <div className="itemBox" >
            <span className="nameTask">Name task</span>
            <div>
            <button className="delete-btn btn">D</button>
            <button className="done-btn btn">!</button>
            </div>
        </div>


    )
}

function CreateTask() {
    return (

        <div className=" inputBox">
            <input className="inputTask" placeholder="What needs to be done"/>
            <div>
                <button className="addTask-btn">Add</button>
            </div>
        </div>


    )
}

function Header() {
    return (
        <header className="header">
            <div className="logo" title="ToDo List">List'</div>
            <div className="statusOfCases"> '$' more to do, '$' done</div>
        </header>
    )
}

function SearchBlock() {
    return (
        <div className="searchBlock">
            <input className="search" placeholder='type to search'/>

            <div className="form_toggle">
                <div className="form_toggle-item item-1">
                    <input id="fid-1" type="radio" name="radio" value="off" checked/>
                    <label htmlFor="fid-1">All</label>
                </div>
                <div className="form_toggle-item item-2">
                    <input id="fid-2" type="radio" name="radio" value="off"/>
                    <label htmlFor="fid-2">Active</label>
                </div>
                <div className="form_toggle-item item-3">
                    <input id="fid-3" type="radio" name="radio" value="on"/>
                    <label htmlFor="fid-3">Done</label>
                </div>
            </div>
        </div>
    )
}





function App() {
  return (
    <div className="App">
      <Header/>
        <SearchBlock/>
        <section className="taskBlock">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <CreateTask/>

        </section>
    </div>
  );
}

export default App;
