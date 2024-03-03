import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderWithProvider } from '../../../utils/tests'

const jogo = {
  categoria: 'RPG',
  id: 1,
  imagem: '',
  plataformas: ['pc'],
  preco: 100,
  precoAntigo: 120,
  titulo: 'GTA5'
}
describe('Teste para o componenete Produto', () => {
  test('teste para o carregamento', () => {
    renderWithProvider(<Produto game={jogo}></Produto>)
    expect(screen.getByText('GTA5')).toBeInTheDocument()
  })
  test('Deve adicionar um item ao carrinho ', () => {
    const { store } = renderWithProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar')
    fireEvent.click(botao)
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
