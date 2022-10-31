import React from "react";



const filterButtons = [
        {name: 'All', label: 'All'},
        {name: 'Active', label: 'Active'},
        {name: 'Done', label: 'Done'},
    ]



const ItemStatusFilter = ({onFilter}) => {
    const buttons = filterButtons.map(button => {
        return <button key={button.name}
                       onClick={() => onFilter(button.name)}
        >

            {button.label}
        </button>

    })
    return <div>
        {buttons}
    </div>
}

export default ItemStatusFilter