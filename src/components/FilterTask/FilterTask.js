import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../actions/actions';
// import {}


function FilterTask(props) {
    const { filterValue } = useSelector(state => state.filterTask);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <div className='filter-field'>
            <div className="filter-title">Фильтр списка по названию</div>
            <input type="text" onChange={handleChange} value={filterValue}/>
        </div>
    )
};

export default FilterTask;

