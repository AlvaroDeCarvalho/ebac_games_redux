import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//criando uma inferencia de tipo
export type RootReducer = ReturnType<typeof store.getState>
