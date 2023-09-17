import { createSlice } from "@reduxjs/toolkit"

const filterAtStart = {
    filter: ''
}

const filterSlice = createSlice({ 
  name: 'filter',
  initialState: filterAtStart,
  reducers: {
    adjustFilter(state, action) {
        state.filter = action.payload
    },
  },
})

export const { adjustFilter } = filterSlice.actions

export default filterSlice.reducer