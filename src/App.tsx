import { useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  /*
    As imagens do nosso ENDPOINT vem do arquivo db.json, para vincular
    este arquivo com o nosso DATABASE ficticio utilizamos a biblioteca json-server
    comando : npx json-server db.json --port 4000 --delay 1000
*/

  return (
    /*
    para temos acesso ao store, utilizamos o Provider, e passamos como argumento o store
    */
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
