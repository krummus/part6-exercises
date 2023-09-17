import React from 'react'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
    const dispatch = useDispatch()

    const style = {
        marginBottom: 10
      }

    const updateFilter = (event) => {
        dispatch({ type: 'filter/adjustFilter', payload: event.target.value })
    }

    return (
        <div style={style}>
            filter shown with <input onChange={updateFilter} /><button onClick={updateFilter} value=''>Clear</button>
        </div>
    )
}

export default VisibilityFilter