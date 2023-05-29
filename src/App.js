import React from 'react';
import Header from './components/Header';
import './App.css';
import Livro from './components/Livro';
import Titulo from './components/Titulo';
import Footer from './components/Footer';
import Promocao from './components/Promocao';
import Slides from './components/Slides';
import Formulario from './components/Formulario';
import {GlobalStorage} from './components/GlobalContext'


function App() {
  const slides = [
    {
      id: 'promo1',
      conteudo: <Promocao />,
    },
    {
      id: 'promo2',
      conteudo: <Promocao />,
    },
    {
      id: 'promo3',
      conteudo: <Promocao />,
    },
  ];

  return (
    <div>
      <GlobalStorage>
        <Header />
        <section className="destaque">
          <Titulo titulo="Em destaque hoje" color="#E74C18" />
          <div className="livros">
            <Livro preco="R$ 109,99" />
            <Livro preco="R$ 85,00" />
            <Livro preco="R$ 10,99" />
            <Livro preco="R$ 15,99" />
          </div>
        </section>
        <Slides slides={slides} />
        <Formulario />
      </GlobalStorage>
      <Footer />
    </div>
  );
}

export default App;
