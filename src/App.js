import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { GlobalStorage } from './components/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Formulario from './components/Formulario'
import Galeria from './components/Galeria';


function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/formulario' element={<Formulario />}/>
          <Route path='/livros' element={<Galeria />}/>
        </Routes>
      </GlobalStorage>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
