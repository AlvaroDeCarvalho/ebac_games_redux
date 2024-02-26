import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

/*
O PreloadedState é um tipo genérico fornecido pelo Redux Toolkit que representa o estado inicial
 pré-carregado da aplicação.

 É opcional e, se fornecido, será usado como estado inicial quando você cria a loja Redux.
*/
export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

/*
RootState é o tipo de retorno da função rootReducer,
 que é combinada pelos redutores carrinhoReducer e api.reducer.
 Portanto, RootState terá uma propriedade chamada carrinho do tipo
  CarrinhoState e uma propriedade associada à API.
*/

export type RootState = ReturnType<typeof rootReducer>

/*
AppStore é o tipo de retorno da função configuraStore, que utiliza o rootReducer.
Ele encapsula tanto o estado global da aplicação quanto as ações disponíveis.

*/

export type AppStore = ReturnType<typeof configuraStore>
