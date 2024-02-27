import { configureStore } from '@reduxjs/toolkit'
import ListStore from './ListStore'

export const store = configureStore({
  reducer: {
    rtkList:ListStore
  },
})

