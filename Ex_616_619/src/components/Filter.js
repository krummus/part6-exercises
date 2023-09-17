import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adjustFilter } from '../reducers/filterReducer'

const VisibilityFilter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    console.log(filter, 'filter')

    const style = {
        marginBottom: 10
      }

    const updateFilter = async (event) => {
        dispatch(adjustFilter(event.target.value))
    }

    return (
        <div style={style}>
            filter shown with <input onChange={updateFilter} value={filter}/><button onClick={updateFilter} value=''>Clear</button>
        </div>
    )
}

export default VisibilityFilter

