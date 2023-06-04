import React from 'react'
import Titulo from './Titulo'
import Livro from './Livro'
import Slides from './Slides'
import Promocao from './Promocao'
import { GlobalContext } from './GlobalContext'



const Home = () => {
const {livro} = React.useContext(GlobalContext)


const slides = [
  {
    id: 'promo1',
    conteudo: <Promocao numeroPromo="6" preco="15.99"  />,
  },
  {
    id: 'promo2',
    conteudo: <Promocao numeroPromo="5" preco="88.99"    />,
  },
  {
    id: 'promo3',
    conteudo: <Promocao numeroPromo="4"  preco="20.99"  />,
  },
];

  return (
    <main>
      <section className="destaque">
            <Titulo titulo="Em destaque hoje" color="#E74C18" />
            <div className="livros">
              <Livro preco="R$ 109,99" numLivro="0" />
              <Livro preco="R$ 100,99" numLivro="1" />
              <Livro preco="R$ 87,99" numLivro="5" />
              <Livro preco="R$ 15,90" numLivro="7" />
            </div>
          </section>
          <Slides slides={slides} livro={livro} />
    </main>
  )
}

export default Home
