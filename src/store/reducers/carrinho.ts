import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

/*
  refazendo a função =
  function adicionarAoCarrinho(jogo: Game) {
  if (carrinho.find((game) => game.id === jogo.id)) {
    alert('Item já adicionado')
  } else {
    setCarrinho([...carrinho, jogo])
  }
}
com Redux
*/

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      /*
       Nesse código, a linha const jogo = action.payload está extraindo o valor do payload da ação
       e armazenando-o em uma variável chamada jogo.
       A variável jogo agora conterá o valor do payload,
       que deve ser um objeto do tipo Game, conforme indicado pela definição do tipo PayloadAction<Game>.


       const jogo é um objeto do tipo Game após a extração do payload da ação.
        Isso permite que você acesse e manipule os atributos do objeto Game dentro da função redutora.

      */
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('item ja adicionado ')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
