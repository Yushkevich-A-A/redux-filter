import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { serviceRemove, serviceChange, serviceReset } from '../../../actions/actions';
import './TaskItem.css';

function TaskItem(props) {
    const { item } = props; 

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(serviceRemove(id));
        dispatch(serviceReset());
    }

    const handleEdit = () => {
        dispatch(serviceChange(item))
    }

    return (
        <div className='task-item'>
                <div className="item-content">{item.content}</div>
                <div className="item-price">{item.price}</div>
                <button className="button-edit" onClick={handleEdit}></button>
                <button className="button-delete" onClick={() => handleRemove(item.id)}></button>
        </div>
    )
}

TaskItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default TaskItem;

