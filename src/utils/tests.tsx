import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'

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
    /*
    Essa linha é um padrão de inicialização de parâmetros, que significa que,
     se o parâmetro store não for fornecido explicitamente ao chamar a função,
      ele será inicializado chamando configuraStore(preloadedState).
    */
    store = configuraStore(preloadedState),
    ...opecoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  /*
  wrapper: Encapsulador => Aqui, wrapper está sendo definido como o componente funcional Encapsulador.
   Isso significa que o componente que está sendo renderizado (elemento) será envolto no componente
    Encapsulador durante o teste.

    O propósito de usar wrapper =>
    geralmente é usado para envolver o componente principal em um contexto específico.
     No seu caso, o Encapsulador está envolvendo o componente em um contexto Redux fornecido
     pelo Provider do Redux.
  */
  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opecoesAdicionais
    })
  }
}
