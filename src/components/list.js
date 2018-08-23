import React ,{ Component } from 'react';

class List extends Component{

    render(){
        return (
            <ul className ='collection'>
                <li className = 'collection-item'> This will be the todo list</li>
            </ul>
        )
    }
}

export default List;