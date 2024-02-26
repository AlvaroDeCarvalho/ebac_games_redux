import { PreloadedState } from '@reduxjs/toolkit'
import { AppStore, RootState, configuraStore } from '../store'
import { RenderOptions, render } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

interface ExtendTNewRender extends Omit<RenderOptions, 'queries'> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProvider(
  elemento: React.ReactElement,
  {
    // eslint-disable-next-line no-empty-pattern
    preloadedState = {},
    store = configuraStore(preloadedState),
    ...outrasConfigs
  }: ExtendTNewRender = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    ...render(elemento, {
      wrapper: Encapsulador,
      ...outrasConfigs
    })
  }
}
