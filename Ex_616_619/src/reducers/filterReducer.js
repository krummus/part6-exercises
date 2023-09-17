import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({ 
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
        return action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export const adjustFilter = (filterValue) => {
  return async dispatch => {
    dispatch(setFilter(filterValue))
  }
}

export default filterSlice.reducer