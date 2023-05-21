import React from 'react';
import Header from './components/Header';
import './App.css';
import Livro from './components/Livro';
import Titulo from './components/Titulo';

function App() {
  return (
    <div>
      <Header />
      <section className="destaque">
        <Titulo titulo="Em destaque hoje" color="#000" />
        <div className="livros">
          <Livro />
          <Livro />
          <Livro />
          <Livro />
        </div>
      </section>
    </div>
  );
}

export default App;
