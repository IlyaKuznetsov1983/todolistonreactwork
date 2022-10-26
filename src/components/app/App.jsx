import React from 'react';
import TodoList from "../todoList";
import Header from "../header";
import SearchPanel from "../SearchComponent";
import ItemAddForm from "../itemAddForm";
import ItemStatusFilter from "../itemStatusFilter";


class App extends React.Component {

        constructor() {
            super();
            this.state = {
                items : [
                    {id: 1, label: 'Learn React'},
                    {id: 2, label: 'Learn Redux'},
                    {id: 3, label: 'Learn JS'},
                ],
                done: true
            }
        }
        onRemove (id) {
            this.setState((state) => {
                const index = state.items.findIndex((item) => item.id === id)
                const items = [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1)
                ]
                return {items}
            })
        }

   render () {
       return (
           (<div>
               <section>
                   <Header/>
                   <SearchPanel/>
                   <ItemStatusFilter/>
                   <TodoList items={this.state.items}
                             onRemove={(id) => this.onRemove(id)}/>
                   <ItemAddForm/>
               </section>
           </div>)
       );
   }
   }


export default App;