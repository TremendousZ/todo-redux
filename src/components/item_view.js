import React , {Component} from 'react';
import { connect } from 'react-redux';
import {getSingleItem, delete_item, reset_single} from '../actions'

class ItemView extends Component {
    componentDidMount(){
        console.log('ID:', this.props.match.params.id);

        this.props.getSingleItem(this.props.match.params.id);
    }
    componentWillUnmount(){
            this.props.reset_single();
    }

    handleDelete = () =>{
        this.props.delete_item(this.props.match.params.id);
    }

    render () {
        console.log('Item:', this.props.item);
        if(this.props.error){
            return <h2 className="center red-text">{this.props.error}</h2>
        }
        return (
            <div>
                <h1 className = "center">View Item</h1>
                <h2>{this.props.item.title}</h2>
                <button className = "btn red darken-2" onClick={this.handleDelete.bind(this)} >Delete Item</button>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        item:state.list.single,
        error: state.list.error,
    }

    
}

export default connect(mapStateToProps, {getSingleItem, delete_item, reset_single})(ItemView);