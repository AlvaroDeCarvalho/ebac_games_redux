import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions } from '@testing-library/react'

import { AppStore, RootState, configuraStore } from '../store'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store = configuraStore(preloadedState),
    ...opecoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
}
