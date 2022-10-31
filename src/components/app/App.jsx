import React from 'react';
import TodoList from "../todoList";
import Header from "../header";
import SearchPanel from "../SearchComponent";
import ItemAddForm from "../itemAddForm";
import ItemStatusFilter from "../itemStatusFilter";


class App extends React.Component {
    id = 4

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, label: 'Learn React', done: false, important: false},
                {id: 2, label: 'Learn Redux', done: false, important: false},
                {id: 3, label: 'Learn JS', done: false, important: false},
            ],
            searchText: '',
            filter: 'all'
        }
    }

    onFilterChange = (filterName) => {
        this.setState( {
            filterName
        })
    }

    setSearchText = (text) => {
        this.setState({
            searchText: text
        })
    }

    onRemove(id) {
        this.setState((state) => {
            const index = state.items.findIndex((item) => item.id === id)
            const items = [
                ...state.items.slice(0, index),
                ...state.items.slice(index + 1)
            ]
            console.log({items})
            return {items}
        })
    }


    onAddItem = (label) => {
        this.setState((state) => {
            const item = {id: ++this.id, label: label, done: false, important: false}
            return {
                items: [...state.items, item]
            }
        })
    }

    toggleProperties = (items, id, property) => {
        const index = items.findIndex(item => item.id === id)
        const oldItem = items[index]
        const itemNewValue = !oldItem[property]
        const newItem = {...oldItem, [property]: itemNewValue}

        return [
            ...items.slice(0, index),
            newItem,
            ...items.slice(index + 1)
        ]
    }


    onToggleDone = (id) => {
        this.setState((state) => {
            return {
                items: this.toggleProperties(this.state.items, id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState((state) => {
            const items = this.toggleProperties(this.state.items, id, 'important')
            return {
                items
            }

        })
    }


    onSearchChange = (items, search) => {
        if (search.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    filterItems =(items, filter) => {
        if (filter === 'all'){
            return items
        } else if (filter === 'active') {
            return items, filter(item => !(item.done))
        } else if (filter === 'done') {
            return items, filter(item => !(item.done))
    }

    }

    render() {
        const {items, searchText, filter} = this.state

        const doneCounter = items.filter(item => item.done).length
        const toDoCounter = items.length - doneCounter
        const visibleItems = this.onSearchChange( this.filterItems(items, filter) , searchText)


        return (
            (<div>
                <section>
                    <Header doneCounter={doneCounter} toDoCounter={toDoCounter}/>
                    <SearchPanel setSearchText={this.setSearchText}/>

                    <ItemStatusFilter onFilter={this.onFilterChange}/>
                    <TodoList items={visibleItems}
                              onRemove={(id) => this.onRemove(id)}/>
                    <ItemAddForm onAddItem={this.onAddItem}/>
                </section>
            </div>)
        );
    }
}


export default App;