import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { get_all_list_data } from '../actions';

class List extends Component{
    componentDidMount(){
        this.props.get_all_list_data();
    }
 

    render(){
        const listElements = this.props.list.map(item => {
            return <li key={item._id} className = 'collection-item' >{item.title}</li>
        });
        return (
            <ul className ='collection'>
                {listElements}
            </ul>
        )
    }
}

 function mapStateToProps( state ){
    return {
        list: state.list.all
    }
 }

export default connect(mapStateToProps, {get_all_list_data:get_all_list_data})(List);
