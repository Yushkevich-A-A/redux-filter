import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { serviceAdd, serviceReset } from '../../actions/actions';
import './AddTask.css';

function AddTask(props) {
    const initValueForm = useSelector(state => state.addTask);
    const dispatch = useDispatch();
    const [ value , setValue ] = useState(initValueForm);
    const [ isEditing, setEditing ] = useState(false);

    useEffect(() => {
        if (value.content === '' && value.price === '') {
            setEditing(false);
        } else {
            setEditing(true);
        }
    }, [value])

    useEffect(() => {setValue(initValueForm)}, [initValueForm])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.content.trim() === '' || toString(value.price).trim() === '') {
            return;
        }
        dispatch(serviceAdd(value));
        dispatch(serviceReset());
        setValue(initValueForm);
    }

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const handleCancel = () => {
        dispatch(serviceReset());
        setValue(initValueForm);
    }

    return (
        <form className='form-task' onSubmit={handleSubmit}>
            <div className="form-input-content">
                <input className='input-content' type="text" name="content" value={value.content} onChange={handleChange}/>
            </div>
            <div className="form-input-price">
                <input className='input-price' type="text" name="price" value={value.price} onChange={handleChange}/>
            </div>
            <button type='Submit' className='form-save'>Save</button>
            {isEditing && <button className='form-edit' type='button' onClick={handleCancel}>Cancel</button>}
        </form>
    )
}

export default AddTask

