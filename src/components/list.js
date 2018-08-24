import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { get_all_list_data } from '../actions';
import { Link } from 'react-router-dom';


class List extends Component{
    componentDidMount(){
        this.props.get_all_list_data();
    }
 

    render(){
        const listElements = this.props.list.map(item => {
            return <li key={item._id} className = 'collection-item' >{item.title}</li>
        });
        return (
            <div>
                <h1 className = 'center' >Redux To Do</h1>
                <div className = 'row'>
                    <div className = 'col s12 right-align'>
                        <Link to='/add-item' className = 'btn' > Add Item </Link> 
                    </div>
                </div>
                <ul className ='collection'>
                    {listElements}
                </ul>
            </div>
        )
    }
}

 function mapStateToProps( state ){
    return {
        list: state.list.all
    }
 }

export default connect(mapStateToProps, {get_all_list_data:get_all_list_data})(List);
