import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list:[]
  },
  reducers: {
    addElement: (state,action) => {
      state.list.push({title:action.payload}) 
    },
    rmvElement: (state,action) => {
        let tmpList = [...state.list]
        tmpList.splice(action.payload,1)
        state.list=tmpList
    },
  },
})

export const { addElement, rmvElement } = listSlice.actions
export default listSlice.reducer
