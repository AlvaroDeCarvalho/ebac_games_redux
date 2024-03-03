import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import Produtos from '..'
import { renderWithProvider } from '../../../utils/tests'
import { screen, waitFor } from '@testing-library/react'
const server = setupServer(
  http.get('http://localhost:4000/produtos', () => {
    return HttpResponse.json(mocks)
  })
)

const mocks = [
  {
    categoria: 'RPG',
    id: 1,
    imagem: '',
    plataformas: ['pc'],
    preco: 100,
    precoAntigo: 120,
    titulo: 'GTA5'
  },
  {
    categoria: 'RPG',
    id: 2,
    imagem: '',
    plataformas: ['pc', 'linux'],
    preco: 100,
    precoAntigo: 200,
    titulo: 'league of legends'
  },
  {
    categoria: 'Ação e aventura',
    id: 3,
    imagem: '',
    plataformas: ['pc', 'ps4'],
    preco: 160,
    precoAntigo: 300,
    titulo: 'Just cause 3'
  },
  {
    categoria: 'terror',
    id: 4,
    imagem: '',
    plataformas: ['pc', 'nitendo', 'xbox'],
    preco: 120,
    precoAntigo: 140,
    titulo: 'thais carla o retorno'
  }
]

describe('teste para o container Produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('deve renderizar carretamente com o texto de carregando', () => {
    renderWithProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
  test('deve renderizar corretamente com a listagem de jogos ', async () => {
    const { debug } = renderWithProvider(<Produtos />)
    await waitFor(() => {
      expect(screen.getByText('GTA5')).toBeInTheDocument()

      debug()
    })
  })
})
